/* global React, S, WA, PawIcon, ArrowIcon, CtaRow, PageHero */
const { useEffect } = React;

/* Placeholder — conteúdo a ser descrito pelo cliente */
function ResultsPage({ t }) {
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

  return (
    <>
      <section className="inner-page">
        <PageHero eyebrow={S.results.eyebrow} title={S.results.title}
          subtitle={S.results.subtitle} />

        {/* Os 3 cards serão adicionados quando o conteúdo for descrito */}
        <div className="results-grid" data-reveal>
          {[1, 2, 3].map(n => (
            <div key={n} className="result-card">
              <div className="result-card__placeholder">
                <span>{S.results.case_label} {n}</span>
                <p>{S.results.placeholder}</p>
              </div>
            </div>
          ))}
        </div>

        <CtaRow ctaStyle={t.ctaStyle} big />
      </section>
    </>
  );
}
