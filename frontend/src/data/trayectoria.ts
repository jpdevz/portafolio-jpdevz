export type Etapa = {
  period: string
  role: string
  place: string
  summary: string
}

// Fuente: CV_Master_JP_ES_v2. Mantener sincronizado con el CV.
export const trayectoria: Etapa[] = [
  {
    period: '2022 – hoy',
    role: 'Administrador de Campus Virtual & Soluciones Digitales',
    place: 'Bestwork English Institute (BEI)',
    summary: 'Automatizo procesos académicos y operativos, integro Moodle con plataformas externas y construyo herramientas internas de gestión.',
  },
  {
    period: '2019 – hoy',
    role: 'Desarrollo de soluciones digitales (freelance)',
    place: 'Independiente · cofundador de NexCommit',
    summary: 'Aplicaciones web, automatizaciones e integraciones por API adaptadas a necesidades de negocio.',
  },
  {
    period: '2021',
    role: 'Asesor de procesos',
    place: 'Cafetería Museo Palacio Rioja & Carmela Gourmet',
    summary: 'Identificación de cuellos de botella y mejoras operativas internas.',
  },
  {
    period: '2020',
    role: 'Auditor de remuneraciones y asistencia',
    place: 'Guard Service',
    summary: 'Análisis de datos para detectar pagos indebidos y errores en horas extra.',
  },
  {
    period: '2018 – 2019',
    role: 'Analista de Recursos Humanos',
    place: 'Corporación Municipal de Desarrollo Social de Antofagasta',
    summary: 'Gestión de sistemas de asistencia, reportes y mejora de procesos internos.',
  },
  {
    period: '2017 – 2018',
    role: 'Asesor tecnológico en operaciones',
    place: 'Uber',
    summary: 'Apoyo a operaciones regionales con herramientas tecnológicas y optimización de procesos.',
  },
]

export const formacion = [
  'Ingeniería en Control de Gestión · Universidad Arturo Prat',
  'Desarrollo de Aplicaciones Full Stack Python · Edutecno (2024–2025)',
  'Oracle Next Education, Backend · Alura (2024)',
  'Arquitectura Cloud · Talento Digital Chile (certificación)',
]
