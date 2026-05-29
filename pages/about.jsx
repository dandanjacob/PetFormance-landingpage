/* global React, S, WA, PawIcon, ArrowIcon, UserIcon, CtaRow, PageHero */
const { useEffect } = React;

function TeamCard({ member, index }) {
  return (
    <article className="team-card" data-reveal style={{"--reveal-delay": `${index * 0.15}s`}}>
      <div className="team-card__photo">
        {member.photo
          ? <img src={member.photo} alt={member.name} />
          : <div className="team-card__photo-placeholder"><UserIcon size={72} /></div>
        }
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">
          <span className="team-card__name--blue">Pet</span><span className="team-card__name--ink">Formance</span>
          <span className="team-card__name--full"> · {member.name}</span>
        </h3>
        <ul className="team-card__titles">
          {member.titles.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
        <p className="team-card__bio">{member.bio}</p>
      </div>
    </article>
  );
}

function AboutPage({ t }) {
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

  const data = S.about;

  return (
    <>
      <section className="inner-page">
        <PageHero eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle} />

        <div className="team-grid">
          {data.team.map((member, i) => <TeamCard key={i} member={member} index={i} />)}
        </div>

        <CtaRow ctaStyle={t.ctaStyle} hint />
      </section>
    </>
  );
}
