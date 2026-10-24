import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export function RootLayout(){
  return (
    <div>
      <Navbar />
      <main className="pt-[72px]">{/* padding-top para despegar del navbar fijo */}
        <Outlet />
      </main>
      <footer className="border-t border-line py-8 text-sm text-dim">
        <div className="container flex flex-col gap-1 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Juan Pablo Pizarro Martínez</span>
          <span>Business Automation &amp; Digital Solutions</span>
        </div>
      </footer>
    </div>
  )
}
