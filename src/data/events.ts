const MS_PER_DAY = 1000 * 60 * 60 * 24;

export interface EventDefinition {
  slug: string;
  nameEs: string;
  description?: string;
  targetDate: (year: number) => Date;
}

const fixedDate = (month: number, day: number) => (year: number) => new Date(Date.UTC(year, month - 1, day));

const easterSunday = (year: number) => {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
};

const addDays = (date: Date, count: number) => new Date(date.getTime() + MS_PER_DAY * count);

export const events: EventDefinition[] = [
  {
    slug: 'navidad',
    nameEs: 'Navidad',
    description: 'El 25 de diciembre se celebra la Navidad en Colombia.',
    targetDate: fixedDate(12, 25),
  },
  {
    slug: 'fin-de-ano',
    nameEs: 'Fin de Año',
    description: 'La última fecha del calendario anual.',
    targetDate: fixedDate(12, 31),
  },
  {
    slug: 'ano-nuevo',
    nameEs: 'Año Nuevo',
    description: 'Comienza cada nuevo ciclo el 1 de enero.',
    targetDate: fixedDate(1, 1),
  },
  {
    slug: 'semana-santa',
    nameEs: 'Semana Santa',
    description: 'Semana Santa comienza el Domingo de Ramos.',
    targetDate: (year: number) => addDays(easterSunday(year), -7),
  },
];

export const getEventBySlug = (slug: string | undefined) =>
  events.find((event) => event.slug === slug ?? 'navidad');
