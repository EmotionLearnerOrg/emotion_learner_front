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
    pathGuia: require('./../../../assets/ilustraciones/feliz/instructivo/guia-feliz.png'),
    pathReal: require('./../../../assets/ilustraciones/feliz/instructivo/guia-real.png'),
  },
  [emocionesEnum.TRISTE]: {
    color: '#65ADFC',
    name: emocionesEnum.TRISTE,
    pathGuia: require('./../../../assets/ilustraciones/triste/instructivo/guia-triste.png'),
    pathReal: require('./../../../assets/ilustraciones/triste/instructivo/guia-real.png'),
  },
  [emocionesEnum.SORPRENDIDO]: {
    color: '#BBBBBB',
    name: emocionesEnum.SORPRENDIDO,
    pathGuia: require('./../../../assets/ilustraciones/sorpresa/instructivo/guia-sorpresa.png'),
    pathReal: require('./../../../assets/ilustraciones/sorpresa/instructivo/guia-real.png'),
  },
  [emocionesEnum.ENOJADO]: {
    color: '#FC4D4A',
    name: emocionesEnum.ENOJADO,
    pathGuia: require('./../../../assets/ilustraciones/enojado/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/enojado/guiaFelizCopy.png'),
  },
  [emocionesEnum.NEUTRAL]: {
    color: '#88EA5A',
    name: emocionesEnum.NEUTRAL,
    pathGuia: require('./../../../assets/ilustraciones/enamorado/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/enamorado/guiaFelizCopy.png'),
  },
};
