export interface StackCategory {
  title: string;
  description: string;
  descriptionEn: string;
  tools: string[];
}

export const stack: StackCategory[] = [
  {
    title: 'Frontend',
    description: 'Performance-first interfaces and animation-aware experiences.',
    descriptionEn: 'Performance-first interfaces with animation-aware craftsmanship.',
    tools: [
      'Astro',
      'React',
      'React Native',
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion (selective)',
    ],
  },
  {
    title: 'Backend',
    description: 'Scalable APIs with observability and predictable release cycles.',
    descriptionEn: 'Scalable APIs backed by observability and predictable release operations.',
    tools: ['Node.js', 'Express', 'Supabase', 'PlanetScale', 'tRPC'],
  },
  {
    title: 'Infrastructure',
    description: 'Automated deployments with strong monitoring and cost control.',
    descriptionEn: 'Automations with solid monitoring and cost-aware guardrails.',
    tools: ['Vercel', 'GitHub Actions', 'AWS', 'Sentry', 'Vercel Analytics'],
  },
  {
    title: 'Architecture',
    description: 'Clean architecture, modular services, and observability-first contracts.',
    descriptionEn: 'Clean architecture, modular services, and observability-first contracts.',
    tools: ['Clean Architecture', 'Domain-Driven Design', 'Event-driven APIs', 'Test-driven Development'],
  },
];
