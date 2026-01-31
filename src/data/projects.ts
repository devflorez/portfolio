export interface Project {
  name: string;
  description: string;
  impact: string;
  stack: string[];
  live: string;
  repo: string;
}

export const projects: Project[] = [
  {
    name: 'video-to-gif-cli',
    description: 'Ligera CLI para convertir MP4/MOV en GIFs optimizados con ffmpeg.',
    impact: 'Facilitó la creación de activos visuales para documentación y marketing con conversiones en lote y vistas previas sin costo.',
    stack: ['JavaScript', 'ffmpeg', 'CLI'],
    live: 'https://www.npmjs.com/package/video-to-gif-cli',
    repo: 'https://github.com/devflorez/video-to-gif-cli',
  },
  {
    name: 'dashit-navi',
    description: 'Interfaz de terminal (TUI) hecha con Ink para administrar proyectos Node.js.',
    impact: 'Reducía el tiempo de arranque de entornos locales al exponer comandos críticos con feedback inmediato.',
    stack: ['TypeScript', 'Ink', 'Node.js'],
    live: 'https://github.com/devflorez/dashit-navi',
    repo: 'https://github.com/devflorez/dashit-navi',
  },
  {
    name: 'pixelart-cli',
    description: 'Conviértelo todo a arte pixelado con paletas retro desde la línea de comandos.',
    impact: 'Permitió generar assets para prototipos y pruebas UX con resultados consistentes y reproducibles.',
    stack: ['JavaScript', 'Node.js', 'CLI'],
    live: 'https://github.com/devflorez/pixelart-cli',
    repo: 'https://github.com/devflorez/pixelart-cli',
  },
  {
    name: 'website',
    description: 'Sitio personal basado en Next.js + GraphCMS desplegado en Vercel.',
    impact: 'Sirve como escaparate autónomo que combina marketing de marca y librería de proyectos mantenidos a tiempo real.',
    stack: ['Next.js', 'GraphCMS', 'Vercel'],
    live: 'https://www.devflorez.com',
    repo: 'https://github.com/devflorez/website',
  },
];
