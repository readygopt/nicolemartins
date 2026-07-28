import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const WHATSAPP = "https://wa.me/351968776015?text=Ol%C3%A1%20Nicole%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os%20de%20maquilhagem.";
const INSTAGRAM = "https://www.instagram.com/nicoleemartins.algarve/";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const links = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#servicos", label: t.nav.servicos },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#processo", label: t.nav.processo },
    { href: "#testemunhos", label: t.nav.testemunhos },
    { href: "#faq", label: t.nav.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div className={`inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] ${className}`}>
      <button
        onClick={() => setLang("pt")}
        aria-label="Português"
        className={lang === "pt" ? "text-ink" : "text-ink/40 hover:text-ink"}
      >
        PT
      </button>
      <span className="text-ink/30">/</span>
      <button
        onClick={() => setLang("en")}
        aria-label="English"
        className={lang === "en" ? "text-ink" : "text-ink/40 hover:text-ink"}
      >
        EN
      </button>
    </div>
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-cream/80 border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-serif text-xl tracking-tight text-ink">
          Nicole <span className="italic text-champagne-deep">Martins</span>
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[12px] font-medium uppercase tracking-[0.18em] text-ink/80 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <LangToggle />
          <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary">
            {t.nav.marcar}
          </a>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <LangToggle />
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="text-ink"
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-line bg-cream/95 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-[1280px] px-6 py-8 flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-ink"
              >
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary mt-4 self-start">
              {t.nav.menu}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

export { WHATSAPP, INSTAGRAM };
