import { FormEvent, useState } from 'react'

export function Contacto() {
  const [status, setStatus] = useState<'idle'|'enviando'|'ok'>('idle')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('enviando')
    const data = Object.fromEntries(new FormData(e.currentTarget) as any)
    console.log('Formulario contacto:', data)
    setTimeout(() => setStatus('ok'), 400)
  }

  return (
    <section className="max-w-xl">
      <h1 className="text-2xl font-bold">Contacto</h1>
      <form onSubmit={onSubmit} className="grid gap-4 mt-4">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Nombre</span>
          <input name="nombre" required className="rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"/>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Email</span>
          <input type="email" name="email" required className="rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"/>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Mensaje</span>
          <textarea name="mensaje" rows={4} required className="rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-400"/>
        </label>
        <button disabled={status==='enviando'} className="rounded-md bg-neutral-900 text-white px-4 py-2 font-medium hover:bg-neutral-800 disabled:opacity-60">
          Enviar
        </button>
        {status==='ok' && <p className="text-green-700">¡Gracias! Te responderé pronto.</p>}
      </form>
    </section>
  )
}
