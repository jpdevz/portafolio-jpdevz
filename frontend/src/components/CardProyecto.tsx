import type { Project } from '../data/projects'

export function CardProyecto({ title, subtitle, problem, solution, results, flow, tags, demoUrl, demoLabel }: Project) {
  return (
    <article className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition hover:border-[var(--primary)]/50 hover:-translate-y-1">
      <div
        className="p-5 border-b border-white/10"
        style={{ background: 'linear-gradient(135deg, rgba(124,58,237,.18), rgba(0,245,255,.08))' }}
      >
        <ol className="flex flex-col gap-2 text-xs font-mono" aria-label="Flujo de la solución">
          {flow.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span
                aria-hidden
                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ background: 'var(--gradient)', color: 'var(--dark)' }}
              >
                {i + 1}
              </span>
              <span className="text-neutral-200">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white leading-tight">{title}</h3>
        {subtitle && <p className="text-xs text-[var(--primary)] mt-1">{subtitle}</p>}

        <div className="mt-4 text-sm leading-relaxed flex-grow space-y-3">
          <p className="text-neutral-300"><span className="font-semibold text-white">Problema. </span>{problem}</p>
          <p className="text-neutral-300"><span className="font-semibold text-white">Solución. </span>{solution}</p>
          <div>
            <p className="font-semibold text-white">Resultado</p>
            <ul className="mt-1 space-y-1">
              {results.map(r => (
                <li key={r} className="text-neutral-300 flex gap-2"><span aria-hidden className="text-[var(--accent)]">✔</span>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="flex flex-wrap gap-1.5 mt-5">
          {tags.map(t => (
            <li key={t} className="text-[11px] rounded-full px-2.5 py-0.5 bg-white/10 border border-white/10 text-neutral-300 font-mono">{t}</li>
          ))}
        </ul>

        <div className="mt-4">
          {demoUrl ? (
            <a
              className="inline-block text-xs font-semibold px-3 py-1.5 rounded-md border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--dark)] transition"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {demoLabel ?? 'Ver proyecto'} ↗
            </a>
          ) : (
            <span className="text-xs text-neutral-500">Código privado · escríbeme y te explico el detalle</span>
          )}
        </div>
      </div>
    </article>
  )
}
