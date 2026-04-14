type Props = {
  title: string
  description: string
  tags?: string[]
  repoUrl?: string
  demoUrl?: string
}

export function CardProyecto({ title, description, tags = [], repoUrl, demoUrl }: Props) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition cursor-default">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-neutral-400 mt-1">{description}</p>
      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-3">
          {tags.map(t => (
            <li key={t} className="text-xs rounded-full px-2.5 py-1 bg-white/10 border border-white/10 text-neutral-300">{t}</li>
          ))}
        </ul>
      )}
      <div className="flex gap-3 mt-4">
        {repoUrl && <a className="text-sm font-medium text-[var(--primary)] hover:underline" href={repoUrl} target="_blank">Repo</a>}
        {demoUrl && <a className="text-sm font-medium text-[var(--primary)] hover:underline" href={demoUrl} target="_blank">Visitar sitio</a>}
      </div>
    </article>
  )
}
