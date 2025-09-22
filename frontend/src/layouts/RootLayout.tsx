import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export function RootLayout(){
  return (
    <div>
      <Navbar />
      <main className="pt-[88px]">{/* padding-top para despegar del navbar fijo */}
        <Outlet />
      </main>
      <footer className="text-center py-6 text-sm text-neutral-400 border-t border-neutral-800">
        © {new Date().getFullYear()} JPDEVZ
      </footer>
    </div>
  )
}
