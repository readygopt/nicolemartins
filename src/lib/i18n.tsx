import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = {
  nav: { sobre: string; servicos: string; portfolio: string; processo: string; testemunhos: string; faq: string; marcar: string; menu: string };
  hero: { eyebrow: string; titleA: string; titleEm: string; titleB: string; sub1: string; sub2: string; ctaMarcar: string; ctaVer: string };
  about: { eyebrow: string; titleA: string; titleEm: string; p1: string; p2: string; p3: string; stats: { n: string; l: string }[] };
  services: {
    eyebrow: string; title: string; intro: string;
    items: { title: string; desc: string; duration: string; ideal: string }[];
    marcar: string;
  };
  portfolio: { eyebrow: string; title: string; cats: string[]; close: string };
  why: { eyebrow: string; titleA: string; titleEm: string; items: { t: string; d: string }[] };
  process: { eyebrow: string; titleA: string; titleEm: string; steps: { t: string; d: string }[] };
  testimonials: { eyebrow: string; items: { q: string; a: string; r: string }[] };
  faq: { eyebrow: string; titleA: string; titleEm: string; helper: string; helperLink: string; items: { q: string; a: string }[] };
  cta: { eyebrow: string; titleA: string; titleEm: string; note: string; marcar: string; instagram: string };
  footer: { tagline: string; contact: string; location: string; region: string; travel: string; rights: string; madeWith: string };
  whatsappAria: string;
  seo: { title: string; description: string };
};

const pt: Dict = {
  nav: { sobre: "Sobre", servicos: "Serviços", portfolio: "Trabalhos", processo: "Processo", testemunhos: "Testemunhos", faq: "FAQ", marcar: "Marcar", menu: "Marcar no WhatsApp" },
  hero: { eyebrow: "Maquilhadora · Algarve", titleA: "Maquilhagem para o seu ", titleEm: "dia", titleB: ".", sub1: "Noivas, eventos e sessões fotográficas.", sub2: "Trabalho em toda a região do Algarve.", ctaMarcar: "Marcar no WhatsApp", ctaVer: "Ver trabalhos" },
  about: {
    eyebrow: "Sobre", titleA: "Sobre ", titleEm: "mim",
    p1: "Sou a Nicole. Faço maquilhagem profissional há mais de dez anos.",
    p2: "Trabalho com noivas, eventos e sessões fotográficas em toda a região do Algarve.",
    p3: "Uso produtos de qualidade e adapto cada maquilhagem à pessoa que tenho à frente.",
    stats: [
      { n: "10+", l: "Anos de experiência" },
      { n: "300+", l: "Noivas" },
      { n: "40+", l: "Casamentos destino" },
    ],
  },
  services: {
    eyebrow: "Serviços", title: "Serviços.", intro: "Maquilhagem pensada para cada momento.",
    items: [
      { title: "Noivas", desc: "Maquilhagem para o dia do casamento. Natural, bonita e feita para durar.", duration: "3 a 4 horas", ideal: "Noivas no Algarve." },
      { title: "Casamento Destino", desc: "Pacotes para casamentos em vilas, resorts e quintas do Algarve.", duration: "Dia inteiro", ideal: "Casamentos internacionais." },
      { title: "Editorial e Fashion", desc: "Maquilhagem para editoriais, campanhas e produções.", duration: "Sob consulta", ideal: "Marcas, fotógrafos e revistas." },
      { title: "Eventos e Ocasiões", desc: "Maquilhagem para festas, batizados, formaturas e sessões de fotos.", duration: "1h30", ideal: "Momentos especiais." },
    ],
    marcar: "Marcar",
  },
  portfolio: { eyebrow: "Portfólio", title: "Trabalhos.", cats: ["Todos", "Noivas", "Destino", "Editorial", "Eventos", "Studio"], close: "Fechar" },
  why: {
    eyebrow: "Como trabalho", titleA: "Como ", titleEm: "trabalho",
    items: [
      { t: "Produtos de qualidade", d: "Marcas profissionais escolhidas para cada pele e para durar o dia todo." },
      { t: "Serviço próximo", d: "Consulta prévia e prova para desenharmos o look juntas." },
      { t: "Deslocação", d: "Vou ao seu hotel, casa ou local do evento em qualquer ponto do Algarve." },
      { t: "Português e inglês", d: "Trabalho com clientes nacionais e internacionais." },
      { t: "Longa duração", d: "Técnica e produtos pensados para aguentar o dia inteiro." },
      { t: "Atenção ao detalhe", d: "Cada pincelada com tempo e cuidado." },
    ],
  },
  process: {
    eyebrow: "Processo", titleA: "Como ", titleEm: "funciona",
    steps: [
      { t: "Contacto", d: "Fala comigo pelo WhatsApp. Vemos disponibilidade e detalhes." },
      { t: "Consulta", d: "Conversamos sobre o seu estilo, evento e preferências." },
      { t: "Prova", d: "Fazemos uma prova para acertar o look final." },
      { t: "No dia", d: "Chego a horas, com calma, no seu espaço." },
      { t: "Resultado", d: "Uma maquilhagem bonita, sua, feita para durar." },
    ],
  },
  testimonials: {
    eyebrow: "Testemunhos",
    items: [
      { q: "A minha maquilhagem durou do início ao fim do dia. Senti-me eu, com mais luz.", a: "Beatriz M.", r: "Noiva, Vilamoura" },
      { q: "Profissional, calma e atenta. Viemos de Londres e o resultado foi melhor do que esperávamos.", a: "Charlotte R.", r: "Casamento, Lagos" },
      { q: "Já trabalhei com várias maquilhadoras. A Nicole sabe onde parar.", a: "Inês F.", r: "Editora de moda" },
      { q: "Contratei-a para uma gala e recebi elogios a noite toda.", a: "Sofia A.", r: "Evento, Faro" },
    ],
  },
  faq: {
    eyebrow: "FAQ", titleA: "Perguntas ", titleEm: "frequentes",
    helper: "Não encontra a resposta? ", helperLink: "Envie mensagem",
    items: [
      { q: "Como marco?", a: "Envie mensagem no WhatsApp. Respondo no próprio dia com disponibilidade e valores." },
      { q: "Trabalha em todo o Algarve?", a: "Sim. De Sagres a Vila Real de Santo António, incluindo vilas, hotéis e quintas." },
      { q: "Faz casamentos internacionais?", a: "Sim. Trabalho com clientes de Portugal, Reino Unido, Alemanha, França e Estados Unidos." },
      { q: "É preciso fazer prova de maquilhagem?", a: "Para noivas, recomendo. Para outros eventos, é opcional." },
      { q: "Com quanto tempo devo marcar?", a: "De maio a setembro, o ideal é marcar com 6 a 12 meses de antecedência." },
      { q: "Que produtos usa?", a: "Marcas profissionais como Dior, Chanel, Charlotte Tilbury, Hourglass e Pat McGrath, escolhidas para cada pele." },
    ],
  },
  cta: {
    eyebrow: "Marcações abertas", titleA: "Vamos ", titleEm: "falar",
    note: "Poucas datas por mês. Envie mensagem para verificar disponibilidade.",
    marcar: "Marcar no WhatsApp", instagram: "Instagram",
  },
  footer: {
    tagline: "Maquilhagem profissional no Algarve.",
    contact: "Contacto", location: "Localização", region: "Algarve, Portugal",
    travel: "Deslocação a toda a região.",
    rights: "Todos os direitos reservados.", madeWith: "Feito com cuidado no Algarve.",
  },
  whatsappAria: "Marcar pelo WhatsApp",
  seo: { title: "Nicole Martins | Maquilhadora no Algarve", description: "Maquilhagem profissional para noivas, eventos e sessões fotográficas no Algarve." },
};

const en: Dict = {
  nav: { sobre: "About", servicos: "Services", portfolio: "Work", processo: "Process", testemunhos: "Reviews", faq: "FAQ", marcar: "Book", menu: "Book on WhatsApp" },
  hero: { eyebrow: "Makeup Artist · Algarve", titleA: "Makeup for your ", titleEm: "day", titleB: ".", sub1: "Brides, events and photo shoots.", sub2: "Available across the Algarve.", ctaMarcar: "Book on WhatsApp", ctaVer: "See work" },
  about: {
    eyebrow: "About", titleA: "About ", titleEm: "me",
    p1: "I'm Nicole. I've been working as a professional makeup artist for over ten years.",
    p2: "I work with brides, events and photo shoots across the Algarve region.",
    p3: "I use high quality products and adapt every look to the person in front of me.",
    stats: [
      { n: "10+", l: "Years of experience" },
      { n: "300+", l: "Brides" },
      { n: "40+", l: "Destination weddings" },
    ],
  },
  services: {
    eyebrow: "Services", title: "Services.", intro: "Makeup designed for each moment.",
    items: [
      { title: "Brides", desc: "Makeup for the wedding day. Natural, beautiful, made to last.", duration: "3 to 4 hours", ideal: "Brides in the Algarve." },
      { title: "Destination Weddings", desc: "Packages for weddings at villas, resorts and estates in the Algarve.", duration: "Full day", ideal: "International weddings." },
      { title: "Editorial & Fashion", desc: "Makeup for editorials, campaigns and productions.", duration: "On request", ideal: "Brands, photographers and magazines." },
      { title: "Events & Occasions", desc: "Makeup for parties, christenings, graduations and photo shoots.", duration: "1h30", ideal: "Special moments." },
    ],
    marcar: "Book",
  },
  portfolio: { eyebrow: "Portfolio", title: "Work.", cats: ["All", "Brides", "Destination", "Editorial", "Events", "Studio"], close: "Close" },
  why: {
    eyebrow: "How I work", titleA: "How I ", titleEm: "work",
    items: [
      { t: "Quality products", d: "Professional brands chosen for each skin and made to last all day." },
      { t: "Personal service", d: "A consultation and trial so we design the look together." },
      { t: "Travel", d: "I come to your hotel, home or venue anywhere in the Algarve." },
      { t: "Portuguese and English", d: "I work with local and international clients." },
      { t: "Long lasting", d: "Techniques and products chosen to last the whole day." },
      { t: "Attention to detail", d: "Every stroke with time and care." },
    ],
  },
  process: {
    eyebrow: "Process", titleA: "How it ", titleEm: "works",
    steps: [
      { t: "Contact", d: "Message me on WhatsApp. We check availability and details." },
      { t: "Consultation", d: "We talk about your style, event and preferences." },
      { t: "Trial", d: "We do a trial to fine tune the final look." },
      { t: "The day", d: "I arrive on time, calmly, at your space." },
      { t: "Result", d: "Beautiful makeup, yours, made to last." },
    ],
  },
  testimonials: {
    eyebrow: "Reviews",
    items: [
      { q: "My makeup lasted from start to finish. I felt like myself, with more light.", a: "Beatriz M.", r: "Bride, Vilamoura" },
      { q: "Professional, calm and attentive. We flew in from London and the result was better than we hoped.", a: "Charlotte R.", r: "Wedding, Lagos" },
      { q: "I've worked with many makeup artists. Nicole knows where to stop.", a: "Inês F.", r: "Fashion editor" },
      { q: "I hired her for a gala and got compliments the whole night.", a: "Sofia A.", r: "Event, Faro" },
    ],
  },
  faq: {
    eyebrow: "FAQ", titleA: "Frequently asked ", titleEm: "questions",
    helper: "Can't find the answer? ", helperLink: "Send a message",
    items: [
      { q: "How do I book?", a: "Send a message on WhatsApp. I reply the same day with availability and prices." },
      { q: "Do you work across the Algarve?", a: "Yes. From Sagres to Vila Real de Santo António, including villas, hotels and estates." },
      { q: "Do you do international weddings?", a: "Yes. I work with clients from Portugal, the UK, Germany, France and the United States." },
      { q: "Do I need a makeup trial?", a: "For brides, I recommend it. For other events, it's optional." },
      { q: "How far in advance should I book?", a: "From May to September, ideally 6 to 12 months in advance." },
      { q: "Which products do you use?", a: "Professional brands such as Dior, Chanel, Charlotte Tilbury, Hourglass and Pat McGrath, chosen for each skin." },
    ],
  },
  cta: {
    eyebrow: "Booking open", titleA: "Let's ", titleEm: "talk",
    note: "A few dates each month. Send a message to check availability.",
    marcar: "Book on WhatsApp", instagram: "Instagram",
  },
  footer: {
    tagline: "Professional makeup in the Algarve.",
    contact: "Contact", location: "Location", region: "Algarve, Portugal",
    travel: "Available across the region.",
    rights: "All rights reserved.", madeWith: "Made with care in the Algarve.",
  },
  whatsappAria: "Book on WhatsApp",
  seo: { title: "Nicole Martins | Makeup Artist in the Algarve", description: "Professional makeup for brides, events and photo shoots in the Algarve." },
};

const dicts: Record<Lang, Dict> = { pt, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "pt" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
