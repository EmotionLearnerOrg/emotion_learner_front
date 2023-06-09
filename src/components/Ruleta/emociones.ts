export enum emocionesEnum {
  FELIZ = 'feliz',
  TRISTE = 'triste',
  ENOJADO = 'enojado',
  SORPRENDIDO = 'sorprendido',
  NEUTRAL = 'neutral',
  RANDOM = 'random', // este lo puse para que no explote la ruleta
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
    pathGuia: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
  },
  [emocionesEnum.RANDOM]: {
    color: '#FDFF49',
    name: emocionesEnum.FELIZ,
    pathGuia: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
  },
  [emocionesEnum.TRISTE]: {
    color: '#B1B1B1',
    name: emocionesEnum.TRISTE,
    pathGuia: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/feliz/guiaFelizCopy.png'),
  },
  [emocionesEnum.ENOJADO]: {
    color: '#FF2D3C',
    name: emocionesEnum.ENOJADO,
    pathGuia: require('./../../../assets/ilustraciones/enojado/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/enojado/guiaFelizCopy.png'),
  },
  [emocionesEnum.SORPRENDIDO]: {
    color: '#46A5FF',
    name: emocionesEnum.SORPRENDIDO,
    pathGuia: require('./../../../assets/ilustraciones/meditando/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/meditando/guiaFelizCopy.png'),
  },
  [emocionesEnum.NEUTRAL]: {
    color: '#FF73FF',
    name: emocionesEnum.NEUTRAL,
    pathGuia: require('./../../../assets/ilustraciones/enamorado/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/enamorado/guiaFelizCopy.png'),
  },
};