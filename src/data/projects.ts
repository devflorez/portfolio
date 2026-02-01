export interface Project {
  name: string;
  description: string;
  descriptionEn: string;
  impact: string;
  impactEn: string;
  stack: string[];
  live: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    name: 'Personal Finance Dashboard',
    description:
      'Dashboard personal de finanzas con registro de movimientos, presupuestos, reportes y chat con IA.',
    impact:
      'Permite monitorear dinero real y simulado, entregando insights inmediatos y comunicación contextual con un asistente IA.',
    descriptionEn:
      'Personal finance dashboard tracking transactions, budgets, reports, and an AI chat assistant.',
    impactEn:
      'Gives real-time visibility into spending while surfacing insights and contextual AI chat for financial decisions.',
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS 4', 'Zustand', 'Supabase (optional)', 'AI SDK (OpenRouter)', 'Serwist PWA'],
    live: 'https://www.finzly.app/',
  },
  {
    name: 'video-to-gif-cli',
    description: 'Ligera CLI para convertir MP4/MOV en GIFs optimizados con ffmpeg.',
    impact: 'Facilitó la creación de activos visuales para documentación y marketing con conversiones en lote y vistas previas sin costo.',
    stack: ['JavaScript', 'ffmpeg', 'CLI'],
    live: 'https://www.npmjs.com/package/video-to-gif-cli',
    repo: 'https://github.com/devflorez/video-to-gif-cli',
    descriptionEn: 'Lightweight CLI for converting MP4/MOV assets to optimized GIF previews using ffmpeg.',
    impactEn: 'Helped documentation and marketing teams generate visual assets with batch conversions and previews at no cost.',
  },
  {
    name: 'dashit-navi',
    description: 'Interfaz de terminal (TUI) hecha con Ink para administrar proyectos Node.js.',
    impact: 'Reducía el tiempo de arranque de entornos locales al exponer comandos críticos con feedback inmediato.',
    descriptionEn: 'Ink-powered terminal UI for orchestrating Node.js projects with curated commands.',
    impactEn: 'Shrank local setup times by surfacing critical commands with instant feedback.',
    stack: ['TypeScript', 'Ink', 'Node.js'],
    live: 'https://github.com/devflorez/dashit-navi',
    repo: 'https://github.com/devflorez/dashit-navi',
  },
  {
    name: 'pixelart-cli',
    description: 'Conviértelo todo a arte pixelado con paletas retro desde la línea de comandos.',
    impact: 'Permitió generar assets para prototipos y pruebas UX con resultados consistentes y reproducibles.',
    descriptionEn: 'Turn images into pixel art with retro palettes directly from the command line.',
    impactEn: 'Generated consistent, reproducible assets for prototyping and UX experiments.',
    stack: ['JavaScript', 'Node.js', 'CLI'],
    live: 'https://github.com/devflorez/pixelart-cli',
    repo: 'https://github.com/devflorez/pixelart-cli',
  },
  {
    name: 'website',
    description: 'Sitio personal basado en Next.js + GraphCMS desplegado en Vercel.',
    impact: 'Sirve como escaparate autónomo que combina marketing de marca y librería de proyectos mantenidos a tiempo real.',
    descriptionEn: 'Personal website powered by Next.js + GraphCMS and deployed on Vercel.',
    impactEn: 'Acts as a self-updating showcase that blends brand storytelling with a live project catalog.',
    stack: ['Next.js', 'GraphCMS', 'Vercel'],
    live: 'https://www.devflorez.com',
    repo: 'https://github.com/devflorez/website',
  },
];
