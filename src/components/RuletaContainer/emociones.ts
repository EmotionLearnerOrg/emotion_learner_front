import {
  AlegriaGuia,
  AlegriaReal,
  TristezaGuia,
  TristezaReal,
  SorpresaGuia,
  SorpresaReal,
  EnojoGuia,
  EnojoReal,
  CalmaGuia,
  CalmaReal,
} from '../../../assets';

export enum emocionesEnum {
  ALEGRIA = 'Alegria',
  TRISTEZA = 'Tristeza',
  SORPRESA = 'Sorpresa',
  ENOJO = 'Enojo',
  CALMA = 'Calma',
}

export type EmocionesTypeNames = `${emocionesEnum}`;

export type emocionType = {
  color: string;
  name: string;
  pathReal: any;
  pathGuia: any;
};

export const emociones: {[K in emocionesEnum]: emocionType} = {
  [emocionesEnum.ALEGRIA]: {
    color: '#FDFF49',
    name: emocionesEnum.ALEGRIA,
    pathGuia: AlegriaGuia,
    pathReal: AlegriaReal,
  },
  [emocionesEnum.TRISTEZA]: {
    color: '#65ADFC',
    name: emocionesEnum.TRISTEZA,
    pathGuia: TristezaGuia,
    pathReal: TristezaReal,
  },
  [emocionesEnum.SORPRESA]: {
    color: '#BBBBBB',
    name: emocionesEnum.SORPRESA,
    pathGuia: SorpresaGuia,
    pathReal: SorpresaReal,
  },
  [emocionesEnum.ENOJO]: {
    color: '#FC4D4A',
    name: emocionesEnum.ENOJO,
    pathGuia: EnojoGuia,
    pathReal: EnojoReal,
  },
  [emocionesEnum.CALMA]: {
    color: '#88EA5A',
    name: emocionesEnum.CALMA,
    pathGuia: CalmaGuia,
    pathReal: CalmaReal,
  },
};
