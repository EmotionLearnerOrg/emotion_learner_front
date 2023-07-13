import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import {Ruleta} from './Ruleta';
import {Knop} from '../../../assets';
import {EmocionesTypeNames, emocionType, emociones} from './emociones';
import {Button} from 'react-native-magnus';
import {Dialog} from '@rneui/themed';
import {makeRuletaContainerStyle} from './RuletaContainer.style';

const RuletaContainer = ({
  divisions,
  goToPerformEmotion,
}: {
  divisions: number;
  goToPerformEmotion: (item: emocionType) => void;
}) => {
  const style = makeRuletaContainerStyle();
  const [emocion, setEmocion] = useState<emocionType>();
  const [visible, setVisible] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;
  const inputRangeDin: number[] = [];
  const outputRangeDin: string[] = [];
  const degForDivition = 360 / divisions;
  for (let index = 0; index < divisions; index++) {
    inputRangeDin.push(index);
    outputRangeDin.push(`-${degForDivition * index}deg`);
  }
  outputRangeDin[0] = '-360deg'; //es para que si toca 0, des una vuelta y no te quedes quieto

  const spinnear = ({fin}: {fin: number}) => {
    Animated.timing(spinValue, {
      toValue: 5 * 2, // 2 vueltas completas
      duration: 3000, // tarda 3000 milisegundos
      useNativeDriver: true, // Utilizar el controlador nativo para obtener un mejor rendimiento
    }).start(() => {
      Animated.timing(spinValue, {
        toValue: fin, //indica a cual posicion ir ( la ganadora )
        duration: 1500,
        easing: Easing.bezier(0.25, 1, 0.25, 0.5), // Curva de aceleración
        useNativeDriver: true,
      }).start(() => {
        setIsSpinning(false);
        setEmocion(
          emociones[Object.keys(emociones)[fin] as EmocionesTypeNames],
        );
        setVisible(true);
      });
    });
  };

  const startSpin = () => {
    if (isSpinning) {
      return;
    }
    setIsSpinning(true);
    const random = Math.floor(Math.random() * (divisions - 1 - 0 + 1) + 0);
    spinnear({fin: random});
  };

  const spin = spinValue.interpolate({
    inputRange: inputRangeDin,
    outputRange: outputRangeDin,
  });

  return (
    <View style={style.container}>
      <Animated.View style={[style.wheel, {transform: [{rotate: spin}]}]}>
        <Ruleta radius={130} />
      </Animated.View>
      <Knop style={style.knop} width={70} height={70} />
      <TouchableOpacity style={style.button} onPress={startSpin}>
        <Text style={style.buttonText}>
          {isSpinning ? 'Girando...' : 'Girar'}
        </Text>
      </TouchableOpacity>
      <Dialog isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <Dialog.Title
          titleStyle={style.dialogTitle}
          title={`Emocion ganadora : ${emocion?.name}!`}
        />
        <Button
          block
          m={10}
          onPress={() => {
            setVisible(false);
            goToPerformEmotion(emocion!);
          }}>
          Realizar emocion
        </Button>
      </Dialog>
    </View>
  );
};

export default RuletaContainer;
