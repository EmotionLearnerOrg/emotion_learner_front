export enum insigniasEnum {
  MIRROR_FELIZ = 'mirror_feliz',
  MIRROR_TRISTE = 'mirror_triste',
  MIRROR_SORPRENDIDO = 'mirror_sorprendido',
  MIRROR_ENOJADO = 'mirror_enojado',
  MIRROR_NEUTRAL = 'mirror_neutral',
  RULETA_FELIZ = 'ruleta_feliz',
  RULETA_TRISTE = 'ruleta_triste',
  RULETA_SORPRENDIDO = 'ruleta_sorprendido',
  RULETA_ENOJADO = 'ruleta_enojado',
  RULETA_NEUTRAL = 'ruleta_neutral',
  ARCADE_FELIZ = 'arcade_feliz',
  ARCADE_TRISTE = 'arcade_triste',
  ARCADE_SORPRENDIDO = 'arcade_sorprendido',
  ARCADE_ENOJADO = 'arcade_enojado',
  ARCADE_NEUTRAL = 'arcade_neutral',
  ASOCIACION = 'asociacion',
}

export type typeInsignias = {[K in insigniasEnum]: boolean};

export type InsigniasTypeNames = `${insigniasEnum}`;

export const insigniasDefault: typeInsignias = {
  [insigniasEnum.MIRROR_FELIZ]: false,
  [insigniasEnum.MIRROR_TRISTE]: false,
  [insigniasEnum.MIRROR_SORPRENDIDO]: false,
  [insigniasEnum.MIRROR_ENOJADO]: false,
  [insigniasEnum.MIRROR_NEUTRAL]: false,
  [insigniasEnum.RULETA_FELIZ]: false,
  [insigniasEnum.RULETA_TRISTE]: false,
  [insigniasEnum.RULETA_SORPRENDIDO]: false,
  [insigniasEnum.RULETA_ENOJADO]: false,
  [insigniasEnum.RULETA_NEUTRAL]: false,
  [insigniasEnum.ARCADE_FELIZ]: false,
  [insigniasEnum.ARCADE_TRISTE]: false,
  [insigniasEnum.ARCADE_SORPRENDIDO]: false,
  [insigniasEnum.ARCADE_ENOJADO]: false,
  [insigniasEnum.ARCADE_NEUTRAL]: false,
  [insigniasEnum.ASOCIACION]: false,
};
export type typeInsigniasColor = {[K in insigniasEnum]: string};

export const insigniasColor: typeInsigniasColor = {
  [insigniasEnum.MIRROR_FELIZ]: '#FDFF49',
  [insigniasEnum.MIRROR_TRISTE]: '#65ADFC',
  [insigniasEnum.MIRROR_SORPRENDIDO]: '#BBBBBB',
  [insigniasEnum.MIRROR_ENOJADO]: '#FC4D4A',
  [insigniasEnum.MIRROR_NEUTRAL]: '#88EA5A',
  [insigniasEnum.RULETA_FELIZ]: '#FDFF49',
  [insigniasEnum.RULETA_TRISTE]: '#65ADFC',
  [insigniasEnum.RULETA_SORPRENDIDO]: '#BBBBBB',
  [insigniasEnum.RULETA_ENOJADO]: '#FC4D4A',
  [insigniasEnum.RULETA_NEUTRAL]: '#88EA5A',
  [insigniasEnum.ARCADE_FELIZ]: '#FDFF49',
  [insigniasEnum.ARCADE_TRISTE]: '#65ADFC',
  [insigniasEnum.ARCADE_SORPRENDIDO]: '#BBBBBB',
  [insigniasEnum.ARCADE_ENOJADO]: '#FC4D4A',
  [insigniasEnum.ARCADE_NEUTRAL]: '#88EA5A',
  [insigniasEnum.ASOCIACION]: '#pink',
};
