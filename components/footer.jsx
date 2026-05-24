/* global React, S, WA */

function Footer({ onNavigate }) {
  function go(e, key, hash) {
    e.preventDefault();
    window.history.pushState(null, "", hash);
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
          <a href="#home"        onClick={(e) => go(e, "home",     "#home")}>{S.nav.home}</a>
          <a href="#sobre"       onClick={(e) => go(e, "about",    "#sobre")}>{S.nav.about}</a>
          <a href="#servicos"    onClick={(e) => go(e, "services", "#servicos")}>{S.nav.services}</a>
          <a href="#resultados"  onClick={(e) => go(e, "results",  "#resultados")}>{S.nav.results}</a>
        </div>
        <div>
          <h4>{S.footer.contact_heading}</h4>
          <a href={`mailto:${S.footer.email}`}>{S.footer.email}</a>
          <a href={WA} target="_blank" rel="noopener noreferrer">{S.footer.phone}</a>
        </div>
        <div>
          <h4>{S.footer.social_heading}</h4>
          <a href="#">{S.footer.instagram}</a>
          <a href="#">{S.footer.linkedin}</a>
        </div>
      </div>
      <div className="foot__legal">© {new Date().getFullYear()} {S.footer.legal}</div>
    </footer>
  );
}
