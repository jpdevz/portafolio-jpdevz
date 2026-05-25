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
      <section id="home" className="hero">
          <div className="container grid md:grid-cols-2 gap-10 items-center justify-items-center min-h-[calc(100vh-88px)]">
          <div className="hero-content">
            <h1 className="text-[2.75rem] md:text-[4rem] font-bold mb-5"
              style={{background:'var(--gradient)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
              Full Stack Developer & AI Architect
            </h1>
            <div className="hero-subtitle text-xl md:text-2xl font-medium text-white mb-4">
              Especializado en Backend, Automatización y Soluciones de IA
            </div>
            <p className="hero-description text-[1.1rem] text-[var(--text-dim)] mb-10">
              Especializado en desarrollo backend robusto, automatización de procesos críticos y diseño de flujos agénticos con IA. Traduzco lógicas complejas en sistemas escalables y eficientes.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#projects" className="cta-primary px-5 py-3 rounded-md font-semibold"
                 style={{background:'var(--gradient)', color:'var(--dark)'}}>Ver Proyectos</a>
              <a href="#contact" className="cta-secondary px-5 py-3 rounded-md font-semibold border-2"
                 style={{borderColor:'var(--primary)'}}>Contactar</a>
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
                <span className="code-line"><span className="keyword">class</span> <span className="function">BusinessSolutionsArchitect</span>:</span>
                <span className="code-line">  <span className="keyword">def</span> <span className="function">__init__</span>(<span className="keyword">self</span>):</span>
                <span className="code-line">    <span className="keyword">self</span>.skills = [<span className="string">"Python"</span>, <span className="string">"FastAPI"</span>, <span className="string">"Cloud"</span>, <span className="string">"AI-Agents"</span>]</span>
                <span className="code-line">    <span className="keyword">self</span>.passion = <span className="string">"Scalable Systems"</span></span>
                <span className="code-line">  <span className="comment"># Transformando complejidad en eficiencia 🎯</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="about-text fade-in text-[1.1rem] text-[var(--text-dim)] leading-8">
              <p>Soy Desarrollador Full Stack y Arquitecto de Soluciones de IA. Mi trabajo combina la robustez del desarrollo backend en Python con la flexibilidad de la inteligencia artificial, flujos agénticos y arquitectura cloud. En lugar de entornos de prueba, mi experiencia se demuestra en producción a través de productos y emprendimientos tecnológicos propios y corporativos que aceleran el 'time-to-market' sin comprometer la calidad ni la seguridad.</p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold text-white">Certificaciones Clave:</p>
                <ul className="list-disc list-inside text-sm space-y-1 opacity-80">
                  <li>Desarrollo de aplicaciones full stack python trainee V2.0</li>
                  <li>Especialidad en Arquitectura Cloud</li>
                  <li>Inmersión IA + Google Gemini</li>
                </ul>
              </div>
            </div>

            <div className="skills-section fade-in">
              <div className="skills-category">
                <h3>● Backend & IA</h3>
                <div className="skills-list flex flex-wrap gap-2">
                  <span className="skill-tag">Python (Django/FastAPI)</span>
                  <span className="skill-tag">Java (Spring Boot)</span>
                  <span className="skill-tag">LLMs & RAG</span>
                  <span className="skill-tag">Flujos Agénticos</span>
                </div>
              </div>
              <div className="skills-category">
                <h3>● Cloud & Data</h3>
                <div className="skills-list flex flex-wrap gap-2">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">PostgreSQL / MySQL</span>
                  <span className="skill-tag">Arquitectura Cloud</span>
                </div>
              </div>
              <div className="skills-category">
                <h3>● Frontend & Complementos</h3>
                <div className="skills-list flex flex-wrap gap-2">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">Git</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title fade-in">Proyectos Destacados</h2>
          <div className="projects-grid grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <div key={project.title} className="fade-in">
                <CardProyecto {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title fade-in">Conectemos</h2>
          <div className="max-w-[800px] mx-auto text-center">
            <p className="contact-description fade-in text-[1.2rem] text-[var(--text-dim)] mb-12">
              ¿Tienes un proceso operativo que necesite automatización o buscas arquitectura de soluciones eficientes? Hablemos...
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
              <a className="contact-item fade-in" href="mailto:jpizarro@jpdevz.com">
                <div className="text-[2rem]" style={{color:'var(--primary)'}}>📧</div>
                <div className="font-semibold mb-1">Email</div>
                <div className="text-[var(--text-dim)] text-sm">jpizarro@jpdevz.com</div>
              </a>
              <a className="contact-item fade-in" href="https://linkedin.com/in/jpdevz" target="_blank">
                <div className="text-[2rem]" style={{color:'var(--primary)'}}>💼</div>
                <div className="font-semibold mb-1">LinkedIn</div>
                <div className="text-[var(--text-dim)] text-sm">linkedin.com/in/jpdevz</div>
              </a>
              <a className="contact-item fade-in" href="https://github.com/jpdevz" target="_blank">
                <div className="text-[2rem]" style={{color:'var(--primary)'}}>🔧</div>
                <div className="font-semibold mb-1">GitHub</div>
                <div className="text-[var(--text-dim)] text-sm">github.com/jpdevz</div>
              </a>
            </div>
            <div className="flex justify-center fade-in">
              <a href="/CV_JP_Pizarro_md.md" download className="cta-primary px-8 py-3 rounded-md font-semibold"
                 style={{background:'var(--gradient)', color:'var(--dark)'}}>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
