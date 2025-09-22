import { useEffect, useState } from "react"

export function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="w-full max-w-[1200px] mx-auto px-5 flex items-center justify-between">
            <div className="logo">JPDEVZ</div>
                <ul className="nav-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </div>
    </nav>
  )
}
