/* global React, WA, S, PawIcon, ArrowIcon */

function NotFoundPage() {
  function goHome(e) {
    e.preventDefault();
    window.history.pushState(null, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <section className="inner-page nf">
      <div className="nf__content">
        <div className="nf__paw" aria-hidden="true"><PawIcon size={56} /></div>
        <p className="nf__code">404</p>
        <h1 className="nf__title">Página não encontrada</h1>
        <p className="nf__body">Parece que essa página fugiu da clínica. Vamos te levar de volta para o começo?</p>
        <div className="nf__actions">
          <a href="/" className="cta cta--solid" onClick={goHome}>
            <span>Voltar para o início</span><ArrowIcon />
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="cta cta--outline">
            <span>Falar com a gente</span><ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
