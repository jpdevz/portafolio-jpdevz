import { useEffect, useState } from "react"

export function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex items-center justify-between">
            <a href="#home" className="brand" aria-label="JP Pizarro, inicio">
                <span className="brand-mark" aria-hidden>JP</span>
                <span>JP Pizarro</span>
            </a>
            <ul className="nav-links">
                <li><a href="#services">Servicios</a></li>
                <li><a href="#projects">Casos reales</a></li>
                <li><a href="#about">Cómo trabajo</a></li>
                <li><a href="#trayectoria">Trayectoria</a></li>
            </ul>
            <a href="#contact" className="nav-cta">Hablemos</a>
        </div>
    </nav>
  )
}
