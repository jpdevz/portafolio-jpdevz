import { Link, Outlet, NavLink } from 'react-router-dom'

export function RootLayout() {
  const linkBase = "px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-100"
  const linkActive = "bg-neutral-900 text-white hover:bg-neutral-900"

  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] bg-neutral-50 text-neutral-900">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 flex h-14 items-center justify-between">
          <Link to="/" className="font-bold text-lg tracking-tight">JPDevz</Link>
          <div className="flex items-center gap-1">
            <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive? linkActive : ''}`}>Inicio</NavLink>
            <NavLink to="/proyectos" className={({isActive}) => `${linkBase} ${isActive? linkActive : ''}`}>Proyectos</NavLink>
            <NavLink to="/contacto" className={({isActive}) => `${linkBase} ${isActive? linkActive : ''}`}>Contacto</NavLink>
          </div>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-200 text-center py-6 text-sm text-neutral-500">
        © {new Date().getFullYear()} JPDevz — React + Vite + Tailwind
      </footer>
    </div>
  )
}
