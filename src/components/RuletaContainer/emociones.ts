import {
  FelizGuia,
  FelizReal,
  TristeGuia,
  TristeReal,
  SorpresaGuia,
  SorpresaReal,
  EnojadoGuia,
  EnojadoReal,
  NeutralGuia,
  NeutralReal,
} from '../../../assets';

export enum emocionesEnum {
  FELIZ = 'feliz',
  TRISTE = 'triste',
  SORPRENDIDO = 'sorprendido',
  ENOJADO = 'enojado',
  NEUTRAL = 'neutral',
}

export type EmocionesTypeNames = `${emocionesEnum}`;

export type emocionType = {
  color: string;
  name: string;
  pathReal: any;
  pathGuia: any;
};

export const emociones: {[K in emocionesEnum]: emocionType} = {
  [emocionesEnum.FELIZ]: {
    color: '#FDFF49',
    name: emocionesEnum.FELIZ,
    pathGuia: FelizGuia,
    pathReal: FelizReal,
  },
  [emocionesEnum.TRISTE]: {
    color: '#65ADFC',
    name: emocionesEnum.TRISTE,
    pathGuia: TristeGuia,
    pathReal: TristeReal,
  },
  [emocionesEnum.SORPRENDIDO]: {
    color: '#BBBBBB',
    name: emocionesEnum.SORPRENDIDO,
    pathGuia: SorpresaGuia,
    pathReal: SorpresaReal,
  },
  [emocionesEnum.ENOJADO]: {
    color: '#FC4D4A',
    name: emocionesEnum.ENOJADO,
    pathGuia: EnojadoGuia,
    pathReal: EnojadoReal,
  },
  [emocionesEnum.NEUTRAL]: {
    color: '#88EA5A',
    name: emocionesEnum.NEUTRAL,
    pathGuia: NeutralGuia,
    pathReal: NeutralReal,
  },
};

const blabla = {
  arcade: [
    ['arcade_feliz', false],
    ['arcade_triste', false],
    ['arcade_sorprendido', false],
    ['arcade_enojado', false],
    ['arcade_neutral', false],
  ],
  mirror: [
    ['mirror_feliz', false],
    ['mirror_triste', false],
    ['mirror_sorprendido', false],
    ['mirror_enojado', false],
    ['mirror_neutral', false],
  ],
  ruleta: [
    ['ruleta_feliz', false],
    ['ruleta_triste', false],
    ['ruleta_sorprendido', false],
    ['ruleta_enojado', false],
    ['ruleta_neutral', false],
  ],
};
