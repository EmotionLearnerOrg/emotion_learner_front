export enum emocionesEnum {
  FELIZ = 'feliz',
  PAZ = 'paz',
  TRISTE = 'triste',
  ENOJADO = 'enojado',
  MEDITANDO = 'meditando',
  ENAMORADO = 'enamorado',
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
  [emocionesEnum.PAZ]: {
    color: '#60E743',
    name: emocionesEnum.PAZ,
    pathGuia: require('./../../../assets/ilustraciones/paz/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/paz/guiaFelizCopy.png'),
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
  [emocionesEnum.MEDITANDO]: {
    color: '#46A5FF',
    name: emocionesEnum.MEDITANDO,
    pathGuia: require('./../../../assets/ilustraciones/meditando/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/meditando/guiaFelizCopy.png'),
  },
  [emocionesEnum.ENAMORADO]: {
    color: '#FF73FF',
    name: emocionesEnum.ENAMORADO,
    pathGuia: require('./../../../assets/ilustraciones/enamorado/guiaFelizCopy.png'),
    pathReal: require('./../../../assets/ilustraciones/enamorado/guiaFelizCopy.png'),
  },
};
