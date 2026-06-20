/* global React, S, WA */

function Footer({ onNavigate }) {
  function go(e, key, path) {
    e.preventDefault();
    window.history.pushState(null, "", path);
    onNavigate(key);
    window.scrollTo(0, 0);
  }

  return (
    <footer className="foot">
      <div className="foot__brand">
        <span><strong>Pet</strong>Formance</span>
      </div>
      <div className="foot__cols">
        <div>
          <h4>{S.footer.nav_heading}</h4>
          <a href="/"         onClick={(e) => go(e, "home",     "/")}>{S.nav.home}</a>
          <a href="/sobre"    onClick={(e) => go(e, "about",    "/sobre")}>{S.nav.about}</a>
          <a href="/servicos" onClick={(e) => go(e, "services", "/servicos")}>{S.nav.services}</a>
        </div>
        <div>
          <h4>{S.footer.contact_heading}</h4>
          <a href={WA} target="_blank" rel="noopener noreferrer">{S.footer.phone}</a>
        </div>
        <div>
          <h4>{S.footer.social_heading}</h4>
          <a href="https://www.instagram.com/petformanceagency/" target="_blank" rel="noopener noreferrer">{S.footer.instagram}</a>
        </div>
        <div>
          <h4>Dúvidas</h4>
          <a href="servicos-lp.html#landing-page" target="_blank" rel="noopener noreferrer">Criação de Landing Page</a>
          <a href="servicos-lp.html#nao-incluido" target="_blank" rel="noopener noreferrer">O que não está incluído</a>
          <a href="servicos-lp.html#orcamento" target="_blank" rel="noopener noreferrer">Orçamento</a>
          <a href="servicos-lp.html#duvidas" target="_blank" rel="noopener noreferrer">Tire sua dúvida</a>
        </div>
      </div>
      <div className="foot__legal">© {new Date().getFullYear()} {S.footer.legal}</div>
    </footer>
  );
}
