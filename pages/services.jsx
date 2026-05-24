/* global React, S, WA */
/* global PawIcon, ArrowIcon, ChevronIcon */
/* global InstagramIcon, WhatsAppIcon, FacebookIcon, GoogleMapsIcon, WebIcon */
/* global PlatformCard, StepCard, CtaRow, PageHero */
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
          <div className="amodal__back-eyebrow">Identidade Visual</div>
          <h4 className="amodal__back-title">{data.name}</h4>
          <p className="amodal__blurb">{data.blurb}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="amodal__cta">
            {S.cta.modal_specialist} <ArrowIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---- Step carousel — centers active card on mobile ---- */
function StepsCarousel({ steps }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[active];
    if (!card) return;
    const scrollLeft = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    track.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
  }, [active]);

  const prev = () => setActive(i => (i - 1 + steps.length) % steps.length);
  const next = () => setActive(i => (i + 1) % steps.length);

  return (
    <div className="steps-carousel" data-reveal>
      <div className="steps-track" ref={trackRef}>
        {steps.map((step, i) => (
          <StepCard key={i} num={step.num} title={step.title} body={step.body}
            active={i === active} onClick={() => setActive(i)} />
        ))}
      </div>
      <div className="steps-nav">
        <button className="steps-btn" onClick={prev} aria-label="Anterior"><ChevronIcon dir="left" size={20} /></button>
        <div className="steps-dots">
          {steps.map((_, i) => (
            <button key={i} className={`steps-dot ${i === active ? "steps-dot--active" : ""}`}
              onClick={() => setActive(i)} aria-label={`Passo ${i + 1}`} />
          ))}
        </div>
        <button className="steps-btn" onClick={next} aria-label="Próximo"><ChevronIcon dir="right" size={20} /></button>
      </div>
    </div>
  );
}

/* ---- Mosaic data ---- */
const MOSAIC_ITEMS = [
  { area:"a", label:"Estratégia de Marca",  color:"#1F8FD4", body:"Posicionamento claro, diferencial definido e mensagem que ressoa com tutores — a base de tudo que vem depois." },
  { area:"b", label:"Identidade Visual",    color:"#0B5A8A", body:"Logotipo, cores, tipografia e linguagem visual que transmitem profissionalismo e geram reconhecimento imediato." },
  { area:"c", label:"Conteúdo de Valor",    color:"#2DA8E8", body:"Textos, imagens e vídeos educativos que estabelecem autoridade e mantêm sua audiência engajada." },
  { area:"d", label:"Análise de Dados",     color:"#155F8A", body:"Métricas monitoradas, relatórios claros e decisões embasadas para maximizar o retorno de cada investimento." },
  { area:"e", label:"Gestão de Pessoas",    color:"#1F8FD4", body:"Equipe alinhada, processos definidos e cultura de atendimento que transforma clientes em defensores da marca." },
  { area:"f", label:"Relacionamento",       color:"#0B5A8A", body:"Comunicação ativa com tutores antes, durante e após o atendimento para fidelização de longo prazo." },
  { area:"g", label:"Mídia Paga",           color:"#2DA8E8", body:"Campanhas segmentadas no Google, Instagram e Facebook que chegam ao tutor certo, no momento certo." },
  { area:"h", label:"Presença Digital",     color:"#155F8A", body:"Site, redes sociais, Google Maps e WhatsApp integrados para uma experiência de marca consistente em todos os canais." },
  { area:"i", label:"Resultados",           color:"#0B5A8A", body:"Indicadores reais: mais agendamentos, mais fidelização, mais indicações — acompanhados e documentados a cada ciclo." }
];

/* ---- Mosaic modal (simple fade, sem flip) ---- */
function MosaicModal({ data, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="mmodal" onClick={onClose}>
      <div className="mmodal__box" onClick={(e) => e.stopPropagation()}>
        <div className="mmodal__strip" style={{ background: data.color }} />
        <div className="mmodal__content">
          <button className="mmodal__close" onClick={onClose} aria-label="Fechar">✕</button>
          <h3 className="mmodal__title">{data.label}</h3>
          <p className="mmodal__body">{data.body}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="cta cta--solid">
            {S.cta.modal_specialist} <ArrowIcon size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---- Mosaic grid ---- */
function MosaicGrid() {
  const [openItem, setOpenItem] = useState(null);
  return (
    <>
      <div className="mosaic" data-reveal>
        {MOSAIC_ITEMS.map((item, i) => (
          <div key={i} className="mosaic-item" role="button" tabIndex={0}
            style={{ gridArea: item.area, background: item.color }}
            onClick={() => setOpenItem(item)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpenItem(item); }}>
            <span className="mosaic-item__label">{item.label}</span>
            <span className="mosaic-item__plus" aria-hidden="true">+</span>
          </div>
        ))}
      </div>
      {openItem && <MosaicModal data={openItem} onClose={() => setOpenItem(null)} />}
    </>
  );
}

const platformIcons = [
  <InstagramIcon size={44} />,
  <WhatsAppIcon  size={44} />,
  <FacebookIcon  size={44} />,
  <GoogleMapsIcon size={44} />,
  <WebIcon       size={44} />
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
  const st = S.services.steps;
  const mg = S.services.management;

  const platforms = id.platforms.map((p, i) => ({ ...p, icon: platformIcons[i] }));

  return (
    <>
      <div className="paws" aria-hidden="true">
        <PawIcon size={200} /><PawIcon size={260} /><PawIcon size={300} /><PawIcon size={220} />
      </div>

      {/* IDENTIDADE VISUAL */}
      <section className="inner-page">
        <PageHero eyebrow={id.eyebrow} title={id.title} subtitle={id.subtitle} />
        <p className="interact-hint" data-reveal>
          Passe o mouse ou clique em cada plataforma para saber mais ↓
        </p>
        <div className="audience__grid" style={{ marginTop: "16px" }}>
          {platforms.map((p, i) => (
            <PlatformCard key={i} index={i} icon={p.icon} name={p.name} color={p.color} blurb={p.blurb} onOpen={openModal} />
          ))}
        </div>
      </section>

      {active && <PlatformModal data={platforms[active.idx]} closing={active.closing} onClose={closeModal} />}

      {/* PASSO A PASSO */}
      <section className="inner-page inner-page--alt">
        <div className="audience__head" data-reveal>
          <div className="audience__eyebrow"><span>{st.eyebrow}</span></div>
          <h2 className="audience__title">{st.title}</h2>
        </div>
        <StepsCarousel steps={st.items} />
        <CtaRow ctaStyle={t.ctaStyle} hint />
      </section>

      {/* GESTÃO DE MARKETING E PESSOAS */}
      <section className="inner-page">
        <div className="audience__head" data-reveal>
          <div className="audience__eyebrow"><span>{mg.eyebrow}</span></div>
          <h2 className="audience__title">{mg.title}</h2>
        </div>
        <p className="interact-hint" data-reveal>
          Clique em qualquer área para conhecer o que fazemos ↓
        </p>
        <MosaicGrid />
        <CtaRow ctaStyle={t.ctaStyle} />
      </section>
    </>
  );
}
