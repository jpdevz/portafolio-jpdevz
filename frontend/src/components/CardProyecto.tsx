// src/components/CardProyecto.tsx
type Props = {
  title: string
  description: string
  tags?: string[]
  repoUrl?: string
  demoUrl?: string
}

export function CardProyecto({ title, description, tags = [], repoUrl, demoUrl }: Props) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.length > 0 && (
        <ul className="tags">
          {tags.map(t => <li key={t}>{t}</li>)}
        </ul>
      )}
      <div className="actions">
        {repoUrl && <a href={repoUrl} target="_blank">Repo</a>}
        {demoUrl && <a href={demoUrl} target="_blank">Demo</a>}
      </div>
    </article>
  )
}
