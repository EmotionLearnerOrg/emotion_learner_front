export enum insigniasEnum {
  MIRROR_ALEGRIA = 'Mirror_Alegria',
  MIRROR_TRISTEZA = 'Mirror_Tristeza',
  MIRROR_SORPRESA = 'Mirror_Sorpresa',
  MIRROR_ENOJO = 'Mirror_Enojo',
  MIRROR_CALMA = 'Mirror_Calma',
  RULETA_ALEGRIA = 'Ruleta_Alegria',
  RULETA_TRISTEZA = 'Ruleta_Tristeza',
  RULETA_SORPRESA = 'Ruleta_Sorpresa',
  RULETA_ENOJO = 'Ruleta_Enojo',
  RULETA_CALMA = 'Ruleta_Calma',
  ARCADE_ALEGRIA = 'Arcade_Alegria',
  ARCADE_TRISTEZA = 'Arcade_Tristeza',
  ARCADE_SORPRESA = 'Arcade_Sorpresa',
  ARCADE_ENOJO = 'Arcade_Enojo',
  ARCADE_CALMA = 'Arcade_Calma',
  ASOCIACION = 'Asociacion',
}

export type typeInsignias = {[K in insigniasEnum]: boolean};

export type InsigniasTypeNames = `${insigniasEnum}`;

export const insigniasDefault: typeInsignias = {
  [insigniasEnum.MIRROR_ALEGRIA]: false,
  [insigniasEnum.MIRROR_TRISTEZA]: false,
  [insigniasEnum.MIRROR_SORPRESA]: false,
  [insigniasEnum.MIRROR_ENOJO]: false,
  [insigniasEnum.MIRROR_CALMA]: false,
  [insigniasEnum.RULETA_ALEGRIA]: false,
  [insigniasEnum.RULETA_TRISTEZA]: false,
  [insigniasEnum.RULETA_SORPRESA]: false,
  [insigniasEnum.RULETA_ENOJO]: false,
  [insigniasEnum.RULETA_CALMA]: false,
  [insigniasEnum.ARCADE_ALEGRIA]: false,
  [insigniasEnum.ARCADE_TRISTEZA]: false,
  [insigniasEnum.ARCADE_SORPRESA]: false,
  [insigniasEnum.ARCADE_ENOJO]: false,
  [insigniasEnum.ARCADE_CALMA]: false,
  [insigniasEnum.ASOCIACION]: false,
};
export type typeInsigniasColor = {[K in insigniasEnum]: string};

export const insigniasColor: typeInsigniasColor = {
  [insigniasEnum.MIRROR_ALEGRIA]: '#FDFF49',
  [insigniasEnum.MIRROR_TRISTEZA]: '#65ADFC',
  [insigniasEnum.MIRROR_SORPRESA]: '#BBBBBB',
  [insigniasEnum.MIRROR_ENOJO]: '#FC4D4A',
  [insigniasEnum.MIRROR_CALMA]: '#88EA5A',
  [insigniasEnum.RULETA_ALEGRIA]: '#FDFF49',
  [insigniasEnum.RULETA_TRISTEZA]: '#65ADFC',
  [insigniasEnum.RULETA_SORPRESA]: '#BBBBBB',
  [insigniasEnum.RULETA_ENOJO]: '#FC4D4A',
  [insigniasEnum.RULETA_CALMA]: '#88EA5A',
  [insigniasEnum.ARCADE_ALEGRIA]: '#FDFF49',
  [insigniasEnum.ARCADE_TRISTEZA]: '#65ADFC',
  [insigniasEnum.ARCADE_SORPRESA]: '#BBBBBB',
  [insigniasEnum.ARCADE_ENOJO]: '#FC4D4A',
  [insigniasEnum.ARCADE_CALMA]: '#88EA5A',
  [insigniasEnum.ASOCIACION]: '#pink',
};
