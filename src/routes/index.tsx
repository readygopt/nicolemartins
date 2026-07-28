import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Nav, WHATSAPP, INSTAGRAM } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { I18nProvider, useI18n } from "@/lib/i18n";
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
  component: HomeWrapper,
});

function HomeWrapper() {
  return (
    <I18nProvider>
      <Home />
    </I18nProvider>
  );
}

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
  const { t } = useI18n();

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg.url}
          alt="Nicole Martins"
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
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-serif text-[44px] leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          {t.hero.titleA}<em className="italic text-champagne">{t.hero.titleEm}</em>{t.hero.titleB}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          {t.hero.sub1}
          <br />
          {t.hero.sub2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary bg-white text-ink border-white hover:bg-champagne-deep hover:text-white hover:border-champagne-deep">
            {t.hero.ctaMarcar}
          </a>
          <a href="#portfolio" className="btn-ghost text-white border-white/80 hover:bg-white hover:text-ink">
            {t.hero.ctaVer}
          </a>
        </motion.div>
      </div>
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
  const { t } = useI18n();
  return (
    <section id="sobre" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-40">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src={portraitImg.url}
              alt="Nicole Martins"
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
            <p className="eyebrow">{t.about.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              {t.about.titleA}<em className="italic text-champagne-deep">{t.about.titleEm}</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-ink md:text-lg">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-line pt-10">
              {t.about.stats.map((s) => (
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
const serviceImages = [laughing2.url, powderBeach.url, eventoImg.url, lipstickImg.url];

function Services() {
  const { t } = useI18n();
  return (
    <section id="servicos" className="bg-beige/50 py-24 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal><p className="eyebrow">{t.services.eyebrow}</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] md:text-6xl">
                {t.services.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted-ink">{t.services.intro}</p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((s, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <article className="group relative overflow-hidden rounded-lg bg-card border border-line transition-shadow duration-700 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={serviceImages[i]}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <span className="absolute top-6 left-6 font-serif text-sm italic text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      {n}
                    </span>
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-3xl md:text-4xl">{s.title}</h3>
                      <span className="font-serif text-sm italic text-champagne-deep">{n}</span>
                    </div>
                    <p className="mt-4 text-muted-ink leading-relaxed">{s.desc}</p>
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs uppercase tracking-[0.14em] text-muted-ink">
                      <span>{s.duration}</span>
                      <span className="text-right normal-case tracking-normal">{s.ideal}</span>
                    </div>
                    <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-ink link-underline">
                      {t.services.marcar} <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
const portfolio = [
  { src: laughing2.url, ratio: "aspect-[3/4]", catIdx: 1 },
  { src: powderBeach.url, ratio: "aspect-[4/5]", catIdx: 2 },
  { src: eventoImg.url, ratio: "aspect-[3/4]", catIdx: 3 },
  { src: brideAdjust.url, ratio: "aspect-[3/4]", catIdx: 1 },
  { src: lipstickImg.url, ratio: "aspect-[4/3]", catIdx: 4 },
  { src: laughing1.url, ratio: "aspect-[16/10]", catIdx: 1 },
  { src: powderBeach.url, ratio: "aspect-[3/4]", catIdx: 2 },
  { src: portraitImg.url, ratio: "aspect-[4/5]", catIdx: 5 },
];

function Portfolio() {
  const { t } = useI18n();
  const [filterIdx, setFilterIdx] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const cats = t.portfolio.cats;
  const filtered = filterIdx === 0 ? portfolio : portfolio.filter((p) => p.catIdx === filterIdx);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="portfolio" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-40">
      <div className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <Reveal><p className="eyebrow">{t.portfolio.eyebrow}</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] md:text-6xl">
              {t.portfolio.title}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-2">
            {cats.map((c, idx) => (
              <button
                key={c}
                onClick={() => setFilterIdx(idx)}
                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all ${
                  filterIdx === idx
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
                alt={cats[p.catIdx]}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                {cats[p.catIdx]}
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
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
            <button
              onClick={() => setLightbox(null)}
              aria-label={t.portfolio.close}
              className="absolute top-6 right-6 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white hover:bg-white/10"
            >
              {t.portfolio.close}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- WHY ME ---------------- */
function WhyMe() {
  const { t } = useI18n();
  return (
    <section className="border-y border-line bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-20 max-w-3xl">
          <Reveal><p className="eyebrow">{t.why.eyebrow}</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
              {t.why.titleA}<em className="italic text-champagne-deep">{t.why.titleEm}</em>.
            </h2>
          </Reveal>
        </div>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((r, i) => (
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
function Process() {
  const { t } = useI18n();
  return (
    <section id="processo" className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-40">
      <div className="mb-20 max-w-2xl">
        <Reveal><p className="eyebrow">{t.process.eyebrow}</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
            {t.process.titleA}<em className="italic text-champagne-deep">{t.process.titleEm}</em>.
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-line md:block" />
        <ol className="grid gap-12 md:grid-cols-5 md:gap-6">
          {t.process.steps.map((s, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={n} delay={i * 0.08}>
                <li className="relative">
                  <div className="relative mb-8 grid h-16 w-16 place-items-center rounded-full border border-line bg-cream">
                    <span className="font-serif text-lg italic text-champagne-deep">{n}</span>
                  </div>
                  <h3 className="font-serif text-2xl">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-ink">{s.d}</p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const { t } = useI18n();
  const items = t.testimonials.items;
  const [i, setI] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setI((v) => (v + 1) % items.length), 7000);
    return () => clearInterval(timer);
  }, [items.length]);
  const cur = items[i % items.length];

  return (
    <section id="testemunhos" className="bg-beige/50 py-24 md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal><p className="eyebrow text-center">{t.testimonials.eyebrow}</p></Reveal>
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
                "{cur.q}"
              </p>
              <footer className="mt-10">
                <p className="font-serif text-lg">{cur.a}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-ink">{cur.r}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`${k + 1}`}
              className={`h-1 rounded-full transition-all ${k === i ? "w-10 bg-ink" : "w-4 bg-line"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const { t } = useI18n();
  return (
    <section id="faq" className="mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-40">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal><p className="eyebrow">{t.faq.eyebrow}</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl">
              {t.faq.titleA}<em className="italic text-champagne-deep">{t.faq.titleEm}</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-ink">
              {t.faq.helper}
              <a href={WHATSAPP} target="_blank" rel="noopener" className="link-underline text-ink">
                {t.faq.helperLink}
              </a>
              .
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {t.faq.items.map((f, i) => (
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
  const { t } = useI18n();
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
          <Reveal><p className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>{t.cta.eyebrow}</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-5xl leading-[1.03] text-white md:text-7xl lg:text-[88px]">
              {t.cta.titleA}<em className="italic text-champagne">{t.cta.titleEm}</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/85">
              {t.cta.note}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary bg-white text-ink border-white hover:bg-champagne-deep hover:border-champagne-deep hover:text-white">
                {t.cta.marcar}
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="btn-ghost text-white border-white/70 hover:bg-white hover:text-ink">
                {t.cta.instagram}
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
  const { t } = useI18n();
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">
              Nicole <span className="italic text-champagne-deep">Martins</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-ink">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <p className="eyebrow">{t.footer.contact}</p>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              <li><a href={WHATSAPP} target="_blank" rel="noopener" className="link-underline">WhatsApp</a></li>
              <li><a href="tel:+351968776015" className="link-underline">+351 968 776 015</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener" className="link-underline">@nicoleemartins.algarve</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">{t.footer.location}</p>
            <p className="mt-6 text-sm text-ink">{t.footer.region}</p>
            <p className="mt-2 text-sm text-muted-ink">{t.footer.travel}</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-muted-ink md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nicole Martins. {t.footer.rights}</p>
          <p className="italic font-serif">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
