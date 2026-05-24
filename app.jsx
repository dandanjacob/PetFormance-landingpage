/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSlider */
const { useState, useEffect, useRef, useCallback } = React;

/* ---------- Icons ---------- */

const RocketIcon = ({ size = 40, strokeWidth = 1.8 }) =>
<svg width={size} height={size * 64 / 48} viewBox="0 0 48 64" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {/* Body + nose cone */}
    <path d="M24 4 C30 11 32 19 32 26 V44 H16 V26 C16 19 18 11 24 4 Z" />
    {/* Window */}
    <circle cx="24" cy="22" r="3.4" />
    {/* Body band */}
    <path d="M16 34 H32" />
    {/* Left fin */}
    <path d="M16 36 L8 48 V53 L16 50" />
    {/* Right fin */}
    <path d="M32 36 L40 48 V53 L32 50" />
    {/* Engine */}
    <path d="M19 44 V50 H29 V44" />
    {/* Flames */}
    <path d="M22 54 L21 60" />
    <path d="M24 54 V62" />
    <path d="M26 54 L27 60" />
  </svg>;


const StarIcon = ({ size = 22 }) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
    <path d="M12 3l2.7 5.7 6.3.9-4.6 4.4 1.1 6.2L12 17.3 6.5 20.2l1.1-6.2L3 9.6l6.3-.9L12 3z" />
  </svg>;


const TrophyIcon = ({ size = 40, strokeWidth = 1.8 }) =>
<svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {/* Cup */}
    <path d="M14 8 H34 V20 C34 26 29.5 31 24 31 C18.5 31 14 26 14 20 V8 Z" />
    {/* Left handle */}
    <path d="M14 12 H10 C7 12 6 14 6 16.5 C6 20 9 22 14 22" />
    {/* Right handle */}
    <path d="M34 12 H38 C41 12 42 14 42 16.5 C42 20 39 22 34 22" />
    {/* Stem */}
    <path d="M24 31 V37" />
    {/* Base */}
    <path d="M18 37 H30 V43 H18 Z" />
    {/* Floor */}
    <path d="M14 43 H34" />
  </svg>;


const PawIcon = ({ size = 18, color = "currentColor" }) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <ellipse cx="6" cy="10" rx="2" ry="2.6" />
    <ellipse cx="18" cy="10" rx="2" ry="2.6" />
    <ellipse cx="9.5" cy="5.5" rx="1.8" ry="2.3" />
    <ellipse cx="14.5" cy="5.5" rx="1.8" ry="2.3" />
    <path d="M12 11.5c3.2 0 5.6 2.6 5.6 5.4 0 1.7-1.4 2.6-3 2.6-1.1 0-1.7-.5-2.6-.5s-1.5.5-2.6.5c-1.6 0-3-.9-3-2.6 0-2.8 2.4-5.4 5.6-5.4Z" />
  </svg>;


const PhoneIcon = ({ size = 18 }) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="3" width="12" height="18" rx="2.5" />
    <path d="M11 18h2" />
  </svg>;


const MenuIcon = ({ size = 22 }) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>;


const CloseIcon = ({ size = 22 }) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>;


const ArrowIcon = ({ size = 18 }) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>;


const StoreIcon = ({ size = 56, strokeWidth = 1.8 }) =>
<svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h22l-2 3a4 4 0 0 1-7 0 4 4 0 0 1-7 0 4 4 0 0 1-6 0L5 12Z" />
    <path d="M5 12l2-5h18l2 5" />
    <path d="M7 16v10h18V16" />
    <path d="M14 26v-6h4v6" />
  </svg>;


const HospitalIcon = ({ size = 56, strokeWidth = 1.8 }) =>
<svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 28V10h20v18" />
    <path d="M3 28h26" />
    <path d="M16 14v8M12 18h8" />
    <path d="M11 28v-4h4v4M17 28v-4h4v4" />
  </svg>;


const ClinicIcon = ({ size = 56, strokeWidth = 1.8 }) =>
<svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="20" height="20" rx="2" />
    <path d="M16 11v10M11 16h10" />
  </svg>;


const HouseCallIcon = ({ size = 56, strokeWidth = 1.8 }) =>
<svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 15 16 6l11 9" />
    <path d="M8 13v13h16V13" />
    <circle cx="16" cy="19" r="3" />
    <path d="M14 17.5l1.3 1.5 3-3" />
  </svg>;


const SpecialtyIcon = ({ size = 56, strokeWidth = 1.8 }) =>
<svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="13" r="7" />
    <path d="M12 24l-2 4M20 24l2 4M16 20v8" />
    <path d="M13 12l2 2 4-4" />
  </svg>;


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
    </div>);

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
    </article>);

}

/* ---------- Audience grid card ---------- */

function AudienceCard({ icon, label, index, onOpen, ...rest }) {
  return (
    <div className="aslot" {...rest}>
      <button
        type="button"
        className="acard"
        aria-label={label}
        onMouseEnter={() => onOpen(index)}
        onFocus={() => onOpen(index)}
        onClick={() => onOpen(index)}>
        
        <span className="acard__info" aria-hidden="true">i</span>
        <div className="acard__icon">{icon}</div>
      </button>
      <div className="acard__label">{label}</div>
    </div>);

}

/* ---------- Audience modal (flip + blur) ---------- */

function AudienceModal({ data, closing, onClose }) {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    if (closing) {
      // 50% through close (0.65s anim), swap back → front content
      const t = setTimeout(() => setShowBack(false), 325);
      return () => clearTimeout(t);
    }
    setShowBack(false);
    // 50% through open (1.1s anim), swap front → back content while card is edge-on
    const t = setTimeout(() => setShowBack(true), 550);
    return () => clearTimeout(t);
  }, [closing, data]);

  useEffect(() => {
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={`amodal ${closing ? "is-closing" : ""}`} onClick={onClose}>
      <div
        className={`amodal__card ${closing ? "is-closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
        onMouseLeave={onClose}>
        
        <div className={`amodal__face amodal__face--front ${showBack ? "is-hidden" : ""}`}>
          <div className="amodal__icon-lg">{data.icon}</div>
          <div className="amodal__label">{data.label}</div>
          <div className="amodal__hint">Aguarde a virada…</div>
        </div>
        <div className={`amodal__face amodal__face--back ${showBack ? "" : "is-hidden"}`}>
          <div className="amodal__back-eyebrow">{data.pitch || "Por que importa para você"}</div>
          <h4 className="amodal__back-title">{data.label}</h4>
          <p className="amodal__blurb">{data.blurb}</p>
          <button className="amodal__cta" type="button">
            Falar com um especialista <ArrowIcon size={14} />
          </button>
        </div>
      </div>
    </div>);

}

/* ---------- App ---------- */

function App() {
  const TWEAKS = /*EDITMODE-BEGIN*/{
    "palette": "default",
    "spin": true,
    "ctaStyle": "outline",
    "headlineCopy": "Você precisa de marketing veterinário?",
    "tagline": "PetFormance · Marketing para clínicas e profissionais pet",
    "showStats": true
  } /*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(TWEAKS);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

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

  const palettes = {
    default: { brand: "#1F8FD4", brandDeep: "#0B5A8A", accent: "#1F8FD4", surface: "#F4F5F6", ink: "#0A0F14" },
    ocean: { brand: "#1976C2", brandDeep: "#0B4F8A", accent: "#1976C2", surface: "#EEF3F8", ink: "#0A0F14" },
    mono: { brand: "#0A0F14", brandDeep: "#0A0F14", accent: "#1F8FD4", surface: "#F4F5F6", ink: "#0A0F14" }
  };
  const p = palettes[t.palette] || palettes.default;

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--brand", p.brand);
    r.style.setProperty("--brand-deep", p.brandDeep);
    r.style.setProperty("--accent", p.accent);
    r.style.setProperty("--surface", p.surface);
    r.style.setProperty("--ink", p.ink);
  }, [t.palette]);

  /* ----- Audience modal state ----- */
  const [active, setActive] = useState(null); // { idx, closing }
  const closeTimer = useRef(null);

  const openModal = useCallback((idx) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActive({ idx, closing: false });
  }, []);

  const closeModal = useCallback(() => {
    setActive((prev) => prev ? { ...prev, closing: true } : null);
    closeTimer.current = setTimeout(() => setActive(null), 650);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  /* ----- Data ----- */
  const audiences = [
  {
    icon: <ClinicIcon />,
    label: "Clínica Veterinária",
    pitch: "Por que importa para você",
    blurb: "Tutor escolhe clínica por proximidade e confiança. Marketing local certo coloca você no topo das buscas, lota horários ociosos da agenda e transforma uma consulta em vínculo de anos."
  },
  {
    icon: <HospitalIcon />,
    label: "Hospital Veterinário",
    pitch: "Por que importa para você",
    blurb: "Quando o pet adoece de madrugada, ninguém pesquisa — abre o primeiro nome que lembra. Sua marca precisa estar gravada antes da emergência: presença, conteúdo e SEO o ano inteiro."
  },
  {
    icon: <HouseCallIcon />,
    label: "Veterinário Domiciliar",
    pitch: "Por que importa para você",
    blurb: "Seu diferencial é o cuidado dentro da casa do tutor. Comunicar isso bem, bairro a bairro, é o que separa o profissional ocupado do profissional indicado."
  },
  {
    icon: <SpecialtyIcon />,
    label: "Clínica de Especialidades",
    pitch: "Por que importa para você",
    blurb: "Tutores e veterinários referenciadores precisam confiar na sua técnica. Construímos autoridade com produção médica séria, conteúdo educativo e relacionamento com a rede que indica."
  },
  {
    icon: <StoreIcon />,
    label: "Lojas Pet",
    pitch: "Por que importa para você",
    blurb: "A próxima sacola de ração é uma busca a um clique. Vencemos na conveniência, no carinho e na recorrência — transformando comprador eventual em cliente fiel."
  }];


  return (
    <div className="page">
      {/* DECORATIVE PAWS */}
      <div className="paws" aria-hidden="true">
        <PawIcon size={200} />
        <PawIcon size={260} />
        <PawIcon size={180} />
        <PawIcon size={300} />
        <PawIcon size={220} />
        <PawIcon size={170} />
        <PawIcon size={240} />
      </div>
      {/* NAVBAR */}
      <header className="nav" data-screen-label="01 Home · Nav">
        <a href="#top" className="nav__brand">
          <img src="assets/logo-melhorada.png" alt="" className="nav__mark" />
          <span className="nav__word"><strong>Pet</strong>Formance</span>
        </a>
        <nav className="nav__links">
          <a href="#top" className="is-active">PetFormance</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#servicos">Serviços</a>
          <a href="#resultados">Resultados</a>
        </nav>
        <div className="nav__right">
          <a href="#contato" className="nav__cta">
            <PhoneIcon size={16} /> <span className="nav__cta-label">Contato</span>
          </a>
          <button className="nav__burger" aria-label="Menu" onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen &&
        <div className="mmenu" onClick={closeMenu}>
          <div className="mmenu__panel" onClick={e => e.stopPropagation()}>
            <button className="mmenu__close" aria-label="Fechar" onClick={closeMenu}>
              <CloseIcon />
            </button>
            <nav className="mmenu__links">
              <a href="#top" onClick={closeMenu}>PetFormance</a>
              <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
              <a href="#servicos" onClick={closeMenu}>Serviços</a>
              <a href="#resultados" onClick={closeMenu}>Resultados</a>
            </nav>
            <a href="#contato" className="mmenu__cta" onClick={closeMenu}>
              <PhoneIcon size={16} /> Contato
            </a>
          </div>
        </div>
      }

      {/* HERO */}
      <section className="hero" id="top" data-screen-label="02 Home · Hero">
        <div className="hero__logo-wrap">
          <AnimatedLogo src="assets/logo-animation.gif" spin={t.spin} />
          <div className="hero__brand hero__brand--overlay">
            <span className="hero__brand--blue">Pet</span><span className="hero__brand--ink">Formance</span>
          </div>
        </div>

        <p className="hero__tag" data-reveal>{t.tagline}</p>

        <h1 className="hero__headline" data-reveal style={{"--reveal-delay":"0.1s"}}>{t.headlineCopy}</h1>

        <div className="hero__scroll" data-reveal style={{"--reveal-delay":"0.2s"}}>
          <span>role para conhecer</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* BENEFIT CARDS */}
      <section className="benefits" data-screen-label="03 Home · Benefícios">
        <BenefitCard
          data-reveal
          delay={0}
          icon={<RocketIcon size={108} strokeWidth={2.4} />}
          title="Crescimento que decola"
          body="Estratégias focadas em resultado: mais consultas agendadas, mais tutores fiéis, mais autoridade no seu nicho." />

        <BenefitCard
          featured
          data-reveal
          style={{"--reveal-delay":"0.15s"}}
          delay={0.3}
          icon={<div className="stars-row">{[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} size={42} />)}</div>}
          title="Qualidade reconhecida"
          body="Cuidamos da sua marca como você cuida dos pacientes: com atenção, método e empatia. Resultado que se vê — e que tutores comentam." />

        <BenefitCard
          data-reveal
          style={{"--reveal-delay":"0.3s"}}
          delay={0.6}
          icon={<TrophyIcon size={108} strokeWidth={2.4} />}
          title="Premiação como rotina"
          body="Mais de 80 clínicas, hospitais e lojas pet atendidas — campanhas que ganharam prêmios e, mais importante, ganharam clientes." />

      </section>

      {/* CTA 1 */}
      <div className="cta-row" id="contato" data-reveal>
        <button className={`cta cta--${t.ctaStyle}`} type="button">
          <span>Entre em contato conosco!</span>
          <ArrowIcon />
        </button>
        <p className="cta-row__hint">Resposta em menos de 24h úteis · sem compromisso</p>
      </div>

      {/* STATS */}
      {t.showStats &&
      <section className="stats" aria-label="Indicadores" id="resultados" data-reveal>
          <div className="stat"><div className="stat__num">+80</div><div className="stat__lbl">clientes atendidos</div></div>
          <div className="stat__sep" />
          <div className="stat"><div className="stat__num">4,9<span>/5</span></div><div className="stat__lbl">satisfação média</div></div>
          <div className="stat__sep" />
          <div className="stat"><div className="stat__num">3,2x</div><div className="stat__lbl">retorno médio em mídia</div></div>
          <div className="stat__sep" />
          <div className="stat"><div className="stat__num">6 anos</div><div className="stat__lbl">de nicho veterinário</div></div>
        </section>
      }

      {/* QUEM ATENDEMOS */}
      <section className="audience" id="servicos" data-screen-label="04 Home · Quem atendemos">
        <div className="audience__head" data-reveal>
          <div className="audience__eyebrow"><PawIcon size={14} /> Quem atendemos?</div>
          <h2 className="audience__title">Marketing sob medida para cada cantinho do universo pet.</h2>
        </div>

        <div className="audience__grid">
          {audiences.map((a, i) =>
          <AudienceCard key={i} index={i} icon={a.icon} label={a.label} onOpen={openModal} data-reveal style={{"--reveal-delay": `${i * 0.08}s`}} />
          )}
        </div>
      </section>

      {/* MODAL */}
      {active &&
      <AudienceModal
        data={audiences[active.idx]}
        closing={active.closing}
        onClose={closeModal} />

      }

      {/* CTA 2 */}
      <div className="cta-row cta-row--final" data-reveal>
        <h3 className="cta-row__big">Pronto para fazer sua clínica latir mais alto?</h3>
        <button className={`cta cta--${t.ctaStyle} cta--lg`} type="button">
          <span>Entre em contato conosco!</span>
          <ArrowIcon />
        </button>
      </div>

      {/* FOOTER */}
      <footer className="foot" id="sobre">
        <div className="foot__brand">
          <span><strong>Pet</strong>Formance</span>
        </div>
        <div className="foot__cols">
          <div>
            <h4>Navegar</h4>
            <a href="#top">PetFormance</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#servicos">Serviços</a>
            <a href="#resultados">Resultados</a>
          </div>
          <div>
            <h4>Contato</h4>
            <a href="#">contato@petformance.com.br</a>
            <a href="#">+55 (00) 00000-0000</a>
          </div>
          <div>
            <h4>Social</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="foot__legal">© {new Date().getFullYear()} PetFormance · Marketing veterinário com qualidade.</div>
      </footer>

      {/* TWEAKS */}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Visual">
          <TweakRadio label="Paleta" value={t.palette} onChange={(v) => setTweak("palette", v)}
          options={[
          { value: "default", label: "PetFormance" },
          { value: "ocean", label: "Ocean" },
          { value: "mono", label: "Mono" }]
          } />
          <TweakRadio label="Botão CTA" value={t.ctaStyle} onChange={(v) => setTweak("ctaStyle", v)}
          options={[
          { value: "outline", label: "Outline" },
          { value: "solid", label: "Sólido" }]
          } />
        </TweakSection>
        <TweakSection title="Animação">
          <TweakToggle label="Girar logo no hero" value={t.spin} onChange={(v) => setTweak("spin", v)} />
        </TweakSection>
        <TweakSection title="Conteúdo">
          <TweakToggle label="Mostrar indicadores" value={t.showStats} onChange={(v) => setTweak("showStats", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);