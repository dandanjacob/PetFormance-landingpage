/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle */
/* global S, Nav, Footer, HomePage, AboutPage, ServicesPage, ResultsPage, NotFoundPage */
const { useState, useEffect } = React;

function getPage() {
  const p = window.location.pathname;
  if (p === "/" || p === "")     return "home";
  if (p.startsWith("/sobre"))    return "about";
  if (p.startsWith("/servicos")) return "services";
  return "notfound";
}

function App() {
  const TWEAKS = /*EDITMODE-BEGIN*/{
    "palette":      "default",
    "spin":         true,
    "ctaStyle":     "outline",
    "headlineCopy": "Você precisa de marketing veterinário?",
    "tagline":      "PetFormance · Marketing para clínicas e profissionais pet"
  } /*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(TWEAKS);
  const [page, setPage] = useState(getPage);

  /* Browser back/forward */
  useEffect(() => {
    const onPop = () => setPage(getPage());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  /* Scroll to top on page change */
  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  /* Palette */
  const palettes = {
    default: { brand: "#1F8FD4", brandDeep: "#0B5A8A", accent: "#1F8FD4", surface: "#F4F5F6", ink: "#0A0F14" },
    ocean:   { brand: "#1976C2", brandDeep: "#0B4F8A", accent: "#1976C2", surface: "#EEF3F8", ink: "#0A0F14" },
    mono:    { brand: "#0A0F14", brandDeep: "#0A0F14", accent: "#1F8FD4", surface: "#F4F5F6", ink: "#0A0F14" }
  };
  useEffect(() => {
    const p = palettes[t.palette] || palettes.default;
    const r = document.documentElement;
    r.style.setProperty("--brand",      p.brand);
    r.style.setProperty("--brand-deep", p.brandDeep);
    r.style.setProperty("--accent",     p.accent);
    r.style.setProperty("--surface",    p.surface);
    r.style.setProperty("--ink",        p.ink);
  }, [t.palette]);

  return (
    <div className="page">
      <Nav currentPage={page} onNavigate={setPage} />

      {page === "home"     && <HomePage     t={t} />}
      {page === "about"    && <AboutPage    t={t} />}
      {page === "services" && <ServicesPage t={t} />}
      {page === "results"  && <ResultsPage  t={t} />}
      {page === "notfound" && <NotFoundPage />}

      <Footer onNavigate={setPage} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Visual">
          <TweakRadio label="Paleta" value={t.palette} onChange={(v) => setTweak("palette", v)}
            options={[{ value:"default", label:"PetFormance" }, { value:"ocean", label:"Ocean" }, { value:"mono", label:"Mono" }]} />
          <TweakRadio label="Botão CTA" value={t.ctaStyle} onChange={(v) => setTweak("ctaStyle", v)}
            options={[{ value:"outline", label:"Outline" }, { value:"solid", label:"Sólido" }]} />
        </TweakSection>
        <TweakSection title="Animação">
          <TweakToggle label="Girar logo no hero" value={t.spin} onChange={(v) => setTweak("spin", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
