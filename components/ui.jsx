/* global React, WA, S, ArrowIcon */
const { useState, useEffect } = React;

/* ---------- Animated Logo ---------- */
function AnimatedLogo({ src, spin }) {
  const isGif = src && src.endsWith(".gif");
  return (
    <div className={`logo-stage${isGif ? " logo-stage--gif" : ""}`}>
      <div className="logo-halo" />
      <div className="logo-halo logo-halo--2" />
      <div className={`logo-spin ${!isGif && spin ? "is-on" : ""}`}>
        <img src={src} alt="PetFormance" className={`logo-img${isGif ? " logo-img--gif" : ""}`} />
      </div>
      <div className="logo-shadow" />
    </div>
  );
}

/* ---------- Benefit Card ---------- */
function BenefitCard({ icon, title, body, delay = 0, featured = false, style: extraStyle, ...rest }) {
  return (
    <article
      {...rest}
      className={`bcard ${featured ? "bcard--featured" : ""}`}
      style={{ animationDelay: `${delay}s`, ...extraStyle }}>
      <div className="bcard__icon">{icon}</div>
      <h3 className="bcard__title">{title}</h3>
      <p className="bcard__body">{body}</p>
    </article>
  );
}

/* ---------- Audience grid card ---------- */
function AudienceCard({ icon, label, index, onOpen, ...rest }) {
  return (
    <div className="aslot" {...rest}>
      <button type="button" className="acard" aria-label={label}
        onMouseEnter={() => onOpen(index)} onFocus={() => onOpen(index)} onClick={() => onOpen(index)}>
        <span className="acard__info" aria-hidden="true">i</span>
        <div className="acard__icon">{icon}</div>
      </button>
      <div className="acard__label">{label}</div>
    </div>
  );
}

/* ---------- Audience modal (flip + blur) ---------- */
function AudienceModal({ data, closing, onClose }) {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    if (closing) {
      const t = setTimeout(() => setShowBack(false), 325);
      return () => clearTimeout(t);
    }
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
          <div className="amodal__icon-lg">{data.icon}</div>
          <div className="amodal__label">{data.label}</div>
          <div className="amodal__hint">{S.modal.await_hint}</div>
        </div>
        <div className={`amodal__face amodal__face--back ${showBack ? "" : "is-hidden"}`}>
          <div className="amodal__back-eyebrow">{data.pitch || S.modal.default_pitch}</div>
          <h4 className="amodal__back-title">{data.label}</h4>
          <p className="amodal__blurb">{data.blurb}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="amodal__cta">
            {S.cta.modal_specialist} <ArrowIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Platform flip card (Serviços page) ---------- */
function PlatformCard({ icon, name, color, blurb, index, onOpen }) {
  return (
    <div className="aslot aslot--platform" data-reveal style={{"--reveal-delay": `${index * 0.08}s`, "--pcolor": color}}>
      <button type="button" className="acard acard--platform" aria-label={name}
        style={{"--pcolor": color}}
        onMouseEnter={() => onOpen(index)} onFocus={() => onOpen(index)} onClick={() => onOpen(index)}>
        <span className="acard__info" aria-hidden="true">i</span>
        <div className="acard__icon" style={{ color }}>{icon}</div>
      </button>
      <div className="acard__label">{name}</div>
    </div>
  );
}

/* ---------- Step card (carousel) ---------- */
function StepCard({ num, title, body, active, onClick }) {
  return (
    <div className={`step-card ${active ? "step-card--active" : ""}`} onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}>
      <div className="step-card__num">{num}</div>
      <h4 className="step-card__title">{title}</h4>
      <p className="step-card__body">{body}</p>
    </div>
  );
}

/* ---------- Page section hero (for inner pages) ---------- */
function PageHero({ eyebrow, title, subtitle }) {
  return (
    <div className="page-hero" data-reveal>
      {eyebrow && <div className="audience__eyebrow"><span>{eyebrow}</span></div>}
      <h1 className="page-hero__title">{title}</h1>
      {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
    </div>
  );
}

/* ---------- Shared CTA row ---------- */
function CtaRow({ ctaStyle, big, hint }) {
  return (
    <div className={`cta-row ${big ? "cta-row--final" : ""}`} data-reveal>
      {big && <h3 className="cta-row__big">{S.cta.final_headline}</h3>}
      <a href={WA} target="_blank" rel="noopener noreferrer" className={`cta cta--${ctaStyle}${big ? " cta--lg" : ""}`}>
        <span>{S.cta.contact_button}</span><ArrowIcon />
      </a>
      {hint && <p className="cta-row__hint">{S.cta.contact_hint}</p>}
    </div>
  );
}
