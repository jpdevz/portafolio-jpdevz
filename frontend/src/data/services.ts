export type Service = {
  title: string
  text: string
  caseTitle: string
  caseAnchor: string
}

// Oferta de servicios: cada una se respalda con un caso real de la sección siguiente.
export const services: Service[] = [
  {
    title: 'Automatización e integraciones',
    text: 'Conecto tus plataformas y elimino tareas manuales: registros, consolidación de datos y reportes que hoy se arman a mano.',
    caseTitle: 'Asistencia Moodle + Jitsi',
    caseAnchor: '#projects',
  },
  {
    title: 'Aplicaciones web y herramientas internas',
    text: 'Plataformas a medida y dashboards adaptados a cómo trabaja tu equipo, con tus datos ordenados y consultables.',
    caseTitle: 'Nova Attendance',
    caseAnchor: '#projects',
  },
  {
    title: 'IA aplicada a procesos',
    text: 'Inteligencia artificial solo donde aporta valor: leer documentos, extraer y categorizar datos dentro de un flujo que ya funciona.',
    caseTitle: 'FotoGasto',
    caseAnchor: '#projects',
  },
]
