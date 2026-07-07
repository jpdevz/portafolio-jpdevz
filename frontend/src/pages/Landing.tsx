import { useEffect } from "react"
import { AnimatedBackground } from "../components/AnimatedBackground"
import { CardProyecto } from "../components/CardProyecto"
import { projects } from "../data/projects"

export function Landing(){
  useEffect(() => {
  const handler = (e: Event) => {
    const target = e.target as HTMLElement | null
    const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null
    if (link) {
      const href = link.getAttribute('href')
      if (href) {
        e.preventDefault()
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  document.addEventListener('click', handler)
  return () => document.removeEventListener('click', handler)
}, [])

  useEffect(() => {
    // Intersection Observer para .fade-in
    const opts = { threshold:0.1, rootMargin:'0px 0px -50px 0px' }
    const io = new IntersectionObserver(entries=>{
      entries.forEach(en=>{
        if (en.isIntersecting) en.target.classList.add('visible')
      })
    },opts)
    document.querySelectorAll('.fade-in').forEach(el=>io.observe(el))
    return ()=>io.disconnect()
  },[])

  useEffect(() => {
    // Cursor trail
    const onMove = (e: MouseEvent) => {
      const cursor = document.createElement('div')
      cursor.style.cssText = `
        position:fixed;top:${e.clientY}px;left:${e.clientX}px;width:6px;height:6px;
        background:var(--primary);border-radius:50%;pointer-events:none;z-index:9999;opacity:.7;
        animation: cursorFade .8s ease-out forwards;
      `
      document.body.appendChild(cursor)
      setTimeout(()=>cursor.remove(),800)
    }
    const style = document.createElement('style')
    style.textContent = `@keyframes cursorFade{to{opacity:0;transform:scale(0)}}`
    document.head.appendChild(style)
    document.addEventListener('mousemove', onMove)
    return ()=>{ document.removeEventListener('mousemove', onMove); style.remove() }
  },[])

  useEffect(()=>{
    // Typing en subtítulo
    const el = document.querySelector('.hero-subtitle') as HTMLElement | null
    if(!el) return
    const text = el.textContent || ''
    el.textContent = ''
    let i = 0
    const tick = () => {
      if (i < text.length){ el.textContent += text.charAt(i++); setTimeout(tick, 80) }
    }
    setTimeout(tick, 1000)
  },[])

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
            <div className="hero-subtitle text-xl md:text-2xl font-medium text-white mb-4">
              Cada proceso puede mejorar. Solo necesita el sistema correcto.
            </div>
            <p className="hero-description text-[1.1rem] text-[var(--text-dim)] mb-10">
              Ayudo a empresas a reducir trabajo manual, conectar sus procesos y construir herramientas digitales adaptadas a la forma en que realmente trabajan. Aplicaciones web, dashboards, automatizaciones e inteligencia artificial cuando aportan valor.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#projects" className="cta-primary px-5 py-3 rounded-md font-semibold"
                 style={{background:'var(--gradient)', color:'var(--dark)'}}>Ver casos reales</a>
              <a href="#contact" className="cta-secondary px-5 py-3 rounded-md font-semibold border-2"
                 style={{borderColor:'var(--primary)'}}>Hablemos</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-controls">
                <div className="control red"></div>
                <div className="control yellow"></div>
                <div className="control green"></div>
              </div>
              <div className="code-content">
                <span className="code-line"><span className="keyword">class</span> <span className="function">BusinessProblem</span>:</span>
                <span className="code-line"></span>
                <span className="code-line">  <span className="keyword">def</span> <span className="function">__init__</span>(<span className="keyword">self</span>):</span>
                <span className="code-line">    <span className="keyword">self</span>.process = <span className="string">"Manual"</span></span>
                <span className="code-line">    <span className="keyword">self</span>.solution = <span className="string">"Automated"</span></span>
                <span className="code-line"></span>
                <span className="code-line">  <span className="keyword">def</span> <span className="function">outcome</span>(<span className="keyword">self</span>):</span>
                <span className="code-line">    <span className="keyword">return</span> [</span>
                <span className="code-line">      <span className="string">"Less manual work"</span>,</span>
                <span className="code-line">      <span className="string">"Better visibility"</span>,</span>
                <span className="code-line">      <span className="string">"Scalable operations"</span></span>
                <span className="code-line">    ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section !pt-6 md:!pt-12">
        <div className="container">
          <h2 className="section-title">Cómo trabajo</h2>
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="about-text fade-in text-[1.1rem] text-[var(--text-dim)] leading-8">
              <p>No creo que la tecnología sea el punto de partida para resolver un problema. Primero entiendo cómo funciona un negocio, dónde aparecen las tareas repetitivas, la información dispersa o los procesos que consumen tiempo. Después diseño la solución adecuada.</p>
              <p className="mt-4">Mi trabajo consiste en transformar esos desafíos en aplicaciones web, sistemas internos, automatizaciones e integraciones que simplifican el trabajo diario y permiten que las empresas operen de forma más eficiente.</p>
              <p className="mt-4">Mi experiencia en operaciones, gestión, educación y desarrollo de software me permite conectar dos mundos: comprender las necesidades del negocio y convertirlas en soluciones digitales que realmente se utilizan y generan valor.</p>
              <p className="mt-4">No me defino por una tecnología en particular. Cada proyecto requiere herramientas distintas. A veces será una aplicación web; otras, una automatización, un dashboard, una integración entre plataformas o inteligencia artificial. Lo importante no es la tecnología elegida, sino el impacto que genera.</p>
            </div>

            <div className="skills-section fade-in">
              <div className="skills-category">
                <h3>Lo que construyo</h3>
                <ul className="text-[1.05rem] text-[var(--text-dim)] space-y-2 mt-3">
                  <li>✔ Aplicaciones web a medida</li>
                  <li>✔ Plataformas internas</li>
                  <li>✔ Sistemas de gestión</li>
                  <li>✔ Automatización de procesos</li>
                  <li>✔ Integraciones entre plataformas</li>
                  <li>✔ Dashboards y analítica</li>
                  <li>✔ Soluciones con IA</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs font-semibold text-white/60 mb-3 uppercase tracking-wider">Herramientas frecuentes</p>
                <p className="text-xs text-[var(--text-dim)] opacity-80">Python · React · Supabase · PostgreSQL · Google Apps Script · APIs · Vercel · AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title fade-in">Casos reales</h2>
          <div className="projects-grid flex flex-wrap justify-center gap-10">
            {projects.map((project, index) => (
              <div key={index} className="fade-in w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] max-w-[350px]">
                <CardProyecto {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
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
                <div className="text-[2rem]" style={{color:'var(--primary)'}}>📧</div>
                <div className="font-semibold mb-1">Correo</div>
                <div className="text-[var(--text-dim)] text-sm">La mejor opción para consultas o nuevos proyectos.</div>
              </a>
              <a className="contact-item fade-in" href="https://linkedin.com/in/jpdevz" target="_blank">
                <div className="text-[2rem]" style={{color:'var(--primary)'}}>💼</div>
                <div className="font-semibold mb-1">LinkedIn</div>
                <div className="text-[var(--text-dim)] text-sm">Conoce mi experiencia profesional y conectemos.</div>
              </a>
              <a className="contact-item fade-in" href="https://github.com/jpdevz" target="_blank">
                <div className="text-[2rem]" style={{color:'var(--primary)'}}>💻</div>
                <div className="font-semibold mb-1">GitHub</div>
                <div className="text-[var(--text-dim)] text-sm">Explora algunos de los proyectos y tecnologías con las que trabajo.</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
