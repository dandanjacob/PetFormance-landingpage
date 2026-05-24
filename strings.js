/* WhatsApp & i18n strings — source of truth: strings.json */
/* global declaration so all page scripts can read WA and S  */

const WA = "https://wa.me/5527996353150";

const S = {
  page_title: "PetFormance · Marketing veterinário com qualidade",
  nav: {
    home:     "PetFormance",
    about:    "Sobre nós",
    services: "Serviços",
    results:  "Resultados",
    contact:  "Contato"
  },
  hero: {
    tagline:    "PetFormance · Marketing para clínicas e profissionais pet",
    headline:   "Você precisa de marketing veterinário?",
    scroll_hint:"role para conhecer"
  },
  benefits: [
    { title: "Crescimento que decola",  body: "Estratégias focadas em resultado: mais consultas agendadas, mais tutores fiéis, mais autoridade no seu nicho." },
    { title: "Qualidade reconhecida",   body: "Cuidamos da sua marca como você cuida dos pacientes: com atenção, método e empatia. Resultado que se vê — e que tutores comentam." },
    { title: "Premiação como rotina",   body: "Mais de 80 clínicas, hospitais e lojas pet atendidas — campanhas que ganharam prêmios e, mais importante, ganharam clientes." }
  ],
  cta: {
    contact_button:  "Entre em contato conosco!",
    contact_hint:    "Resposta em menos de 24h úteis · sem compromisso",
    final_headline:  "Pronto para fazer sua clínica latir mais alto?",
    modal_specialist:"Falar com um especialista"
  },
  modal: {
    await_hint:    "Aguarde a virada…",
    default_pitch: "Por que importa para você"
  },
  stats: [
    { number: "+80",    label: "clientes atendidos" },
    { number: "4,9",    suffix: "/5", label: "satisfação média" },
    { number: "3,2x",   label: "retorno médio em mídia" },
    { number: "6 anos", label: "de nicho veterinário" }
  ],
  audience: {
    eyebrow: "Quem atendemos?",
    title:   "Marketing sob medida para cada cantinho do universo pet.",
    cards: [
      { label: "Clínica Veterinária",       pitch: "Por que importa para você", blurb: "Tutor escolhe clínica por proximidade e confiança. Marketing local certo coloca você no topo das buscas, lota horários ociosos da agenda e transforma uma consulta em vínculo de anos." },
      { label: "Hospital Veterinário",      pitch: "Por que importa para você", blurb: "Quando o pet adoece de madrugada, ninguém pesquisa — abre o primeiro nome que lembra. Sua marca precisa estar gravada antes da emergência: presença, conteúdo e SEO o ano inteiro." },
      { label: "Veterinário Domiciliar",    pitch: "Por que importa para você", blurb: "Seu diferencial é o cuidado dentro da casa do tutor. Comunicar isso bem, bairro a bairro, é o que separa o profissional ocupado do profissional indicado." },
      { label: "Clínica de Especialidades", pitch: "Por que importa para você", blurb: "Tutores e veterinários referenciadores precisam confiar na sua técnica. Construímos autoridade com produção médica séria, conteúdo educativo e relacionamento com a rede que indica." },
      { label: "Lojas Pet",                 pitch: "Por que importa para você", blurb: "A próxima sacola de ração é uma busca a um clique. Vencemos na conveniência, no carinho e na recorrência — transformando comprador eventual em cliente fiel." }
    ]
  },
  about: {
    eyebrow:     "Quem somos",
    title:       "Conheça nossa equipe",
    subtitle:    "Especialistas apaixonados pelo universo pet e pelos resultados dos nossos clientes.",
    team: [
      {
        name:       "Daniel Jacobsen",
        photo:      null,
        titles:     ["Técnico em Gestão", "Graduando em Marketing", "Especialista em Marketing Digital"],
        bio:        "Fundador da PetFormance, Daniel combina mais de 6 anos de experiência no mercado pet com domínio das ferramentas digitais mais modernas. Trabalhou com mais de 80 clínicas e hospitais veterinários, desenvolvendo estratégias que geram resultado real — mais agendamentos, mais fidelização e mais autoridade de marca."
      },
      {
        name:       "Colaborador(a)",
        photo:      null,
        titles:     ["Técnico(a) em Comunicação", "Graduando(a) em Publicidade"],
        bio:        "Em breve."
      }
    ]
  },
  services: {
    identity: {
      eyebrow:  "Identidade Visual",
      title:    "Sua marca em todos os canais certos",
      subtitle: "Criamos e gerenciamos sua presença nas plataformas que seus clientes já usam.",
      platforms: [
        { name: "Instagram",    color: "#E1306C", blurb: "Feed curado, stories estratégicos e Reels que engajam tutores e geram consultas de verdade." },
        { name: "WhatsApp",     color: "#25D366", blurb: "Atendimento ágil e campanhas diretas: o cliente certo, na hora certa, no canal favorito do brasileiro." },
        { name: "Facebook",     color: "#1877F2", blurb: "Comunidade e alcance local: anúncios segmentados e conteúdo que cria vínculos duradouros com tutores." },
        { name: "Google Maps",  color: "#4285F4", blurb: "Ficha otimizada, avaliações gerenciadas e presença garantida no 'perto de mim' das buscas locais." },
        { name: "Site / Web",   color: "#0B5A8A", blurb: "Vitrine digital 24h: site profissional, rápido e preparado para converter visitas em consultas agendadas." }
      ]
    },
    steps: {
      eyebrow: "O processo",
      title:   "Entenda o passo a passo",
      items: [
        { num: "01", title: "Diagnóstico",  body: "Analisamos sua presença atual, benchmarks do setor e oportunidades específicas do seu nicho pet." },
        { num: "02", title: "Estratégia",   body: "Definimos posicionamento, personas e calendário editorial alinhado aos seus objetivos de crescimento." },
        { num: "03", title: "Criação",      body: "Desenvolvemos identidade visual, conteúdo e materiais que representam a essência da sua marca." },
        { num: "04", title: "Publicação",   body: "Gerenciamos a distribuição em todos os canais, no melhor horário e formato para cada plataforma." },
        { num: "05", title: "Análise",      body: "Monitoramos resultados, ajustamos estratégias e entregamos relatórios claros de retorno sobre investimento." }
      ]
    },
    management: {
      eyebrow: "Gestão",
      title:   "Gestão de marketing e pessoas"
    }
  },
  results: {
    eyebrow: "Resultados",
    title:   "Números que falam por si"
  },
  footer: {
    nav_heading:     "Navegar",
    contact_heading: "Contato",
    email:           "contato@petformance.com.br",
    phone:           "+55 (27) 99635-3150",
    social_heading:  "Social",
    instagram:       "Instagram",
    linkedin:        "LinkedIn",
    legal:           "PetFormance · Marketing veterinário com qualidade."
  }
};
