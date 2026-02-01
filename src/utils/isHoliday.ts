import { colombiaHolidays } from '../data/holidays';
import type { Holiday } from '../data/holidays';

const toIsoDate = (date: Date) => date.toISOString().slice(0, 10);

export interface HolidayCheck {
  isHoliday: boolean;
  match?: Holiday;
  dateKey: string;
}

export const isColombiaHoliday = (date: Date): HolidayCheck => {
  const dateKey = toIsoDate(date);
  const match = colombiaHolidays.find((holiday) => holiday.date === dateKey);
  return { isHoliday: Boolean(match), match, dateKey };
};
