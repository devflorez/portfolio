export interface StackCategory {
  title: string;
  description: string;
  tools: string[];
}

export const stack: StackCategory[] = [
  {
    title: 'Frontend',
    description: 'Performance-first interfaces and animation-aware experiences.',
    tools: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion (selective)'],
  },
  {
    title: 'Backend',
    description: 'Scalable APIs with observability and predictable release cycles.',
    tools: ['Node.js', 'Express', 'Supabase', 'PlanetScale', 'tRPC'],
  },
  {
    title: 'Infrastructure',
    description: 'Automated deployments with strong monitoring and cost control.',
    tools: ['Vercel', 'GitHub Actions', 'Sentry', 'Vercel Analytics'],
  },
];
