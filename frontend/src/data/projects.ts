export const projects = [
  {
    title: 'Plataforma de Control de Asistencia',
    subtitle: 'Integración Moodle + Jitsi',
    problem: 'La asistencia se registraba manualmente y era difícil consolidar la información.',
    solution: 'Diseñé una plataforma integrada con Moodle y Jitsi que automatiza el registro de asistencia.',
    results: ['Menos trabajo manual', 'Mayor trazabilidad', 'Información centralizada'],
    tags: ['Python', 'Django', 'APIs'],
    repoUrl: '',
    demoUrl: '',
    isPublished: false
  },
  {
    title: 'Sistema de Asistencia Multisede',
    problem: 'Empresas con múltiples sedes no podían verificar de forma confiable la asistencia real de su personal, exponiéndose a fraudes de ubicación.',
    solution: 'Diseñé una aplicación con geofencing, validación biométrica y detección de VPN para garantizar registros de asistencia confiables en cada sede.',
    results: ['Registros confiables', 'Menor fraude de ubicación', 'Control multisede'],
    tags: ['Python', 'Django / FastAPI', 'Geofencing'],
    repoUrl: '',
    demoUrl: 'https://nova-dialing.vercel.app/',
    isPublished: true
  },
  {
    title: 'Plataforma de Gestión de Miembros',
    problem: 'Buscar y filtrar miembros en un catálogo grande era lento y afectaba el rendimiento del sitio.',
    solution: 'Implementé estructuras de datos optimizadas en el backend para permitir búsquedas masivas e instantáneas.',
    results: ['Búsquedas instantáneas', 'Mejor rendimiento del sitio', 'Catálogo escalable'],
    tags: ['PHP', 'WordPress Core', 'Optimización de Datos'],
    repoUrl: '',
    demoUrl: '',
    isPublished: false
  },
  {
    title: 'Agencia de Soluciones Digitales',
    subtitle: 'NexCommit',
    problem: 'Empresas y startups necesitaban soluciones tecnológicas a medida sin un equipo interno de desarrollo.',
    solution: 'Cofundé una agencia dedicada al diseño e implementación de plataformas, automatizaciones e inteligencia artificial para empresas.',
    results: ['Productos digitales a medida', 'Entrega ágil de soluciones', 'Arquitecturas escalables'],
    tags: ['Full Stack', 'Cloud', 'IA'],
    repoUrl: '',
    demoUrl: 'https://nexcommit.com',
    isPublished: true
  },
  {
    title: 'Plataforma Educativa con Automatización',
    subtitle: 'Nomad Lexis',
    problem: 'El centro de idiomas gestionaba inscripciones y usuarios manualmente, limitando su capacidad de crecer.',
    solution: 'Diseñé y desplegué la infraestructura digital completa, automatizando la inscripción y gestión de usuarios.',
    results: ['Inscripción automatizada', 'Plataforma escalable', 'Menor carga operativa'],
    tags: ['DevOps', 'Cloud', 'LMS'],
    repoUrl: '',
    demoUrl: 'https://nomadlexis.com',
    isPublished: true
  }
]
