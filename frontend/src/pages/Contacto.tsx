// src/pages/Contacto.tsx
import { FormEvent, useState } from 'react'

export function Contacto() {
  const [status, setStatus] = useState<'idle'|'enviando'|'ok'>('idle')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('enviando')
    // 80/20: de momento solo log; en Semana 2/3 conectamos backend o servicio
    const data = Object.fromEntries(new FormData(e.currentTarget) as any)
    console.log('Formulario contacto:', data)
    setTimeout(() => setStatus('ok'), 300)
  }

  return (
    <section>
      <h1>Contacto</h1>
      <form onSubmit={onSubmit} className="form">
        <label>Nombre<input name="nombre" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Mensaje<textarea name="mensaje" required rows={4} /></label>
        <button disabled={status==='enviando'}>Enviar</button>
        {status==='ok' && <p>¡Gracias! Te responderé pronto.</p>}
      </form>
    </section>
  )
}
