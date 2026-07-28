import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Nav, WHATSAPP } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/powder-sunset.jpg.asset.json";
import portraitImg from "@/assets/estetica.jpg.asset.json";
import lipstickImg from "@/assets/lipstick.jpg.asset.json";
import laughing1 from "@/assets/laughing-bride.jpg.asset.json";
import laughing2 from "@/assets/laughing-bride-2.jpg.asset.json";
import brideAdjust from "@/assets/bride-adjust.jpg.asset.json";
import powderBeach from "@/assets/powder-beach.jpg.asset.json";
import eventoImg from "@/assets/evento.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicole Martins | Maquilhadora no Algarve" },
      {
        name: "description",
        content:
          "Maquilhagem profissional para noivas, eventos e sessões fotográficas no Algarve.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Nicole Martins Makeup Artist",
          image: heroImg.url,
          description:
            "Maquilhadora profissional no Algarve. Noivas, eventos e sessões fotográficas.",
          areaServed: "Algarve, Portugal",
          address: { "@type": "PostalAddress", addressRegion: "Algarve", addressCountry: "PT" },
          priceRange: "€€€",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="bg-cream text-ink">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <WhyMe />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg.url}
          alt="Nicole Martins a maquilhar uma noiva ao pôr-do-sol no Algarve"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-end px-6 pb-24 pt-32 md:px-10 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="eyebrow text-white/90"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Maquilhadora · Algarve
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-serif text-[44px] leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Maquilhagem para o seu <em className="italic text-champagne">dia</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          Noivas, eventos e sessões fotográficas.
          <br />
          Trabalho em toda a região do Algarve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary bg-white text-ink border-white hover:bg-champagne-deep hover:text-white hover:border-champagne-deep">
            Marcar no WhatsApp
          </a>
          <a href="#portfolio" className="btn-ghost text-white border-white/80 hover:bg-white hover:text-ink">
            Ver trabalhos
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/80">Ver mais</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-white/70"
        />
      </motion.div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Dior Beauty", "Chanel", "Charlotte Tilbury", "Hourglass", "Armani Beauty", "Nars", "Westman Atelier", "Pat McGrath"];
  return (
    <section className="border-y border-line py-8 overflow-hidden bg-beige/40">
      <div className="flex gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-serif text-2xl italic text-muted-ink/70 md:text-3xl">
            {it} <span className="ml-16 text-champagne">·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-40">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src={portraitImg.url}
              alt="Retrato de Nicole Martins, maquilhadora profissional"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="hairline flex-1" />
            <p className="font-serif text-sm italic text-champagne-deep">Nicole Martins</p>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-12">
          <Reveal>
            <p className="eyebrow">Sobre</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              Sobre <em className="italic text-champagne-deep">mim</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-ink md:text-lg">
              <p>
                Sou a Nicole. Faço maquilhagem profissional há mais de dez anos.
              </p>
              <p>
                Trabalho com noivas, eventos e sessões fotográficas em toda a região do Algarve.
              </p>
              <p>
                Uso produtos de qualidade e adapto cada maquilhagem à pessoa que tenho à frente.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-line pt-10">
              {[
                { n: "10+", l: "Anos de experiência" },
                { n: "300+", l: "Noivas" },
                { n: "40+", l: "Casamentos destino" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-4xl text-ink md:text-5xl">{s.n}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-ink">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  {
    n: "01",
    title: "Noivas",
    img: laughing2.url,
    desc: "Maquilhagem para o dia do casamento. Natural, bonita e feita para durar.",
    bullets: ["Consulta prévia", "Prova de maquilhagem", "Deslocação incluída", "Retoques ao longo do dia"],
    duration: "3 a 4 horas",
    ideal: "Noivas no Algarve.",
  },
  {
    n: "02",
    title: "Casamento Destino",
    img: powderBeach.url,
    desc: "Pacotes para casamentos em vilas, resorts e quintas do Algarve.",
    bullets: ["Noiva e convidadas", "Prova personalizada", "Acompanhamento no dia", "Kit de retoques"],
    duration: "Dia inteiro",
    ideal: "Casamentos internacionais.",
  },
  {
    n: "03",
    title: "Editorial e Fashion",
    img: eventoImg.url,
    desc: "Maquilhagem para editoriais, campanhas e produções.",
    bullets: ["Direção de beleza", "Beauty e body", "Continuidade ao longo do dia", "Trabalho com equipa"],
    duration: "Sob consulta",
    ideal: "Marcas, fotógrafos e revistas.",
  },
  {
    n: "04",
    title: "Eventos e Ocasiões",
    img: lipstickImg.url,
    desc: "Maquilhagem para festas, batizados, formaturas e sessões de fotos.",
    bullets: ["Look à sua medida", "Aconselhamento simples", "Produtos de longa duração", "Sessão calma"],
    duration: "1h30",
    ideal: "Momentos especiais.",
  },
];

function Services() {
  return (
    <section id="servicos" className="bg-beige/50 py-24 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal><p className="eyebrow">Serviços</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] md:text-6xl">
                Serviços.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted-ink">
              Maquilhagem pensada para cada momento.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-lg bg-card border border-line transition-shadow duration-700 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <span className="absolute top-6 left-6 font-serif text-sm italic text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    {s.n}
                  </span>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-3xl md:text-4xl">{s.title}</h3>
                    <span className="font-serif text-sm italic text-champagne-deep">{s.n}</span>
                  </div>
                  <p className="mt-4 text-muted-ink leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 space-y-2 text-sm text-ink/80">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 h-px w-4 shrink-0 bg-champagne" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs uppercase tracking-[0.14em] text-muted-ink">
                    <span>{s.duration}</span>
                    <span className="text-right normal-case tracking-normal">{s.ideal}</span>
                  </div>
                  <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink link-underline">
                    Marcar <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
const portfolio = [
  { src: laughing2.url, ratio: "aspect-[3/4]", cat: "Noivas" },
  { src: powderBeach.url, ratio: "aspect-[4/5]", cat: "Destino" },
  { src: eventoImg.url, ratio: "aspect-[3/4]", cat: "Editorial" },
  { src: brideAdjust.url, ratio: "aspect-[3/4]", cat: "Noivas" },
  { src: lipstickImg.url, ratio: "aspect-[4/3]", cat: "Eventos" },
  { src: laughing1.url, ratio: "aspect-[16/10]", cat: "Noivas" },
  { src: powderBeach.url, ratio: "aspect-[3/4]", cat: "Destino" },
  { src: portraitImg.url, ratio: "aspect-[4/5]", cat: "Studio" },
];

function Portfolio() {
  const [filter, setFilter] = useState<string>("Todos");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const cats = ["Todos", "Noivas", "Destino", "Editorial", "Eventos", "Studio"];
  const filtered = filter === "Todos" ? portfolio : portfolio.filter((p) => p.cat === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="portfolio" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-40">
      <div className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <Reveal><p className="eyebrow">Portfólio</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] md:text-6xl">
              Trabalhos.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all ${
                  filter === c
                    ? "border-ink bg-ink text-cream"
                    : "border-line text-muted-ink hover:border-ink hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <button
              onClick={() => setLightbox(p.src)}
              className={`group relative block w-full overflow-hidden rounded-lg ${p.ratio}`}
            >
              <img
                src={p.src}
                alt={`Portfólio Nicole Martins — ${p.cat}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                {p.cat}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-6 backdrop-blur-sm"
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox}
              alt="Portfólio"
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
            <button
              onClick={() => setLightbox(null)}
              aria-label="Fechar"
              className="absolute top-6 right-6 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white hover:bg-white/10"
            >
              Fechar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- WHY ME ---------------- */
const reasons = [
  { t: "Produtos de qualidade", d: "Marcas profissionais escolhidas para cada pele e para durar o dia todo." },
  { t: "Serviço próximo", d: "Consulta prévia e prova para desenharmos o look juntas." },
  { t: "Deslocação", d: "Vou ao seu hotel, casa ou local do evento em qualquer ponto do Algarve." },
  { t: "Português e inglês", d: "Trabalho com clientes nacionais e internacionais." },
  { t: "Longa duração", d: "Técnica e produtos pensados para aguentar o dia inteiro." },
  { t: "Atenção ao detalhe", d: "Cada pincelada com tempo e cuidado." },
];

function WhyMe() {
  return (
    <section className="border-y border-line bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-20 max-w-3xl">
          <Reveal><p className="eyebrow">Como trabalho</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
              Como <em className="italic text-champagne-deep">trabalho</em>.
            </h2>
          </Reveal>
        </div>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.06}>
              <div className="border-t border-line pt-8">
                <p className="font-serif text-sm italic text-champagne-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl">{r.t}</h3>
                <p className="mt-4 text-muted-ink leading-relaxed">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
const steps = [
  { n: "01", t: "Contacto", d: "Fala comigo pelo WhatsApp. Vemos disponibilidade e detalhes." },
  { n: "02", t: "Consulta", d: "Conversamos sobre o seu estilo, evento e preferências." },
  { n: "03", t: "Prova", d: "Fazemos uma prova para acertar o look final." },
  { n: "04", t: "No dia", d: "Chego a horas, com calma, no seu espaço." },
  { n: "05", t: "Resultado", d: "Uma maquilhagem bonita, sua, feita para durar." },
];

function Process() {
  return (
    <section id="processo" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-40">
      <div className="mb-20 max-w-2xl">
        <Reveal><p className="eyebrow">Processo</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
            Como <em className="italic text-champagne-deep">funciona</em>.
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-line md:block" />
        <ol className="grid gap-12 md:grid-cols-5 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <li className="relative">
                <div className="relative mb-8 grid h-16 w-16 place-items-center rounded-full border border-line bg-cream">
                  <span className="font-serif text-lg italic text-champagne-deep">{s.n}</span>
                </div>
                <h3 className="font-serif text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-ink">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    q: "A minha maquilhagem durou do início ao fim do dia. Senti-me eu, com mais luz.",
    a: "Beatriz M.",
    r: "Noiva, Vilamoura",
  },
  {
    q: "Profissional, calma e atenta. Viemos de Londres e o resultado foi melhor do que esperávamos.",
    a: "Charlotte R.",
    r: "Casamento, Lagos",
  },
  {
    q: "Já trabalhei com várias maquilhadoras. A Nicole sabe onde parar.",
    a: "Inês F.",
    r: "Editora de moda",
  },
  {
    q: "Contratei-a para uma gala e recebi elogios a noite toda.",
    a: "Sofia A.",
    r: "Evento, Faro",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section id="testemunhos" className="bg-beige/50 py-24 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal><p className="eyebrow text-center">Testemunhos</p></Reveal>
        <Reveal delay={0.1}>
          <div className="mt-4 flex justify-center gap-1 text-champagne">
            {"★★★★★".split("").map((s, k) => (
              <span key={k} className="text-lg">{s}</span>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-14 min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-serif text-2xl leading-[1.35] italic text-ink md:text-4xl lg:text-[42px]">
                "{t.q}"
              </p>
              <footer className="mt-10">
                <p className="font-serif text-lg">{t.a}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-ink">{t.r}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Ver testemunho ${k + 1}`}
              className={`h-1 rounded-full transition-all ${k === i ? "w-10 bg-ink" : "w-4 bg-line"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  { q: "Como marco?", a: "Envie mensagem no WhatsApp. Respondo no próprio dia com disponibilidade e valores." },
  { q: "Trabalha em todo o Algarve?", a: "Sim. De Sagres a Vila Real de Santo António, incluindo vilas, hotéis e quintas." },
  { q: "Faz casamentos internacionais?", a: "Sim. Trabalho com clientes de Portugal, Reino Unido, Alemanha, França e Estados Unidos." },
  { q: "É preciso fazer prova de maquilhagem?", a: "Para noivas, recomendo. Para outros eventos, é opcional." },
  { q: "Com quanto tempo devo marcar?", a: "De maio a setembro, o ideal é marcar com 6 a 12 meses de antecedência." },
  { q: "Que produtos usa?", a: "Marcas profissionais como Dior, Chanel, Charlotte Tilbury, Hourglass e Pat McGrath, escolhidas para cada pele." },
];

function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-40">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal><p className="eyebrow">FAQ</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl">
              Perguntas <em className="italic text-champagne-deep">frequentes</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-ink">
              Não encontrou a sua resposta?{" "}
              <a href={WHATSAPP} target="_blank" rel="noopener" className="link-underline text-ink">
                Envie mensagem
              </a>
              .
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-line">
                  <AccordionTrigger className="py-6 text-left font-serif text-xl hover:no-underline md:text-2xl">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 text-base leading-relaxed text-muted-ink">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={laughing1.url}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/45 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-6 py-32 md:px-10 md:py-48">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>Reservas Abertas</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-5xl leading-[1.03] text-white md:text-7xl lg:text-[88px]">
              Vamos criar algo <em className="italic text-champagne">seu</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/85">
              Datas limitadas por mês. Envie mensagem e desenhamos juntas a experiência
              perfeita para o seu momento.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary bg-white text-ink border-white hover:bg-champagne-deep hover:border-champagne-deep hover:text-white">
                Reservar no WhatsApp
              </a>
              <a href="mailto:hello@nicolemartins.pt" className="btn-ghost text-white border-white/70 hover:bg-white hover:text-ink">
                Enviar Email
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">
              Nicole <span className="italic text-champagne-deep">Martins</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-ink">
              Maquilhagem profissional de luxo — Algarve, Portugal.
            </p>
          </div>
          <div>
            <p className="eyebrow">Contacto</p>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              <li><a href={WHATSAPP} target="_blank" rel="noopener" className="link-underline">WhatsApp</a></li>
              <li><a href="mailto:hello@nicolemartins.pt" className="link-underline">hello@nicolemartins.pt</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener" className="link-underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Localização</p>
            <p className="mt-6 text-sm text-ink">Algarve, Portugal</p>
            <p className="mt-2 text-sm text-muted-ink">Deslocação a toda a região.</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-muted-ink md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nicole Martins. Todos os direitos reservados.</p>
          <p className="italic font-serif">Crafted with care in Algarve.</p>
        </div>
      </div>
    </footer>
  );
}
