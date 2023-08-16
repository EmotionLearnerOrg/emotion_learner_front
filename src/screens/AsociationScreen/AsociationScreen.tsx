import React, {FC, useCallback, useState} from 'react';
import {Image, View} from 'react-native';
import {makeAsociationScreenStyles} from './AsociationScreen.style';
import {Text} from 'react-native-magnus';
import {HomeRoutes, AsociationType} from '../../stacks/HomeParams';
import {emocionType, emociones} from '../../components';
import {useUserData} from '../../contexts';
import {insigniasEnum} from '../../types';
import {useFocusEffect} from '@react-navigation/native';
import OptionItem from './OptionItem';

const AsociationScreen: FC<AsociationType> = ({navigation}) => {
  const style = makeAsociationScreenStyles();
  const emotions = Object.values(emociones);
  const [answers, setAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [optionsState, setOptions] = useState<any>();
  const [indicesRandomsOpciones, setIndicesRandomsOpciones] = useState<any>();
  const [usadas, setUsadas] = useState<number[]>([]);
  const {updateInsignias} = useUserData();

  const generateRandom = useCallback(
    ({
      min,
      max,
      exception1 = -10000,
      exception2 = -10000,
    }: {
      min: number;
      max: number;
      exception1?: number;
      exception2?: number;
    }): number => {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num === exception1 || num === exception2
        ? generateRandom({min, max, exception1, exception2})
        : num;
    },
    [],
  );
  const generateRandomFirst = useCallback((): number => {
    const resultado = [0, 1, 2, 3, 4].filter(item => !usadas.includes(item));

    const indiceAleatorio = Math.floor(Math.random() * resultado.length);
    return resultado[indiceAleatorio];
  }, [usadas]);

  const generateIndicesYOptionsRandomsEmociones = useCallback(() => {
    const randEmotion1 = generateRandomFirst();
    const nuevoArray = [...usadas, randEmotion1];
    const randEmotion2 = generateRandom({
      min: 0,
      max: 4,
      exception1: randEmotion1,
    });
    const randEmotion3 = generateRandom({
      min: 0,
      max: 4,
      exception1: randEmotion1,
      exception2: randEmotion2,
    });
    const randOption1 = generateRandom({min: 0, max: 2});
    const randOption2 = generateRandom({
      min: 0,
      max: 2,
      exception1: randOption1,
    });
    const randOption3 = generateRandom({
      min: 0,
      max: 2,
      exception1: randOption1,
      exception2: randOption2,
    });
    setIndicesRandomsOpciones([randOption1, randOption2, randOption3]);
    setOptions([
      emotions[randEmotion1],
      emotions[randEmotion2],
      emotions[randEmotion3],
    ]);
    setUsadas(nuevoArray);
  }, [emotions, generateRandom, generateRandomFirst, usadas]);

  useFocusEffect(
    React.useCallback(() => {
      setAnswers(0);
      setCorrectAnswers(0);
      generateIndicesYOptionsRandomsEmociones();
    }, []),
  );

  const reload = (emotionSelected: emocionType) => {
    let respuestasCorrectas = correctAnswers;
    let respuestas = answers + 1;
    if (emotionSelected.name === optionsState[0].name) {
      respuestasCorrectas++;
      setCorrectAnswers(correctAnswers + 1);
    }
    if (respuestas === 5) {
      if (respuestasCorrectas >= 3) {
        updateInsignias({
          idInsignia: 'Asociacion' as unknown as insigniasEnum,
        });
        navigation.navigate(HomeRoutes.FEEDBACK_POS_ASO, {
          type: 'Asociacion',
          aciertos: respuestasCorrectas,
        });
      } else {
        navigation.navigate(HomeRoutes.FEEDBACK_NEG_ASO, {
          emotion: emotionSelected,
          type: 'Asociacion',
          aciertos: respuestasCorrectas,
        });
      }
    } else {
      generateIndicesYOptionsRandomsEmociones();
    }
    setAnswers(answers + 1);
  };

  return (
    <View style={style.containerView}>
      {!!optionsState && !!indicesRandomsOpciones && (
        <>
          <Image
            source={optionsState[0].pathMonstruo}
            style={style.OptionImageStyle}
          />
          <Text fontSize={18} textAlign="center" flex={1}>
            {`¿Cual de estos personajes refleja ${optionsState[0].name}?`}
          </Text>
          <View style={style.containerOptions}>
            <OptionItem
              onPress={() => reload(optionsState[indicesRandomsOpciones[0]])}
              source={optionsState[indicesRandomsOpciones[0]].pathOpciones}
            />
            <OptionItem
              onPress={() => reload(optionsState[indicesRandomsOpciones[1]])}
              source={optionsState[indicesRandomsOpciones[1]].pathOpciones}
            />
            <OptionItem
              onPress={() => reload(optionsState[indicesRandomsOpciones[2]])}
              source={optionsState[indicesRandomsOpciones[2]].pathOpciones}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default AsociationScreen;
