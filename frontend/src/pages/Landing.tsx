import { useEffect } from "react"
import { CardProyecto } from "../components/CardProyecto"
import { projects, otherWork } from "../data/projects"
import { services } from "../data/services"
import { resumen } from "../data/trayectoria"

const proceso = [
  { title: 'Entiendo cómo funciona el negocio', text: 'Dónde hay tareas repetitivas, información dispersa o procesos que consumen tiempo.' },
  { title: 'Diseño la solución adecuada', text: 'A veces es una aplicación web; otras, una automatización, una integración o IA.' },
  { title: 'Entrego algo que se usa', text: 'Herramientas que la gente realmente adopta, traducidas desde la necesidad del negocio.' },
]

export function Landing(){
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (link) {
        const href = link.getAttribute('href')
        if (href) {
          e.preventDefault()
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) en.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* Hero */}
      <section id="home" className="hero">
        <div className="container grid items-center gap-12 md:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="eyebrow mb-5">Business Automation &amp; Digital Solutions</p>
            <h1 className="display text-[2.3rem] sm:text-[3rem] lg:text-[3.6rem]">
              Transformo procesos complejos en soluciones digitales <em>simples.</em>
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg text-dim">
              Ayudo a empresas a reducir trabajo manual, conectar sus procesos y construir herramientas digitales adaptadas a la forma en que realmente trabajan. Aplicaciones web, dashboards, automatizaciones e inteligencia artificial cuando aportan valor.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">Ver casos reales</a>
              <a href="#contact" className="btn btn-secondary">Hablemos</a>
            </div>
            <p className="mt-6 text-sm text-dim">
              ¿Buscas mi perfil profesional?{' '}
              <a href="#trayectoria" className="font-medium text-accent hover:underline">Trayectoria</a>
              {' · '}
              <a href="https://linkedin.com/in/jpdevz" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">LinkedIn</a>
            </p>
          </div>

          <aside className="hero-panel" aria-label="Ejemplos de transformación de procesos">
            <p className="hero-panel-title">Del problema al sistema</p>
            <div className="transform-row">
              <span className="transform-from">Boletas en papel</span>
              <span className="transform-to">Bot + IA + dashboard</span>
            </div>
            <div className="transform-row">
              <span className="transform-from">Asistencia manual</span>
              <span className="transform-to">Registro verificable</span>
            </div>
            <div className="transform-row">
              <span className="transform-from">Reportes a mano</span>
              <span className="transform-to">Integración automática</span>
            </div>
            <p className="hero-result"><strong>Resultado:</strong> menos trabajo manual, mejor visibilidad.</p>
          </aside>
        </div>
      </section>

      {/* Servicios */}
      <section id="services" className="section section-alt">
        <div className="container">
          <div className="section-head fade-in">
            <p className="eyebrow">Qué hago</p>
            <h2 className="section-title">Tres formas de quitarle trabajo manual a tu operación.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.title} className="service fade-in">
                <span className="service-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href={s.caseAnchor} className="service-link">Ver caso: {s.caseTitle} →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Casos */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-head fade-in">
            <p className="eyebrow">Evidencia</p>
            <h2 className="section-title">Casos reales, del problema al resultado.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map(project => (
              <div key={project.title} className="fade-in">
                <CardProyecto {...project} />
              </div>
            ))}
          </div>
          <div className="fade-in mx-auto mt-10 grid max-w-[820px] gap-4 md:grid-cols-2">
            {otherWork.map(w => (
              <a key={w.name} href={w.url} target="_blank" rel="noopener noreferrer" className="other-work">
                <p className="text-sm font-semibold">{w.name} <span className="text-accent">↗</span></p>
                <p className="mt-1 text-xs text-dim">{w.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section id="about" className="section section-alt">
        <div className="container grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <div className="fade-in">
            <p className="eyebrow">Cómo trabajo</p>
            <h2 className="section-title">Primero el proceso, después la tecnología.</h2>
            <p className="mt-6 text-dim">
              Vengo de operaciones, gestión y educación, además del desarrollo de software. Eso me permite hablar el idioma del negocio y construir herramientas que resuelven el problema de fondo.
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-dim">Herramientas frecuentes</p>
            <p className="mt-2 font-mono text-xs text-dim">Python · React · Next.js · TypeScript · Supabase · PostgreSQL · Google Apps Script · APIs · Vercel</p>
          </div>
          <ol className="fade-in m-0 list-none p-0">
            {proceso.map((p, i) => (
              <li key={p.title} className="step">
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trayectoria (resumen) */}
      <section id="trayectoria" className="section">
        <div className="container">
          <div className="section-head fade-in">
            <p className="eyebrow">Perfil</p>
            <h2 className="section-title">Trayectoria</h2>
            <p className="mt-5 text-dim">Soy Juan Pablo Pizarro Martínez; profesionalmente, JP Pizarro.</p>
          </div>
          <div className="fade-in max-w-[760px]">
            <dl className="m-0 space-y-6">
              {resumen.map(r => (
                <div key={r.label} className="grid gap-1 border-t border-line pt-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <dt className="pt-1 font-mono text-xs uppercase tracking-wider text-accent">{r.label}</dt>
                  <dd className="m-0 text-dim">{r.text}</dd>
                </div>
              ))}
            </dl>
            <a href="https://linkedin.com/in/jpdevz" target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-8">
              Ver trayectoria completa en LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <div className="section-head fade-in">
            <p className="eyebrow">Contacto</p>
            <h2 className="section-title">¿Hablamos de tu proyecto?</h2>
            <p className="mt-5 text-lg text-dim">
              No necesitas saber qué tecnología utilizar. Solo cuéntame qué problema quieres resolver.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            <a className="contact-item fade-in" href="mailto:jpizarro@jpdevz.com">
              <div className="mb-1 font-semibold text-accent">Correo</div>
              <div className="text-sm text-dim">La mejor opción para consultas o nuevos proyectos.</div>
            </a>
            <a className="contact-item fade-in" href="https://linkedin.com/in/jpdevz" target="_blank" rel="noopener noreferrer">
              <div className="mb-1 font-semibold text-accent">LinkedIn</div>
              <div className="text-sm text-dim">Mi experiencia profesional y oportunidades laborales.</div>
            </a>
            <a className="contact-item fade-in" href="https://github.com/jpdevz" target="_blank" rel="noopener noreferrer">
              <div className="mb-1 font-semibold text-accent">GitHub</div>
              <div className="text-sm text-dim">Código y proyectos públicos.</div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
