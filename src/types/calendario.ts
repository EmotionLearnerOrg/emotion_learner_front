import { AgendaEntry, AgendaSchedule } from "react-native-calendars/src/types";
import { HorarioEnum } from "./horarios";

export function getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
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

export const convertToAgendaSchedule = (calendar: CalendarioType): AgendaSchedule => {
    const agendaSchedule: AgendaSchedule = {};

    const horarioOrder: Record<HorarioEnum, number> = {
        [HorarioEnum.MANIANA]: 1,
        [HorarioEnum.MEDIODIA]: 2,
        [HorarioEnum.TARDE]: 3,
        [HorarioEnum.NOCHE]: 4,
    };

    for (const calendarItem of calendar) {
        const fecha = Object.keys(calendarItem)[0];
        const calendarData = calendarItem[fecha];
        const agendaEntries: AgendaEntry[] = [];

        const orderedHorarios = Object.keys(calendarData).sort((a, b) => {
            return horarioOrder[a as HorarioEnum] - horarioOrder[b as HorarioEnum];
        });

        for (const horario of orderedHorarios) {
            const emocion = calendarData[horario].emocion;
            const agendaEntry: AgendaEntry = {
                name: emocion,
                height: 10, // Asigna el valor adecuado según tu lógica
                day: horario,
            };

            agendaEntries.push(agendaEntry);
        }

        agendaSchedule[fecha] = agendaEntries;
    }

    return agendaSchedule;
};