# PetFormance — Landing Page

Site institucional da **PetFormance**, agência de marketing veterinário. Construído com React via CDN (sem bundler), Babel standalone e CSS puro.

---

## Estrutura do projeto

```
index.html          ← entrada; carrega scripts na ordem correta
styles.css          ← todos os estilos (tokens, componentes, páginas, responsivo)
strings.js          ← textos da UI + constante WA (WhatsApp) — base para i18n
strings.json        ← espelho em JSON puro para ferramentas de tradução futuras
tweaks-panel.jsx    ← painel de dev para ajustes visuais em tempo real
app.jsx             ← roteador hash + paleta + render (~60 linhas)

components/
  icons.jsx         ← todos os ícones SVG inline
  ui.jsx            ← AnimatedLogo, BenefitCard, AudienceCard, StepCard, CtaRow…
  nav.jsx           ← Navbar + menu mobile
  footer.jsx        ← Footer

pages/
  home.jsx          ← Hero, benefícios, stats, "Quem atendemos"
  about.jsx         ← "Conheça nossa equipe" (cards de time)
  services.jsx      ← Identidade Visual, carrossel de etapas, mosaico 5×3
  results.jsx       ← Stub para os 3 cards de resultados

assets/
  logo-melhorada.png
  logo-animation.gif
  petformance-logo.png
```

## Como rodar

Qualquer servidor HTTP local serve. Exemplos:

```bash
# Python 3
python3 -m http.server 8000

# Node (npx)
npx serve .

# VS Code: extensão Live Server → botão "Go Live"
```

Abra `http://localhost:8000` no navegador.

> Não há build step, bundler ou dependências de npm.

## Navegação (roteamento)

O site usa roteamento por hash. Cada clique na navbar chama `history.pushState` e troca o componente de página no React — sem recarregar a página.

| Hash          | Página         |
|---------------|----------------|
| `#home`       | Home           |
| `#sobre`      | Sobre nós      |
| `#servicos`   | Serviços       |
| `#resultados` | Resultados     |

## Textos e internacionalização

Todo texto da UI está centralizado em `strings.js` (objeto `S`) e espelhado em `strings.json`. Para adicionar um idioma:

1. Adicione a chave `"en": { ... }` em `strings.json`
2. Crie `strings.en.js` com `const S = { ... }` correspondente
3. Carregue o arquivo correto no `index.html` conforme a preferência do usuário

## Contato / WhatsApp

O número de WhatsApp fica na constante `WA` em `strings.js`:

```js
const WA = "https://wa.me/5527996353150";
```

Todos os botões de CTA apontam para esse link.

## Paleta de cores

| Token           | Valor     | Uso                        |
|-----------------|-----------|----------------------------|
| `--brand`       | `#1F8FD4` | Azul principal             |
| `--brand-deep`  | `#0B5A8A` | Azul escuro / hover        |
| `--surface`     | `#F4F5F6` | Fundo da página            |
| `--ink`         | `#0A0F14` | Texto principal            |
| `--ink-soft`    | `#4A5562` | Texto secundário           |

A paleta pode ser trocada em tempo real pelo painel "Tweaks" (ícone de engrenagem no canto da tela).
