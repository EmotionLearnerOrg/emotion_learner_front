export enum emocionesEnum {
  FELIZ = 'feliz', //amarillo
  RANDOM = 'random', // verde, por ahora se agrega al enum para que no explote la ruleta
  NEUTRAL = 'neutral', //negro, -> se cambiara a boca abierta
  ENOJADO = 'enojado', //rojo
  TRISTE = 'triste', //celeste
  SORPRENDIDO = 'sorprendido', //rosa, -> se cambiara al color a lo que corresponda
}

export type EmocionesTypeNames = `${emocionesEnum}`;

export type emocionType = {
  color: string;
  name: string;
  pathReal: any;
  pathGuia: any;
};

export const emociones: { [K in emocionesEnum]: emocionType } = {
  [emocionesEnum.FELIZ]: {
    color: '#FDFF49',
    name: emocionesEnum.FELIZ,
    pathGuia: require('./../../../assets/ilustraciones/feliz/instructivo/guia-feliz.png'),
    pathReal: require('./../../../assets/ilustraciones/feliz/instructivo/guia-real.png'),
  },
  [emocionesEnum.RANDOM]: {
    color: '#60E743',
    name: emocionesEnum.RANDOM,
    pathGuia: require('./../../../assets/ilustraciones/feliz/instructivo/guia-feliz.png'),
    pathReal: require('./../../../assets/ilustraciones/feliz/instructivo/guia-real.png'),
  },
  [emocionesEnum.NEUTRAL]: {
    color: '#FF73FF',
    name: emocionesEnum.NEUTRAL,
    pathGuia: require('./../../../assets/ilustraciones/neutral/instructivo/guia-neutral.png'),
    pathReal: require('./../../../assets/ilustraciones/neutral/instructivo/guia-real.png'),
  },
  [emocionesEnum.ENOJADO]: {
    color: '#FF2D3C',
    name: emocionesEnum.ENOJADO,
    pathGuia: require('./../../../assets/ilustraciones/enojado/instructivo/guia-enojado.png'),
    pathReal: require('./../../../assets/ilustraciones/enojado/instructivo/guia-real.png'),
  },
  [emocionesEnum.TRISTE]: {
    color: '#B1B1B1',
    name: emocionesEnum.TRISTE,
    pathGuia: require('./../../../assets/ilustraciones/triste/instructivo/guia-triste.png'),
    pathReal: require('./../../../assets/ilustraciones/triste/instructivo/guia-real.png'),
  },
  [emocionesEnum.SORPRENDIDO]: {
    color: '#46A5FF',
    name: emocionesEnum.SORPRENDIDO,
    pathGuia: require('./../../../assets/ilustraciones/sorpresa/instructivo/guia-sorpresa.png'),
    pathReal: require('./../../../assets/ilustraciones/sorpresa/instructivo/guia-real.png'),
  },
};
