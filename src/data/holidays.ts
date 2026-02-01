export interface Holiday {
  date: string; // ISO yyyy-MM-dd
  nameEs: string;
  nameEn: string;
  description?: string;
}

export const colombiaHolidays: Holiday[] = [
  { date: '2026-01-01', nameEs: 'Año Nuevo', nameEn: "New Year's Day" },
  { date: '2026-01-12', nameEs: 'Epifanía del Señor', nameEn: 'Epiphany' },
  { date: '2026-03-23', nameEs: 'San José', nameEn: 'Saint Joseph' },
  { date: '2026-04-02', nameEs: 'Jueves Santo', nameEn: 'Maundy Thursday' },
  { date: '2026-04-03', nameEs: 'Viernes Santo', nameEn: 'Good Friday' },
  { date: '2026-05-01', nameEs: 'Día del Trabajo', nameEn: "Labour Day" },
  { date: '2026-05-25', nameEs: 'Ascensión del Señor', nameEn: 'Ascension of Jesus' },
  { date: '2026-06-05', nameEs: 'Corpus Christi', nameEn: 'Corpus Christi' },
  { date: '2026-06-15', nameEs: 'Sagrado Corazón', nameEn: 'Sacred Heart' },
  { date: '2026-06-22', nameEs: 'San Pedro y San Pablo', nameEn: 'Saint Peter and Saint Paul' },
  { date: '2026-07-20', nameEs: 'Día de la Independencia', nameEn: 'Independence Day' },
  { date: '2026-08-07', nameEs: 'Batalla de Boyacá', nameEn: 'Battle of Boyacá' },
  { date: '2026-08-17', nameEs: 'La Asunción', nameEn: 'Assumption' },
  { date: '2026-10-12', nameEs: 'Día de la Raza', nameEn: 'Columbus Day' },
  { date: '2026-11-02', nameEs: 'Todos los Santos', nameEn: 'All Saints' },
  { date: '2026-11-16', nameEs: 'Independencia de Cartagena', nameEn: 'Independence of Cartagena' },
  { date: '2026-12-08', nameEs: 'Inmaculada Concepción', nameEn: 'Immaculate Conception' },
  { date: '2026-12-25', nameEs: 'Navidad', nameEn: 'Christmas Day' },
];
