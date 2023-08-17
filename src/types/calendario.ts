import { HorarioEnum } from './horarios';
import { EventItem } from '@howljs/calendar-kit';

// Tengo que hacer esta cochinada porque el calendario toma en GTM -7
const horarioConfig: Record<
  HorarioEnum,
  { start: string; end: string; order: number }
> = {
  [HorarioEnum.MANIANA]: { start: '12:00:00', end: '15:00:00', order: 1 },
  [HorarioEnum.MEDIODIA]: { start: '15:00:00', end: '18:00:00', order: 2 },
  [HorarioEnum.TARDE]: { start: '18:00:00', end: '21:00:00', order: 3 },
  [HorarioEnum.NOCHE]: { start: '21:00:00', end: '24:00:00', order: 4 },
};

export const horarioConfigUTC: Record<
  HorarioEnum,
  { start: string; end: string; order: number }
> = {
  [HorarioEnum.MANIANA]: { start: '09:00:00', end: '12:00:00', order: 1 },
  [HorarioEnum.MEDIODIA]: { start: '12:00:00', end: '15:00:00', order: 2 },
  [HorarioEnum.TARDE]: { start: '15:00:00', end: '18:00:00', order: 3 },
  [HorarioEnum.NOCHE]: { start: '18:00:00', end: '21:00:00', order: 4 },
};

export const getCurrentDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

const getMonthName = (month: number) => {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return months[month] || '';
};

export const getFormattedCurrentDate = (): string => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = getMonthName(currentDate.getMonth());
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${day} de ${month}, ${year}`
};

export function getCurrentHorarioEnum() {
  let currentSelectedTime;
  const now = new Date();
  const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}:00`;

  for (const horario of Object.keys(horarioConfigUTC) as HorarioEnum[]) {
    const { start, end } = horarioConfigUTC[horario];
    if (currentTime >= start && currentTime < end) {
      currentSelectedTime = horario;
      break;
    }
  }

  return currentSelectedTime ?? 'Horario no encontrado';
}

export type CalendarItemType = {
  [fecha: string]: Record<string, { emocion: string }>;
};

export type CalendarioType = CalendarItemType[];

export const defaultCalendar: CalendarioType = [
  {
    [getCurrentDate()]: {},
  },
];

export const convertToEventItems = (calendar: CalendarioType): EventItem[] => {
  const colorMapping: { [key: string]: string } = {
    Alegria: '#FEFC78',
    Tristeza: '#6CB5F9',
    Enojo: '#FD5A55',
    Sorpresa: '#BFBFBF',
    Calma: '#56CD54',
  };

  const eventItems: EventItem[] = [];

  for (const calendarItem of calendar) {
    const fecha = Object.keys(calendarItem)[0];
    const calendarData = calendarItem[fecha];

    for (const horario in calendarData) {
      if (Object.prototype.hasOwnProperty.call(calendarData, horario)) {
        const emocion = calendarData[horario].emocion;
        const horarioTime = horarioConfig[horario as HorarioEnum];
        const color = colorMapping[emocion];

        const eventItem: EventItem = {
          id: `${fecha}-${horario}`,
          start: `${fecha}T${horarioTime.start}Z`,
          end: `${fecha}T${horarioTime.end}Z`,
          title: emocion,
          color: color,
        };
        eventItems.push(eventItem);
      }
    }
  }

  return eventItems;
};
