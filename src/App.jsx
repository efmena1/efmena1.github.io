import React, { useState, useEffect, useRef, useCallback } from "react";
import { CONTENT } from "./content";

/* ───────────────── icons ───────────────── */

const ArrowUpRight = ({ className = "arrow" }) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3.5 10.5L10.5 3.5" />
    <path d="M4.5 3.5H10.5V9.5" />
  </svg>
);

const ArrowRight = ({ className = "arrow" }) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 7H11" />
    <path d="M7.5 3.5L11 7L7.5 10.5" />
  </svg>
);

const CloseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M2.5 2.5L9.5 9.5" />
    <path d="M9.5 2.5L2.5 9.5" />
  </svg>
);

/* ───────────────── components ───────────────── */

function TopBar({ t, lang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="container topbar-inner">
        <a href="#top" className="brand" aria-label={t.meta.brand}>
          <span className="mark" aria-hidden="true">EM</span>
          <span>Edison Mena</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {t.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>

        <div className="topbar-right">
          <span className="availability" title={t.meta.availability}>
            <span>{t.meta.availability}</span>
          </span>
          <div className="lang-toggle" role="tablist" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => onLangChange("en")}
              aria-pressed={lang === "en"}
            >EN</button>
            <button
              type="button"
              className={lang === "es" ? "active" : ""}
              onClick={() => onLangChange("es")}
              aria-pressed={lang === "es"}
            >ES</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }) {
  const h = t.hero;
  return (
    <section className="section hero" id="top" data-screen-label="Hero">
      <div className="container">
        <div className="hero-eyebrow reveal">{h.eyebrow}</div>

        <h1 className="reveal reveal-delay-1">
          {h.headline.map((part, i) =>
            part.style === "italic" ? (
              <span key={i} className="italic">{part.text}</span>
            ) : (
              <React.Fragment key={i}>{part.text}</React.Fragment>
            )
          )}
        </h1>

        <div className="hero-row reveal reveal-delay-2">
          <p className="hero-sub">{h.sub}</p>
          <dl className="hero-meta">
            <div>
              <dt>{t.locale === "EN" ? "Role" : "Rol"}</dt>
              <dd><span className="role">{t.meta.role}</span></dd>
            </div>
          </dl>
        </div>

        <div className="hero-actions reveal reveal-delay-3">
          <a className="btn btn-primary" href={h.resumeHref} target="_blank" rel="noreferrer">
            {h.ctaPrimary}
            <ArrowUpRight />
          </a>
          <a className="btn btn-secondary" href="#work">
            {h.ctaSecondary}
            <ArrowRight />
          </a>
          <a className="btn btn-ghost" href="#contact">
            {h.ctaGhost}
          </a>
        </div>
      </div>
    </section>
  );
}

function Metrics({ t }) {
  return (
    <div className="container">
      <div className="metrics reveal">
        <div className="metrics-grid">
          {t.metrics.map((m, i) => (
            <div className="metric" key={i}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About({ t }) {
  const a = t.about;
  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="container">
        <p className="kicker reveal">{a.kicker}</p>
        <div className="about-grid">
          <div className="reveal reveal-delay-1">
            <h2 className="section-title">{a.title}</h2>
          </div>
          <div className="about-text reveal reveal-delay-2">
            <p className="about-lead">{a.lead}</p>
            {a.paragraphs.map((p, i) => <p key={i}>{p}</p>)}

            <dl className="about-facts">
              {a.facts.map((f, i) => (
                <div className="about-fact" key={i}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work({ t, onOpen }) {
  const w = t.work;
  return (
    <section className="section" id="work" data-screen-label="Work">
      <div className="container">
        <p className="kicker reveal">{w.kicker}</p>
        <div className="section-header">
          <h2 className="section-title reveal reveal-delay-1">{w.title}</h2>
        </div>

        <div className="work-list">
          {w.projects.map((p, i) => (
            <button
              type="button"
              className={`work-item reveal reveal-delay-${Math.min(i + 1, 4)}`}
              key={p.id}
              onClick={() => onOpen(p)}
              aria-label={`${p.title} — ${w.cta}`}
            >
              <div className="work-head">
                <span className="work-year">{p.year}</span>
                <span className="work-fab" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </div>
              <p className="work-eyebrow">{p.eyebrow}</p>
              <h3 className="work-title">{p.title}</h3>
              <p className="work-summary">{p.summary}</p>
              <div className="work-stack">
                {p.stack.map((s, j) => (
                  <span key={j} className="chip">{s}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ t }) {
  const e = t.experience;
  return (
    <section className="section" id="experience" data-screen-label="Experience">
      <div className="container">
        <p className="kicker reveal">{e.kicker}</p>
        <div className="section-header">
          <h2 className="section-title reveal reveal-delay-1">{e.title}</h2>
        </div>

        <div className="timeline">
          {e.roles.map((r, i) => (
            <article className="role-item reveal" key={i}>
              <div className="role-aside">
                <div className="role-period">{r.period}</div>
                <div className="role-location">{r.location}</div>
              </div>
              <div className="role-body">
                <h3>{r.role}</h3>
                <p className="role-company">{r.company}</p>
                <p className="role-description">{r.description}</p>
                <ul className="role-highlights">
                  {r.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills({ t }) {
  const s = t.skills;
  return (
    <section className="section" id="skills" data-screen-label="Skills">
      <div className="container">
        <p className="kicker reveal">{s.kicker}</p>
        <div className="section-header">
          <h2 className="section-title reveal reveal-delay-1">{s.title}</h2>
        </div>

        <div className="skills-grid reveal">
          {s.groups.map((g, i) => (
            <div className="skill-card" key={i}>
              <h3>{g.title}</h3>
              <div className="skill-list">
                {g.items.map((it, j) => (
                  <span key={j} className="chip">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="certs reveal">
          <p className="certs-label">{s.certsLabel}</p>
          <div className="certs-list">
            {s.certs.map((c, i) => (
              <span key={i} className="chip chip-accent">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const c = t.contact;
  return (
    <section className="section contact" id="contact" data-screen-label="Contact">
      <div className="container">
        <p className="kicker reveal">{c.kicker}</p>
        <div className="contact-inner">
          <div className="reveal reveal-delay-1">
            <h2 className="contact-title">{c.title}</h2>
            <p className="contact-lead">{c.lead}</p>
            <a className="contact-cta" href={`mailto:${c.email}`}>
              {c.email}
              <span className="fab-icon" aria-hidden="true"><ArrowUpRight /></span>
            </a>
          </div>

          <div className="contact-links reveal reveal-delay-2">
            {c.links.map((l, i) => (
              <a className="contact-link" key={i} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span className="label">{l.label}</span>
                <span className="value">{l.value}</span>
                <ArrowUpRight className="arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <div className="container">
      <footer className="footer">
        <span>{t.footer.colophon}</span>
        <a href="#top">{t.footer.backToTop} ↑</a>
      </footer>
    </div>
  );
}

/* ───────────────── modal ───────────────── */

function ProjectModal({ project, t, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("modal-open");
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!project) return null;
  const m = t.modal;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby={`modal-title-${project.id}`}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <span className="year">{project.year} · {project.eyebrow}</span>
          <button ref={closeRef} className="modal-close" onClick={onClose}>
            <CloseIcon />
            <span>{m.close}</span>
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-eyebrow">{project.eyebrow}</p>
          <h2 className="modal-title" id={`modal-title-${project.id}`}>{project.title}</h2>
          <p className="modal-summary">{project.summary}</p>

          <dl className="modal-section">
            <dt>{m.context}</dt>
            <dd><p>{project.context}</p></dd>
          </dl>

          <dl className="modal-section">
            <dt>{m.role}</dt>
            <dd><p>{project.role}</p></dd>
          </dl>

          <dl className="modal-section">
            <dt>{m.impact}</dt>
            <dd>
              <ul className="modal-impact">
                {project.impact.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </dd>
          </dl>

          <dl className="modal-section">
            <dt>{m.stack}</dt>
            <dd>
              <div className="work-stack">
                {project.stack.map((s, i) => (
                  <span key={i} className={`chip${i === 0 ? " chip-accent" : ""}`}>{s}</span>
                ))}
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

/* ───────────────── app shell ───────────────── */

function useReveal(deps) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => { el.classList.remove("is-visible"); io.observe(el); });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("em-lang");
      if (saved === "en" || saved === "es") return saved;
    } catch (e) { /* ignore */ }
    if (typeof navigator !== "undefined" && navigator.language && navigator.language.toLowerCase().startsWith("es")) {
      return "es";
    }
    return "en";
  });

  const [openProject, setOpenProject] = useState(null);
  const t = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("em-lang", lang); } catch (e) { /* ignore */ }
  }, [lang]);

  const handleOpen = useCallback((p) => setOpenProject(p), []);
  const handleClose = useCallback(() => setOpenProject(null), []);

  // Re-attach reveal observer when language changes (DOM nodes swap)
  useReveal([lang]);

  return (
    <>
      <TopBar t={t} lang={lang} onLangChange={setLang} />
      <main>
        <Hero t={t} />
        <Metrics t={t} />
        <About t={t} />
        <Work t={t} onOpen={handleOpen} />
        <Experience t={t} />
        <Skills t={t} />
        <Contact t={t} />
        <Footer t={t} />
      </main>
      {openProject && <ProjectModal project={openProject} t={t} onClose={handleClose} />}
    </>
  );
}
