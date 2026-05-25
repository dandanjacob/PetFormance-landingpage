/* global React, S, WA */
/* global AnimatedLogo, BenefitCard, AudienceCard, AudienceModal, CtaRow */
/* global RocketIcon, StarIcon, TrophyIcon, PawIcon, ClinicIcon, HospitalIcon, HouseCallIcon, SpecialtyIcon, StoreIcon, ArrowIcon */
const { useState, useEffect, useRef, useCallback } = React;

function HomePage({ t }) {
  /* scroll reveal */
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

  /* audience modal */
  const [active, setActive] = useState(null);
  const closeTimer = useRef(null);
  const openModal = useCallback((idx) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setActive({ idx, closing: false });
  }, []);
  const closeModal = useCallback(() => {
    setActive((prev) => prev ? { ...prev, closing: true } : null);
    closeTimer.current = setTimeout(() => setActive(null), 650);
  }, []);
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const audienceIcons = [<ClinicIcon />, <HospitalIcon />, <HouseCallIcon />, <SpecialtyIcon />, <StoreIcon />];
  const audiences = S.audience.cards.map((card, i) => ({ ...card, icon: audienceIcons[i] }));

  return (
    <>
      {/* DECORATIVE PAWS */}
      <div className="paws" aria-hidden="true">
        <PawIcon size={200} /><PawIcon size={260} /><PawIcon size={180} />
        <PawIcon size={300} /><PawIcon size={220} /><PawIcon size={170} /><PawIcon size={240} />
      </div>

      {/* HERO */}
      <section className="hero" data-screen-label="02 Home · Hero">
        <div className="hero__logo-wrap">
          <AnimatedLogo src="assets/logo-animation.gif" spin={t.spin} />
          <div className="hero__brand hero__brand--overlay">
            <span className="hero__brand--blue">Pet</span><span className="hero__brand--ink">Formance</span>
          </div>
        </div>
        <p className="hero__tag" data-reveal>{t.tagline}</p>
        <h1 className="hero__headline" data-reveal style={{"--reveal-delay":"0.1s"}}>{t.headlineCopy}</h1>
        <div className="hero__scroll" data-reveal style={{"--reveal-delay":"0.2s"}}>
          <span>{S.hero.scroll_hint}</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* BENEFIT CARDS */}
      <section className="benefits" data-screen-label="03 Home · Benefícios">
        <BenefitCard data-reveal delay={0}
          icon={<RocketIcon size={108} strokeWidth={2.4} />}
          title={S.benefits[0].title} body={S.benefits[0].body} />
        <BenefitCard featured data-reveal style={{"--reveal-delay":"0.15s"}} delay={0.3}
          icon={<div className="stars-row">{[0,1,2,3,4].map(i => <StarIcon key={i} size={42} />)}</div>}
          title={S.benefits[1].title} body={S.benefits[1].body} />
        <BenefitCard data-reveal style={{"--reveal-delay":"0.3s"}} delay={0.6}
          icon={<TrophyIcon size={108} strokeWidth={2.4} />}
          title={S.benefits[2].title} body={S.benefits[2].body} />
      </section>

      {/* CTA 1 */}
      <CtaRow ctaStyle={t.ctaStyle} hint />

      {/* STATS */}
      {t.showStats &&
        <section className="stats" aria-label="Indicadores" data-reveal>
          {S.stats.map((stat, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="stat__sep" />}
              <div className="stat">
                <div className="stat__num">{stat.number}{stat.suffix && <span>{stat.suffix}</span>}</div>
                <div className="stat__lbl">{stat.label}</div>
              </div>
            </React.Fragment>
          ))}
        </section>
      }

      {/* QUEM ATENDEMOS */}
      <section className="audience" data-screen-label="04 Home · Quem atendemos">
        <div className="audience__head" data-reveal>
          <div className="audience__eyebrow"><PawIcon size={14} /> {S.audience.eyebrow}</div>
          <h2 className="audience__title">{S.audience.title}</h2>
          <p className="interact-hint">{S.audience.interact_hint}</p>
        </div>
        <div className="audience__grid">
          {audiences.map((a, i) =>
            <AudienceCard key={i} index={i} icon={a.icon} label={a.label} onOpen={openModal}
              data-reveal style={{"--reveal-delay": `${i * 0.08}s`}} />
          )}
        </div>
      </section>

      {active && <AudienceModal data={audiences[active.idx]} closing={active.closing} onClose={closeModal} />}

      {/* CTA 2 */}
      <CtaRow ctaStyle={t.ctaStyle} big />
    </>
  );
}
