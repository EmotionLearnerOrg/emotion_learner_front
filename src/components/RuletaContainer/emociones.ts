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
  pathOpciones: any[];
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
    pathOpciones: [
      require('./../../../assets/ilustraciones/Alegria/opciones/alegria1.png'),
      require('./../../../assets/ilustraciones/Alegria/opciones/alegria2.png'),
      require('./../../../assets/ilustraciones/Alegria/opciones/alegria3.png'),
      require('./../../../assets/ilustraciones/Alegria/opciones/alegria4.png'),
      require('./../../../assets/ilustraciones/Alegria/opciones/alegria5.png'),
    ],
  },
  [emocionesEnum.TRISTEZA]: {
    color: '#65ADFC',
    colorBottonContainer: '#6CB5F9',
    name: emocionesEnum.TRISTEZA,
    displayname: 'Tristeza',
    pathGuia: TristezaGuia,
    pathReal: TristezaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Tristeza/monstruo_triste.png'),
    pathOpciones: [
      require('./../../../assets/ilustraciones/Tristeza/opciones/tristeza1.png'),
      require('./../../../assets/ilustraciones/Tristeza/opciones/tristeza2.png'),
      require('./../../../assets/ilustraciones/Tristeza/opciones/tristeza3.png'),
      require('./../../../assets/ilustraciones/Tristeza/opciones/tristeza4.png'),
      require('./../../../assets/ilustraciones/Tristeza/opciones/tristeza5.png'),
    ],
  },
  [emocionesEnum.SORPRESA]: {
    color: '#BBBBBB',
    colorBottonContainer: '#BFBFBF',
    name: emocionesEnum.SORPRESA,
    displayname: 'Sorpresa',
    pathGuia: SorpresaGuia,
    pathReal: SorpresaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Sorpresa/monstruo_sorprendido.png'),
    pathOpciones: [
      require('./../../../assets/ilustraciones/Sorpresa/opciones/sorpresa1.png'),
      require('./../../../assets/ilustraciones/Sorpresa/opciones/sorpresa2.png'),
      require('./../../../assets/ilustraciones/Sorpresa/opciones/sorpresa3.png'),
      require('./../../../assets/ilustraciones/Sorpresa/opciones/sorpresa4.png'),
      require('./../../../assets/ilustraciones/Sorpresa/opciones/sorpresa5.png'),
    ],
  },
  [emocionesEnum.ENOJO]: {
    color: '#FC4D4A',
    colorBottonContainer: '#FD5A55',
    name: emocionesEnum.ENOJO,
    displayname: 'Enojo',
    pathGuia: EnojoGuia,
    pathReal: EnojoReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Enojo/monstruo_enojado.png'),
    pathOpciones: [
      require('./../../../assets/ilustraciones/Enojo/opciones/enojo1.png'),
      require('./../../../assets/ilustraciones/Enojo/opciones/enojo2.png'),
      require('./../../../assets/ilustraciones/Enojo/opciones/enojo3.png'),
      require('./../../../assets/ilustraciones/Enojo/opciones/enojo4.png'),
      require('./../../../assets/ilustraciones/Enojo/opciones/enojo5.png'),
    ],
  },
  [emocionesEnum.CALMA]: {
    color: '#88EA5A',
    colorBottonContainer: '#56CD54',
    name: emocionesEnum.CALMA,
    displayname: 'Calma',
    pathGuia: CalmaGuia,
    pathReal: CalmaReal,
    pathMonstruo: require('./../../../assets/ilustraciones/Calma/monstruo_calmado.png'),
    pathOpciones: [
      require('./../../../assets/ilustraciones/Calma/opciones/calma1.png'),
      require('./../../../assets/ilustraciones/Calma/opciones/calma2.png'),
      require('./../../../assets/ilustraciones/Calma/opciones/calma3.png'),
      require('./../../../assets/ilustraciones/Calma/opciones/calma4.png'),
      require('./../../../assets/ilustraciones/Calma/opciones/calma5.png'),
    ],
  },
};
