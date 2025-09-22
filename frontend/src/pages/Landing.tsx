export function Landing() {
  return (
    <section className="grid gap-8 md:grid-cols-[1.2fr_.8fr] items-center">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Juan Pérez — Full-Stack (Python/Django + React)
        </h1>

        <p className="text-neutral-700 text-lg">
          🚀 Profesional de Tecnología | Backend Developer (Python) | Cloud Architecture (AWS en formación)
        </p>

        <ul className="text-neutral-700 space-y-1">
          <li>✔ Gestión de plataformas digitales (LMS, optimización de procesos)</li>
          <li>✔ Desarrollo Backend con Python (Django, PostgreSQL)</li>
          <li>✔ Arquitectura Cloud (certificación AWS en progreso)</li>
        </ul>

        <p className="text-neutral-700">
          Integro conocimientos de <strong>neurociencia aplicada</strong> para desarrollar tecnología que potencie la productividad y el bienestar digital.
          En constante capacitación para liderar la transformación tecnológica con foco en cloud computing.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a href="/proyectos" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-4 py-2 font-medium hover:bg-neutral-800">
            Ver proyectos
          </a>
          <a href="/contacto" className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 font-medium hover:bg-neutral-100">
            Contactar
          </a>
          <a href="https://www.linkedin.com/in/jpdevz" target="_blank" className="inline-flex items-center justify-center rounded-md border border-blue-600 text-blue-700 px-4 py-2 font-medium hover:bg-blue-50">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        {/* Placeholder visual*/}
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100 border border-neutral-300" />
      </div>
    </section>
  )
}
