import type { EventDefinition } from '../data/events';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const toBogotaDate = (date: Date) =>
  new Date(date.toLocaleString('en-US', { timeZone: 'America/Bogota' }));

const normalize = (date: Date) => {
  const clone = new Date(date);
  clone.setHours(0, 0, 0, 0);
  return clone;
};

export interface Countdown {
  event: EventDefinition;
  targetDate: Date;
  daysUntil: number;
  isToday: boolean;
}

export const calculateDaysUntilEvent = (event: EventDefinition, reference: Date): Countdown => {
  const now = normalize(toBogotaDate(reference));
  let target = normalize(toBogotaDate(event.targetDate(reference.getFullYear())));
  let daysUntil = Math.ceil((target.getTime() - now.getTime()) / MS_PER_DAY);

  if (daysUntil < 0) {
    const nextYearTarget = normalize(
      toBogotaDate(event.targetDate(reference.getFullYear() + 1))
    );
    target = nextYearTarget;
    daysUntil = Math.ceil((target.getTime() - now.getTime()) / MS_PER_DAY);
  }

  return {
    event,
    targetDate: target,
    daysUntil,
    isToday: daysUntil === 0,
  };
};
