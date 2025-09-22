type Props = {
  title: string
  description: string
  tags?: string[]
  repoUrl?: string
  demoUrl?: string
}

export function CardProyecto({ title, description, tags = [], repoUrl, demoUrl }: Props) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-neutral-700 mt-1">{description}</p>
      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-3">
          {tags.map(t => (
            <li key={t} className="text-xs rounded-full px-2.5 py-1 bg-neutral-100 border border-neutral-200">{t}</li>
          ))}
        </ul>
      )}
      <div className="flex gap-3 mt-4">
        {repoUrl && <a className="text-sm font-medium text-blue-700 hover:underline" href={repoUrl} target="_blank">Repo</a>}
        {demoUrl && <a className="text-sm font-medium text-blue-700 hover:underline" href={demoUrl} target="_blank">Demo</a>}
      </div>
    </article>
  )
}
