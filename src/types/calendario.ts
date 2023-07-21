import { HorarioEnum } from "./horarios";
import { insigniasEnum } from "./insignias";

// validar si le pongo enum o con tan solo string va
export type CalendarioItemType = {
    dia: string;
    horario: string;
    emocion: string;
};