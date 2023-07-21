export enum HorarioEnum {
  MANIANA = 'Mañana',
  MEDIODIA = 'Mediodia',
  TARDE = 'Tarde',
  NOCHE = 'Noche',
}

export type HorarioTypeNames = `${HorarioEnum}`;

export type HorarioType = {
  color: string;
  name: string;
};

export const horarios: { [K in HorarioEnum]: HorarioType } = {
  [HorarioEnum.MANIANA]: {
    color: '#FFA500',
    name: HorarioEnum.MANIANA
  },
  [HorarioEnum.MEDIODIA]: {
    color: '#C8A2C8',
    name: HorarioEnum.MEDIODIA
  },
  [HorarioEnum.TARDE]: {
    color: '#D2B48C',
    name: HorarioEnum.TARDE
  },
  [HorarioEnum.NOCHE]: {
    color: '#ADD8E6',
    name: HorarioEnum.NOCHE
  }
};
