import { useEffect } from "react"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { CardProyecto } from "../components/CardProyecto"
import { projects, otherWork } from "../data/projects"
import { trayectoria, formacion } from "../data/trayectoria"

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
      <AnimatedBackground />

      {/* Hero */}
      <section id="home" className="hero py-8 md:py-12">
        <div className="container grid md:grid-cols-2 gap-10 items-center justify-items-center min-h-[50vh] lg:min-h-[70vh]">
          <div className="hero-content">
            <h1 className="text-[2.75rem] md:text-[4rem] font-bold leading-tight mb-5"
              style={{background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
              Transformo procesos complejos en soluciones digitales simples.
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl font-medium text-white mb-4">
              Cada proceso puede mejorar. Solo necesita el sistema correcto.
            </p>
            <p className="hero-description text-[1.1rem] text-[var(--text-dim)] mb-10">
              Ayudo a empresas a reducir trabajo manual, conectar sus procesos y construir herramientas digitales adaptadas a la forma en que realmente trabajan. Aplicaciones web, dashboards, automatizaciones e inteligencia artificial cuando aportan valor.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#projects" className="cta-primary px-5 py-3 rounded-md font-semibold"
                 style={{background:'var(--gradient)', color:'var(--dark)'}}>Ver casos reales</a>
              <a href="#contact" className="cta-secondary px-5 py-3 rounded-md font-semibold border-2"
                 style={{borderColor:'var(--primary)'}}>Hablemos</a>
            </div>
            <p className="mt-6 text-sm text-[var(--text-dim)]">
              ¿Buscas mi perfil profesional?{' '}
              <a href="#trayectoria" className="text-[var(--primary)] hover:underline">Trayectoria</a>
              {' · '}
              <a href="https://linkedin.com/in/jpdevz" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">LinkedIn</a>
            </p>
          </div>

          <div className="hero-visual w-full max-w-[440px]">
            <div className="code-window">
              <div className="window-controls">
                <div className="control red"></div>
                <div className="control yellow"></div>
                <div className="control green"></div>
              </div>
              <div className="code-content text-[.82rem]">
                <span className="code-line"><span className="comment">// del problema al sistema</span></span>
                <span className="code-line"><span className="keyword">boletas en papel</span> → <span className="string">bot + IA + dashboard</span></span>
                <span className="code-line"><span className="keyword">asistencia manual</span> → <span className="string">registro verificable</span></span>
                <span className="code-line"><span className="keyword">reportes a mano</span> → <span className="string">integración automática</span></span>
                <span className="code-line"><span className="function">resultado</span>: menos trabajo manual,</span>
                <span className="code-line">&nbsp;&nbsp;mejor visibilidad.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title fade-in">Casos reales</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map(project => (
              <div key={project.title} className="fade-in">
                <CardProyecto {...project} />
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 max-w-[820px] mx-auto fade-in">
            {otherWork.map(w => (
              <a key={w.name} href={w.url} target="_blank" rel="noopener noreferrer"
                 className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[var(--primary)]/50 transition">
                <p className="font-semibold text-white text-sm">{w.name} <span className="text-[var(--primary)]">↗</span></p>
                <p className="text-xs text-[var(--text-dim)] mt-1">{w.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajo */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Cómo trabajo</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="about-text fade-in text-[1.1rem] text-[var(--text-dim)] leading-8">
              <p>Primero entiendo cómo funciona un negocio: dónde hay tareas repetitivas, información dispersa o procesos que consumen tiempo. Después diseño la solución adecuada, que a veces es una aplicación web y otras una automatización, una integración o IA.</p>
              <p className="mt-4">Vengo de operaciones, gestión y educación, además del desarrollo de software. Eso me permite traducir necesidades del negocio en herramientas que la gente realmente usa.</p>
            </div>

            <div className="skills-section fade-in">
              <h3 className="font-semibold text-white">Lo que construyo</h3>
              <ul className="text-[1.05rem] text-[var(--text-dim)] space-y-2 mt-3">
                <li>✔ Aplicaciones web a medida y plataformas internas</li>
                <li>✔ Automatización de procesos e integraciones por API</li>
                <li>✔ Dashboards y analítica</li>
                <li>✔ Soluciones con IA</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs font-semibold text-white/60 mb-3 uppercase tracking-wider">Herramientas frecuentes</p>
                <p className="text-xs text-[var(--text-dim)] opacity-80">Python · React · Next.js · TypeScript · Supabase · PostgreSQL · Google Apps Script · APIs · Vercel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section id="trayectoria" className="section projects">
        <div className="container">
          <h2 className="section-title fade-in">Trayectoria</h2>
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 max-w-[1000px] mx-auto">
            <ol className="fade-in border-l border-white/10 space-y-8 ml-2">
              {trayectoria.map(e => (
                <li key={`${e.period}-${e.place}`} className="pl-6 relative">
                  <span aria-hidden className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full" style={{background:'var(--primary)'}} />
                  <p className="text-xs font-mono text-[var(--primary)]">{e.period}</p>
                  <p className="font-semibold text-white">{e.role}</p>
                  <p className="text-sm text-neutral-400">{e.place}</p>
                  <p className="text-sm text-[var(--text-dim)] mt-1">{e.summary}</p>
                </li>
              ))}
            </ol>
            <aside className="fade-in">
              <h3 className="font-semibold text-white mb-3">Formación</h3>
              <ul className="space-y-2 text-sm text-[var(--text-dim)]">
                {formacion.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="https://linkedin.com/in/jpdevz" target="_blank" rel="noopener noreferrer"
                 className="inline-block mt-6 px-5 py-3 rounded-md font-semibold text-sm"
                 style={{background:'var(--gradient)', color:'var(--dark)'}}>Ver perfil en LinkedIn</a>
            </aside>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title fade-in">¿Hablamos de tu proyecto?</h2>
          <div className="max-w-[800px] mx-auto text-center">
            <p className="contact-description fade-in text-[1.2rem] text-[var(--text-dim)] mb-12">
              No necesitas saber qué tecnología utilizar.<br />
              Solo cuéntame qué problema quieres resolver.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
              <a className="contact-item fade-in" href="mailto:jpizarro@jpdevz.com">
                <div className="font-semibold mb-1 text-[var(--primary)]">Correo</div>
                <div className="text-[var(--text-dim)] text-sm">La mejor opción para consultas o nuevos proyectos.</div>
              </a>
              <a className="contact-item fade-in" href="https://linkedin.com/in/jpdevz" target="_blank" rel="noopener noreferrer">
                <div className="font-semibold mb-1 text-[var(--primary)]">LinkedIn</div>
                <div className="text-[var(--text-dim)] text-sm">Mi experiencia profesional y oportunidades laborales.</div>
              </a>
              <a className="contact-item fade-in" href="https://github.com/jpdevz" target="_blank" rel="noopener noreferrer">
                <div className="font-semibold mb-1 text-[var(--primary)]">GitHub</div>
                <div className="text-[var(--text-dim)] text-sm">Código y proyectos públicos.</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
