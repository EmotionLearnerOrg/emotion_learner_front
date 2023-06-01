import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';
import DividedCircle from './DividedCircle';

const Ruleta = ({divisions}: {divisions: number}) => {
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
        console.log('giramos ', outputRangeDin[fin], 'gano', fin);
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
    <View style={styles.container}>
      <Animated.View style={[styles.wheel, {transform: [{rotate: spin}]}]}>
        <DividedCircle divisions={divisions} radius={130} />
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={startSpin}>
        <Text style={styles.buttonText}>
          {isSpinning ? 'Girando...' : 'Girar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheel: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Ruleta;
