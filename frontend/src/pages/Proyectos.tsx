import { CardProyecto } from '../components/CardProyecto'
import { projects } from '../data/projects'

export function Proyectos() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Proyectos</h1>
      <div className="grid mt-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => <CardProyecto key={p.title} {...p} />)}
      </div>
    </section>
  )
}
