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
  colorBottonContainer: string;
  name: string;
  displayname: string;
  pathReal: any;
  pathGuia: any;
  pathMonstruo: any;
  pathOpciones: any;
};

export const emociones: {[K in emocionesEnum]: emocionType} = {
  [emocionesEnum.ALEGRIA]: {
    color: '#FDFF49',
    colorBottonContainer: '#FEFC78',
    name: emocionesEnum.ALEGRIA,
    displayname: 'Alegría',
    pathGuia: AlegriaGuia,
    pathReal: AlegriaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Alegria/monstruo_feliz.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Alegria/opciones/1.png'),
  },
  [emocionesEnum.TRISTEZA]: {
    color: '#65ADFC',
    colorBottonContainer: '#6CB5F9',
    name: emocionesEnum.TRISTEZA,
    displayname: 'Tristeza',
    pathGuia: TristezaGuia,
    pathReal: TristezaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Tristeza/monstruo_triste.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Tristeza/opciones/1.png'),
  },
  [emocionesEnum.SORPRESA]: {
    color: '#BBBBBB',
    colorBottonContainer: '#BBBBBB',
    name: emocionesEnum.SORPRESA,
    displayname: 'Sorpresa',
    pathGuia: SorpresaGuia,
    pathReal: SorpresaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Sorpresa/monstruo_sorprendido.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Sorpresa/opciones/1.png'),
  },
  [emocionesEnum.ENOJO]: {
    color: '#FC4D4A',
    colorBottonContainer: '#FD5A55',
    name: emocionesEnum.ENOJO,
    displayname: 'Enojo',
    pathGuia: EnojoGuia,
    pathReal: EnojoReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Enojo/monstruo_enojado.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Enojo/opciones/1.png'),
  },
  [emocionesEnum.CALMA]: {
    color: '#88EA5A',
    colorBottonContainer: '#56CD54',
    name: emocionesEnum.CALMA,
    displayname: 'Calma',
    pathGuia: CalmaGuia,
    pathReal: CalmaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Calma/monstruo_calmado.png'),
    pathOpciones: require('./../../../assets/ilustraciones/Calma/opciones/1.png'),
  },
};
