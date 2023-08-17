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

export const horarios: {[K in HorarioEnum]: HorarioType} = {
  [HorarioEnum.MANIANA]: {
    color: '#D4CAF7',
    name: HorarioEnum.MANIANA,
  },
  [HorarioEnum.MEDIODIA]: {
    color: '#D4CAF7',
    name: HorarioEnum.MEDIODIA,
  },
  [HorarioEnum.TARDE]: {
    color: '#D4CAF7',
    name: HorarioEnum.TARDE,
  },
  [HorarioEnum.NOCHE]: {
    color: '#D4CAF7',
    name: HorarioEnum.NOCHE,
  },
};
