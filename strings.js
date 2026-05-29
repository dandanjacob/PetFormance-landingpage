/* WhatsApp & i18n strings — source of truth: strings.json */
/* global declaration so all page scripts can read WA and S  */

const WA = "https://wa.me/5527998846480";

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
    contact_button:   "Entre em contato conosco!",
    contact_hint:     "Resposta em menos de 24h úteis · sem compromisso",
    final_headline:   "Pronto para fazer sua clínica latir mais alto?",
    modal_specialist: "Falar com um especialista"
  },

  modal: {
    await_hint:       "Aguarde a virada…",
    default_pitch:    "Por que importa para você",
    platform_eyebrow: "Identidade Visual"
  },

  stats: [
    { number: "+80",    label: "clientes atendidos" },
    { number: "4,9",    suffix: "/5", label: "satisfação média" },
    { number: "3,2x",   label: "retorno médio em mídia" },
    { number: "6 anos", label: "de nicho veterinário" }
  ],

  audience: {
    eyebrow:       "Quem atendemos?",
    title:         "Marketing sob medida para cada cantinho do universo pet.",
    interact_hint: "Passe o mouse ou clique em cada ícone para saber mais ↓",
    cards: [
      { label: "Clínica Veterinária",       pitch: "Por que importa para você", blurb: "Tutor escolhe clínica por proximidade e confiança. Marketing local certo coloca você no topo das buscas, lota horários ociosos da agenda e transforma uma consulta em vínculo de anos." },
      { label: "Hospital Veterinário",      pitch: "Por que importa para você", blurb: "Quando o pet adoece de madrugada, ninguém pesquisa — abre o primeiro nome que lembra. Sua marca precisa estar gravada antes da emergência: presença, conteúdo e SEO o ano inteiro." },
      { label: "Veterinário Domiciliar",    pitch: "Por que importa para você", blurb: "Seu diferencial é o cuidado dentro da casa do tutor. Comunicar isso bem, bairro a bairro, é o que separa o profissional ocupado do profissional indicado." },
      { label: "Clínica de Especialidades", pitch: "Por que importa para você", blurb: "Tutores e veterinários referenciadores precisam confiar na sua técnica. Construímos autoridade com produção médica séria, conteúdo educativo e relacionamento com a rede que indica." },
      { label: "Lojas Pet",                 pitch: "Por que importa para você", blurb: "A próxima sacola de ração é uma busca a um clique. Vencemos na conveniência, no carinho e na recorrência — transformando comprador eventual em cliente fiel." }
    ]
  },

  about: {
    eyebrow:  "Quem somos",
    title:    "Conheça nossa equipe",
    subtitle: "Especialistas apaixonados pelo universo pet e pelos resultados dos nossos clientes.",
    team: [
      {
        name:   "Luísa Mendes Correa",
        photo:  "assets/luisa-1.jpeg",
        titles: ["Médica Veterinária", "Técnica em Zootecnia", "Pós-graduanda em Gestão e Empreendedorismo no Mercado PET"],
        bio:    "Médica Veterinária e Técnica em Zootecnia, Luísa une sensibilidade clínica à visão estratégica de quem entende o mercado pet de dentro para fora. Carinhosa, honesta e com presença natural, ela garante que cada estratégia da PetFormance seja desenvolvida com ética e total alinhamento ao CRMV — traduzindo o universo veterinário em comunicação que tutores confiam e lembram."
      }
    ]
  },

  services: {
    identity: {
      eyebrow:       "Não fazemos Marketing Genérico",
      title:         "Criamos autoridade e crescimento digital",
      subtitle:      "Hoje não basta ser um bom veterinário — você precisa ser ouvido, visto e lembrado. Aumentamos a visibilidade da sua marca e empresa com visão clínica, ética e estratégias alinhadas ao CRMV.",
      platforms_heading: "Veja em quais plataformas te ajudamos a construir",
      interact_hint: "Passe o mouse ou clique em cada plataforma para saber mais ↓",
      platforms: [
        { name: "Instagram",   color: "#E1306C", blurb: "Feed curado, stories estratégicos e Reels que engajam tutores e geram consultas de verdade." },
        { name: "WhatsApp",    color: "#25D366", blurb: "Atendimento ágil e campanhas diretas: o cliente certo, na hora certa, no canal favorito do brasileiro." },
        { name: "TikTok",      color: "#010101", blurb: "Vídeos curtos que viralizam: conteúdo educativo e autêntico que coloca sua marca na tela de descoberta de novos tutores." },
        { name: "Facebook",    color: "#1877F2", blurb: "Comunidade e alcance local: anúncios segmentados e conteúdo que cria vínculos duradouros com tutores." },
        { name: "Google Maps", color: "#4285F4", blurb: "Ficha otimizada, avaliações gerenciadas e presença garantida no 'perto de mim' das buscas locais." },
        { name: "Site / Web",  color: "#0B5A8A", blurb: ["Landing page responsiva e estática — carrega rápido, funciona em qualquer dispositivo.", "Formulário de contato / WhatsApp integrado para capturar leads.", "SEO on-page básico para ranquear no Google desde o dia 1."] }
      ]
    },
    steps: {
      eyebrow: "O processo",
      title:   "Entenda o passo a passo",
      nav:     { prev: "Anterior", next: "Próximo", dot: "Passo" },
      items: [
        { num: "01", title: "Diagnóstico", body: "Analisamos sua presença atual, benchmarks do setor e oportunidades específicas do seu nicho pet." },
        { num: "02", title: "Estratégia",  body: "Definimos posicionamento, personas e calendário editorial alinhado aos seus objetivos de crescimento." },
        { num: "03", title: "Criação",     body: "Desenvolvemos identidade visual, conteúdo e materiais que representam a essência da sua marca." },
        { num: "04", title: "Publicação",  body: "Gerenciamos a distribuição em todos os canais, no melhor horário e formato para cada plataforma." },
        { num: "05", title: "Análise",     body: "Monitoramos resultados, ajustamos estratégias e entregamos relatórios claros de retorno sobre investimento." }
      ]
    },
    videos: {
      eyebrow: "Na prática",
      title: "Veja nosso trabalho",
      items: [
        { title: "Presença que converte", desc: "Conteúdo criado para engajar tutores e gerar agendamentos reais — não só curtidas." },
        { title: "Identidade que marca", desc: "Visual pensado para o seu nicho: cada peça reforça o que faz a sua clínica ser especial." },
        { title: "Estratégia com resultado", desc: "Da publicação ao relatório — acompanhamos tudo para garantir crescimento consistente." }
      ]
    },

    management: {
      eyebrow:       "O que fazemos",
      title:         "Nossos serviços",
      interact_hint: "Clique em qualquer área para conhecer o que fazemos ↓",
      mosaic: [
        { area: "a", label: "Gerenciamento de Redes Sociais",       color: "#1F8FD4", body: "Cuidamos do dia a dia das suas redes: publicações, comentários e crescimento orgânico — para que você foque no que faz de melhor, o atendimento." },
        { area: "b", label: "Cronograma de Conteúdo",               color: "#0B5A8A", body: "Planejamos cada post com intenção: temas, datas, formatos e objetivos alinhados à sua marca e ao calendário do setor veterinário." },
        { area: "c", label: "Design para Stories e Feed",           color: "#2DA8E8", body: "Identidade visual aplicada em cada peça: artes de feed, stories e destaques que transmitem profissionalismo e geram reconhecimento imediato." },
        { area: "d", label: "Roteiros para Vídeo",                  color: "#155F8A", body: "Roteiros pensados para educar, engajar e converter — com linguagem acessível para tutores e tom alinhado à sua personalidade de marca." },
        { area: "e", label: "Gravação de Vídeo",                    color: "#1F8FD4", body: "Produção profissional de reels, vídeos institucionais e bastidores que humanizam sua equipe e aproximam tutores da sua marca." },
        { area: "f", label: "Edição Profissional de Vídeos",        color: "#0B5A8A", body: "Pós-produção completa: corte, legendas, trilha e motion — vídeos prontos para bombar no Instagram, YouTube e WhatsApp." },
        { area: "g", label: "Site, Link Bio e Landing Page",        color: "#2DA8E8", body: "Presença digital 24h: site institucional, link de bio inteligente ou landing page de conversão — rápido, responsivo e feito para gerar agendamentos." },
        { area: "h", label: "Tráfego Pago",                        color: "#155F8A", body: "Campanhas no Google Ads e Meta Ads segmentadas para o tutor certo, no momento certo, com orçamento controlado e retorno mensurável." },
        { area: "i", label: "Biografia do Instagram",               color: "#1F8FD4", body: "Sua bio é a primeira impressão. Criamos uma apresentação clara e otimizada que converte visitantes em seguidores e seguidores em clientes." },
        { area: "j", label: "Estratégias para Crescimento Digital", color: "#0B5A8A", body: "Diagnóstico completo da sua presença digital, posicionamento de marca e plano de ação customizado para crescimento sustentável e orgânico." },
        { area: "k", label: "Gestão de Presença Local",             color: "#155F8A", body: "Ficha do Google Meu Negócio otimizada, avaliações monitoradas e presença garantida nas buscas 'perto de mim' — fundamental para clínicas e hospitais." }
      ]
    }
  },

  results: {
    eyebrow:     "Resultados",
    title:       "Números que falam por si",
    subtitle:    "Cases reais, números reais. Veja o que a PetFormance fez por clínicas como a sua.",
    case_label:  "Case",
    placeholder: "Conteúdo em breve"
  },

  footer: {
    nav_heading:     "Navegar",
    contact_heading: "Contato",
    phone:           "+55 (27) 99884-6480",
    social_heading:  "Social",
    instagram:       "Instagram",
    legal:           "PetFormance · Marketing veterinário com qualidade."
  },

  a11y: {
    menu_open:   "Menu",
    menu_close:  "Fechar",
    modal_close: "Fechar"
  }
};
