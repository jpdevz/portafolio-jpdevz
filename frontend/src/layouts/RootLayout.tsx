// src/layouts/RootLayout.tsx
import { Link, Outlet, NavLink } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/" className="brand">JPDevz</Link>
        <div className="links">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </div>
      </nav>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} JPDevz — Hecho con React + Vite
      </footer>
    </div>
  )
}
