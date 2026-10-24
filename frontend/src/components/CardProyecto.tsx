import type { Project } from '../data/projects'

export function CardProyecto({ title, subtitle, problem, solution, results, flow, tags, demoUrl, demoLabel }: Project) {
  return (
    <article className="case">
      <ol className="case-flow" aria-label="Flujo de la solución">
        {flow.map((step, i) => (
          <li key={step}>
            <span aria-hidden className="case-step">{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="case-body">
        <h3 className="text-xl font-semibold leading-tight tracking-tight">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-accent">{subtitle}</p>}

        <div className="mt-4 flex-grow space-y-3 text-[.92rem] leading-relaxed text-dim">
          <p><span className="case-label">Problema. </span>{problem}</p>
          <p><span className="case-label">Solución. </span>{solution}</p>
          <div>
            <p className="case-label">Resultado</p>
            <ul className="mt-1 space-y-1">
              {results.map(r => (
                <li key={r} className="flex gap-2"><span aria-hidden className="text-accent">✓</span>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {tags.map(t => (
            <li key={t} className="case-tag">{t}</li>
          ))}
        </ul>

        <div className="mt-4">
          {demoUrl ? (
            <a className="case-link" href={demoUrl} target="_blank" rel="noopener noreferrer">
              {demoLabel ?? 'Ver proyecto'} ↗
            </a>
          ) : (
            <span className="text-xs text-dim">Código privado · escríbeme y te explico el detalle</span>
          )}
        </div>
      </div>
    </article>
  )
}
