// src/pages/Proyectos.tsx
import { CardProyecto } from '../components/CardProyecto'
import { projects } from '../data/projects'

export function Proyectos() {
  return (
    <section>
      <h1>Proyectos</h1>
      <div className="grid">
        {projects.map(p => <CardProyecto key={p.title} {...p} />)}
      </div>
    </section>
  )
}
