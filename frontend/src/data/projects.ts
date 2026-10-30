export type Project = {
  title: string
  subtitle?: string
  problem: string
  solution: string
  results: string[]
  flow: [string, string, string]
  tags: string[]
  demoUrl?: string
  demoLabel?: string
}

// Casos destacados: los mismos que figuran en el perfil de Upwork.
export const projects: Project[] = [
  {
    title: 'FotoGasto',
    subtitle: 'Registro de gastos con IA',
    problem: 'Registrar boletas después de comprar era tedioso, así que los gastos terminaban sin registrarse o mal categorizados.',
    solution: 'Un bot de Telegram recibe la foto de la boleta, la IA extrae y categoriza los datos, y un dashboard permite consultar y exportar.',
    results: ['Registro en segundos, en el momento de la compra', 'Datos estructurados listos para consultar y exportar', 'Proveedor de IA intercambiable'],
    flow: ['Foto en Telegram', 'IA extrae y categoriza', 'Dashboard y exportación'],
    tags: ['Supabase', 'Next.js', 'IA'],
  },
  {
    title: 'Nova Attendance',
    subtitle: 'Asistencia multiempresa georreferenciada',
    problem: 'Las empresas con varias sedes no podían confiar en la asistencia real de su personal ni aislar los datos de cada cliente.',
    solution: 'Plataforma multi-tenant con validación de ubicación, foto de respaldo y registros inmutables, con aislamiento de datos a nivel de base de datos.',
    results: ['Marcaciones verificables con foto y ubicación', 'Datos de cada empresa aislados entre sí', 'MVP funcional con demo en línea'],
    flow: ['Marcación con foto y ubicación', 'Validación de geocerca', 'Registro inmutable por empresa'],
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    demoUrl: 'https://nova-dialing.vercel.app/',
    demoLabel: 'Ver demo',
  },
  {
    title: 'Asistencia Moodle + Jitsi',
    subtitle: 'Integración para una institución educativa',
    problem: 'La asistencia de las clases en vivo se consolidaba a mano, con tiempo operativo y poca trazabilidad.',
    solution: 'Integración que registra la asistencia de las sesiones de Jitsi dentro de Moodle y la consolida en reportes de Looker Studio.',
    results: ['Menos procesamiento manual', 'Información centralizada y trazable', 'En uso con una institución que apoyo desde 2022'],
    flow: ['Clase en vivo en Jitsi', 'Asistencia registrada en Moodle', 'Reporte en Looker Studio'],
    tags: ['Moodle', 'Apps Script', 'APIs'],
  },
  {
    title: 'Masterplan de lotes 360°',
    subtitle: 'Demo de visor interactivo para loteos',
    problem: 'Un loteo con tomas de dron no tenía cómo mostrarlas en internet, y el estado de cada lote se comunicaba a mano.',
    solution: 'Un visor web dibuja los lotes sobre el panorama 360° y sobre un mapa 2D. Cada lote muestra estado, superficie y contacto por WhatsApp, y un panel con login permite editarlos. Las tomas son de un colaborador.',
    results: ['Plano del topógrafo convertido en lotes sobre la foto de dron', 'Estado de cada lote editable sin tocar código', 'Demo en línea, con respaldo si la base de datos no responde'],
    flow: ['Plano del topógrafo', 'Lotes proyectados sobre el panorama', 'Visor público y panel de edición'],
    tags: ['Next.js', 'Supabase', 'Photo Sphere Viewer'],
    demoUrl: 'https://demolotes.jpdevz.com/',
    demoLabel: 'Ver demo',
  },
]

export const otherWork = [
  {
    name: 'NexCommit',
    description: 'Agencia de soluciones digitales que cofundé: sitios, automatización y plataformas a medida para pymes.',
    url: 'https://nexcommit.com',
  },
  {
    name: 'Nomad Lexis',
    description: 'Infraestructura y automatización de inscripción para un centro de idiomas.',
    url: 'https://nomadlexis.com',
  },
]
