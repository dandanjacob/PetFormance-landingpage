/* global React, S, WA */
/* global ArrowIcon, ChevronIcon */
/* global InstagramIcon, WhatsAppIcon, FacebookIcon, GoogleMapsIcon, TikTokIcon, WebIcon */
/* global PlatformCard, CtaRow, PageHero */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- Platform modal (flip animation) ---- */
function PlatformModal({ data, closing, onClose }) {
  const [showBack, setShowBack] = useState(false);
  useEffect(() => {
    if (closing) { const t = setTimeout(() => setShowBack(false), 325); return () => clearTimeout(t); }
    setShowBack(false);
    const t = setTimeout(() => setShowBack(true), 550);
    return () => clearTimeout(t);
  }, [closing, data]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className={`amodal ${closing ? "is-closing" : ""}`} onClick={onClose}>
      <div className={`amodal__card ${closing ? "is-closing" : ""}`}
        onClick={(e) => e.stopPropagation()} onMouseLeave={onClose}>
        <div className={`amodal__face amodal__face--front ${showBack ? "is-hidden" : ""}`}>
          <div className="amodal__icon-lg" style={{ color: data.color }}>{data.icon}</div>
          <div className="amodal__label">{data.name}</div>
          <div className="amodal__hint">{S.modal.await_hint}</div>
        </div>
        <div className={`amodal__face amodal__face--back ${showBack ? "" : "is-hidden"}`}
          style={{ background: `linear-gradient(140deg, ${data.color} 0%, color-mix(in oklab, ${data.color} 60%, black) 100%)` }}>
          <div className="amodal__back-eyebrow">{S.modal.platform_eyebrow}</div>
          <h4 className="amodal__back-title">{data.name}</h4>
          {Array.isArray(data.blurb)
            ? <ul className="amodal__blurb-list">{data.blurb.map((b, i) => <li key={i}>{b}</li>)}</ul>
            : <p className="amodal__blurb">{data.blurb}</p>}
          <a href={WA} target="_blank" rel="noopener noreferrer" className="amodal__cta">
            {S.cta.modal_specialist} <ArrowIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---- Video carousel ---- */
function VideoCarousel() {
  const [active, setActive] = useState(0);
  const items = S.services.videos.items;
  const prev = () => setActive(i => (i - 1 + items.length) % items.length);
  const next = () => setActive(i => (i + 1) % items.length);

  return (
    <div className="vid-carousel" data-reveal>
      <div className="vid-slide">
        <div className="vid-slide__video">
          <div className="vid-placeholder" aria-hidden="true">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="white" opacity="0.7">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
        <h3 className="vid-slide__title">{items[active].title}</h3>
        <p className="vid-slide__desc">{items[active].desc}</p>
      </div>
      <div className="vid-nav">
        <button className="vid-btn" onClick={prev} aria-label="Anterior"><ChevronIcon dir="left" size={20} /></button>
        <div className="vid-dots">
          {items.map((_, i) => (
            <button key={i} className={`vid-dot ${i === active ? "vid-dot--active" : ""}`}
              onClick={() => setActive(i)} aria-label={`Vídeo ${i + 1}`} />
          ))}
        </div>
        <button className="vid-btn" onClick={next} aria-label="Próximo"><ChevronIcon dir="right" size={20} /></button>
      </div>
    </div>
  );
}

const platformIcons = [
  <InstagramIcon  size={44} />,
  <WhatsAppIcon   size={44} />,
  <TikTokIcon     size={44} />,
  <FacebookIcon   size={44} />,
  <GoogleMapsIcon size={44} />,
  <WebIcon        size={44} />
];

function ServicesPage({ t }) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const [active, setActive] = useState(null);
  const closeTimer = useRef(null);
  const openModal  = useCallback((idx) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setActive({ idx, closing: false });
  }, []);
  const closeModal = useCallback(() => {
    setActive((prev) => prev ? { ...prev, closing: true } : null);
    closeTimer.current = setTimeout(() => setActive(null), 650);
  }, []);
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const id = S.services.identity;
  const platforms = id.platforms.map((p, i) => ({ ...p, icon: platformIcons[i] }));

  return (
    <>
      {/* IDENTIDADE VISUAL */}
      <section className="inner-page">
        <PageHero eyebrow={id.eyebrow} title={id.title} subtitle={id.subtitle} />
        <h2 className="platforms-heading" data-reveal>{id.platforms_heading}</h2>
        <p className="interact-hint" data-reveal>{id.interact_hint}</p>
        <div className="audience__grid audience__grid--platforms" style={{ marginTop: "16px" }}>
          {platforms.map((p, i) => (
            <PlatformCard key={i} index={i} icon={p.icon} name={p.name} color={p.color} blurb={p.blurb} onOpen={openModal} />
          ))}
        </div>
      </section>

      {active && <PlatformModal data={platforms[active.idx]} closing={active.closing} onClose={closeModal} />}

      {/* VÍDEOS */}
      <section className="inner-page inner-page--alt">
        <div className="audience__head" data-reveal>
          <div className="audience__eyebrow"><span>{S.services.videos.eyebrow}</span></div>
          <h2 className="audience__title">{S.services.videos.title}</h2>
        </div>
        <VideoCarousel />
        <CtaRow ctaStyle={t.ctaStyle} />
      </section>
    </>
  );
}
