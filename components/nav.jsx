/* global React, S, WA, PhoneIcon, MenuIcon, CloseIcon */
const { useState, useCallback } = React;

function Nav({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const links = [
    { key: "home",     label: S.nav.home,     hash: "#home" },
    { key: "about",    label: S.nav.about,    hash: "#sobre" },
    { key: "services", label: S.nav.services, hash: "#servicos" },
    { key: "results",  label: S.nav.results,  hash: "#resultados" }
  ];

  function go(e, key, hash) {
    e.preventDefault();
    window.history.pushState(null, "", hash);
    onNavigate(key);
    closeMenu();
  }

  return (
    <>
      <header className="nav">
        <a href="#home" className="nav__brand" onClick={(e) => go(e, "home", "#home")}>
          <div className="nav__mark-wrap">
            <img src="assets/logo-melhorada.png" alt="" className="nav__mark" />
          </div>
          <span className="nav__word"><strong>Pet</strong>Formance</span>
        </a>
        <nav className="nav__links">
          {links.map(l =>
            <a key={l.key} href={l.hash}
              className={currentPage === l.key ? "is-active" : ""}
              onClick={(e) => go(e, l.key, l.hash)}>
              {l.label}
            </a>
          )}
        </nav>
        <div className="nav__right">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="nav__cta">
            <PhoneIcon size={16} /> <span className="nav__cta-label">{S.nav.contact}</span>
          </a>
          <button className="nav__burger" aria-label={S.a11y.menu_open} onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </button>
        </div>
      </header>

      {menuOpen &&
        <div className="mmenu" onClick={closeMenu}>
          <div className="mmenu__panel" onClick={e => e.stopPropagation()}>
            <button className="mmenu__close" aria-label={S.a11y.menu_close} onClick={closeMenu}><CloseIcon /></button>
            <nav className="mmenu__links">
              {links.map(l =>
                <a key={l.key} href={l.hash} onClick={(e) => go(e, l.key, l.hash)}>{l.label}</a>
              )}
            </nav>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mmenu__cta" onClick={closeMenu}>
              <PhoneIcon size={16} /> {S.nav.contact}
            </a>
          </div>
        </div>
      }
    </>
  );
}
