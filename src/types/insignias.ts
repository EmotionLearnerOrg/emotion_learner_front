export enum insigniasEnum {
  FELIZ = 'feliz',
  TRISTE = 'triste',
  SORPRENDIDO = 'sorprendido',
  ENOJADO = 'enojado',
  NEUTRAL = 'neutral',
}

export type typeInsignias = {[K in insigniasEnum]: boolean};

export type InsigniasTypeNames = `${insigniasEnum}`;

export const insigniasDefault: typeInsignias = {
  [insigniasEnum.FELIZ]: false,
  [insigniasEnum.TRISTE]: false,
  [insigniasEnum.SORPRENDIDO]: false,
  [insigniasEnum.ENOJADO]: false,
  [insigniasEnum.NEUTRAL]: false,
};
export type typeInsigniasColor = {[K in insigniasEnum]: string};

export const insigniasColor: typeInsigniasColor = {
  [insigniasEnum.FELIZ]: 'red',
  [insigniasEnum.TRISTE]: 'blue',
  [insigniasEnum.SORPRENDIDO]: 'yellow',
  [insigniasEnum.ENOJADO]: 'green',
  [insigniasEnum.NEUTRAL]: 'gray',
};
