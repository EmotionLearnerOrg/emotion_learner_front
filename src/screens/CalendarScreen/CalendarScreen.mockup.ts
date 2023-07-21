import { emocionesEnum } from "../../components/RuletaContainer/emociones";
import { CalendarItemType } from "../../types/calendario";
import { HorarioEnum } from "../../types/horarios";

type emocionType = {
  emocion: string;
};

export const generateRandomCalendario: () => CalendarItemType[] = () => {
  const calendario: CalendarItemType[] = [];

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate()); // Restar 1 día para no incluir hoy
  const today = currentDate.toISOString().split('T')[0];

  for (let i = 0; i < 90; i++) {
    currentDate.setDate(currentDate.getDate() - 1);
    const currentDateFormatted = currentDate.toISOString().split('T')[0];

    const emociones: Record<HorarioEnum, emocionType> = {
      [HorarioEnum.MANIANA]: { emocion: getRandomEmocion() },
      [HorarioEnum.MEDIODIA]: { emocion: getRandomEmocion() },
      [HorarioEnum.TARDE]: { emocion: getRandomEmocion() },
      [HorarioEnum.NOCHE]: { emocion: getRandomEmocion() },
    };

    const calendarioItem: CalendarItemType = {
      [currentDateFormatted]: emociones,
    };

    calendario.push(calendarioItem);

    if (currentDateFormatted === today) {
      break;
    }
  }

  return calendario;
};

function getRandomEmocion() {
  const emociones = Object.values(emocionesEnum);
  const randomIndex = Math.floor(Math.random() * emociones.length);
  return emociones[randomIndex];
}