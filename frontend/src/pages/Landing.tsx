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
              Full Stack Developer & AI-Augmented Builder
            </h1>
            <div className="hero-subtitle">🚀 Cofundador & Arquitecto de Soluciones</div>
            <p className="hero-description text-[1.1rem] text-[var(--text-dim)] mb-10">
              Combino la visión de negocio con la robustez del desarrollo Backend y la potencia de la IA para crear
              productos digitales que no solo funcionan, sino que escalan y resuelven problemas reales.
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
                <span className="code-line"><span className="keyword">class</span> <span className="function">BackendDeveloper</span>:</span>
                <span className="code-line">  <span className="keyword">def</span> <span className="function">__init__</span>(<span className="keyword">self</span>):</span>
                <span className="code-line">    <span className="keyword">self</span>.skills = [<span className="string">"Python"</span>, <span className="string">"Django"</span>, <span className="string">"AWS"</span>]</span>
                <span className="code-line">    <span className="keyword">self</span>.passion = <span className="string">"Scalable Solutions"</span></span>
                <span className="code-line">  <span className="comment"># Transformando ideas en código 🧠</span></span>
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
              <p>Como <span className="highlight">Full Stack Developer & AI-Augmented Builder</span>, me especializo en transformar visiones de negocio en arquitecturas robustas, escalables y eficientes.</p>
              <br />
              <p>Cofundador de ventures tecnológicas, actualmente me estoy <span className="highlight">certificando en AWS</span> e integro principios de <span className="highlight">neurociencia aplicada</span> para optimizar la productividad digital y la experiencia de usuario.</p>
              <br />
              <p>🌱 <span className="highlight">Enfoque actual:</span> Desarrollo de agentes de IA autónomos, optimización de infraestructuras cloud y arquitectura de software orientada a resultados.</p>
            </div>

            <div className="skills-section fade-in">
              <div className="skills-category">
                <h3>✔ Backend & Database</h3>
                <div className="skills-list flex flex-wrap gap-2">
                  <span className="skill-tag">Python</span><span className="skill-tag">Django</span>
                  <span className="skill-tag">PostgreSQL</span><span className="skill-tag">REST APIs</span>
                </div>
              </div>
              <div className="skills-category">
                <h3>🤖 AI & Automation</h3>
                <div className="skills-list flex flex-wrap gap-2">
                  <span className="skill-tag">Prompt Engineering</span><span className="skill-tag">AI Agents</span>
                  <span className="skill-tag">LLM APIs</span><span className="skill-tag">Cursor IDE</span>
                </div>
              </div>
              <div className="skills-category">
                <h3>☁️ Cloud & Ops</h3>
                <div className="skills-list flex flex-wrap gap-2">
                  <span className="skill-tag">AWS (in progress)</span><span className="skill-tag">Docker</span>
                  <span className="skill-tag">Linux</span><span className="skill-tag">CI/CD</span>
                </div>
              </div>
              <div className="skills-category">
                <h3>💼 Management & Vision</h3>
                <div className="skills-list flex flex-wrap gap-2">
                  <span className="skill-tag">LMS Platforms</span><span className="skill-tag">Process Optimization</span>
                  <span className="skill-tag">Product Vision</span>
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
          <div className="projects-grid grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
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
              ¿Tienes un proyecto de backend o necesitas arquitectura cloud? Hablemos…
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
          </div>
        </div>
      </section>
    </>
  )
}
