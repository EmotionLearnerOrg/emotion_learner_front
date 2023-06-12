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

export const emociones: {[K in emocionesEnum]: emocionType} = {
  [emocionesEnum.FELIZ]: {
    color: '#FDFF49',
    name: emocionesEnum.FELIZ,
    pathGuia: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
  },
  [emocionesEnum.RANDOM]: {
    color: '#60E743',
    name: emocionesEnum.RANDOM,
    pathGuia: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
  },
  [emocionesEnum.NEUTRAL]: {
    color: '#FF73FF',
    name: emocionesEnum.NEUTRAL,
    pathGuia: require('./../../../assets/ilustraciones/enamorado/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/enamorado/guiaFelizCopy.png'),
  },
  [emocionesEnum.ENOJADO]: {
    color: '#FF2D3C',
    name: emocionesEnum.ENOJADO,
    pathGuia: require('./../../../assets/ilustraciones/enojado/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/enojado/guiaFelizCopy.png'),
  },
  [emocionesEnum.TRISTE]: {
    color: '#B1B1B1',
    name: emocionesEnum.TRISTE,
    pathGuia: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
  },
  [emocionesEnum.SORPRENDIDO]: {
    color: '#46A5FF',
    name: emocionesEnum.SORPRENDIDO,
    pathGuia: require('./../../../assets/ilustraciones/meditando/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/meditando/guiaFelizCopy.png'),
  },
};
