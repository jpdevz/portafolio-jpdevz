type Props = {
  title: string
  description: string
  tags?: string[]
  repoUrl?: string
  demoUrl?: string
  isPublished?: boolean
}

export function CardProyecto({ title, description, tags = [], repoUrl, demoUrl, isPublished }: Props) {
  return (
    <article className="h-full flex flex-col rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3 hover:bg-white/10 transition cursor-default">
      <h3 className="text-base font-semibold text-white leading-tight">{title}</h3>
      <p className="text-neutral-400 mt-1 text-sm leading-relaxed line-clamp-4 flex-grow">{description}</p>
      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-1.5 mt-2">
          {tags.slice(0, 3).map(t => (
            <li key={t} className="text-[10px] rounded-full px-2 py-0.5 bg-white/10 border border-white/10 text-neutral-300">{t}</li>
          ))}
        </ul>
      )}
      <div className="flex gap-3 mt-4">
        {repoUrl ? (
          <a className="text-xs font-semibold px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition" href={repoUrl} target="_blank">
            Código en GitHub
          </a>
        ) : (
          <span className="text-xs font-semibold px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-neutral-500 cursor-not-allowed">
            Privado / No disponible
          </span>
        )}
        {demoUrl ? (
          <a className="text-xs font-semibold px-3 py-1.5 rounded-md bg-white/5 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-dark transition" href={demoUrl} target="_blank">
            {isPublished ? 'Visitar Sitio' : 'Demo / Caso de Estudio'}
          </a>
        ) : (
          <span className="text-xs font-semibold px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-neutral-500 cursor-not-allowed">
            No disponible
          </span>
        )}
      </div>
    </article>
  )
}
