import React, {FC, useCallback, useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {makeAsociationScreenStyles} from './AsociationScreen.style';
import {Text} from 'react-native-magnus';
import {HomeRoutes, AsociationType} from '../../stacks/HomeParams';
import {emocionType, emociones} from '../../components';
import {useUserData} from '../../contexts';
import {insigniasEnum} from '../../types';
import {useFocusEffect} from '@react-navigation/native';
import OptionItem from './OptionItem';

const AsociationScreen: FC<AsociationType> = ({route, navigation}) => {
  const {type, emotion} = route.params;
  const style = makeAsociationScreenStyles();
  const emotions = Object.values(emociones);
  const [answers, setAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [optionsState, setOptions] = useState<any>();
  const [indicesRandomsOpciones, setIndicesRandomsOpciones] = useState<any>();
  const [usadas, setUsadas] = useState<number[]>([]);
  const [optionRandom, setOptionRandom] = useState<number>();
  const {updateInsignias} = useUserData();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // Simulación de 2 segundos de carga
  }, []);

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

  const generateIndicesYOptionsRandomsEmocionesArcade = useCallback(() => {
    const randArcade = generateRandomFirst();
    setOptionRandom(randArcade);
    const nuevoArrayArcade = [...usadas, randArcade];
    const randEmotion1 = emotions.findIndex(
      emocion => emocion.displayname === emotion?.displayname,
    );
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
    setUsadas(nuevoArrayArcade);
  }, [emotions, generateRandom, generateRandomFirst, usadas]);

  const generateIndicesYOptionsRandomsEmociones = useCallback(() => {
    console.log('emocion', emotion);

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
      if (type === 'Arcade') {
        generateIndicesYOptionsRandomsEmocionesArcade();
      } else {
        generateIndicesYOptionsRandomsEmociones();
      }
    }, []),
  );

  if (isLoading && type === 'Arcade') {
    return <Text>cargando</Text>;
  }

  const reload = (emotionSelected: emocionType) => {
    let respuestasCorrectas = correctAnswers;
    let respuestas = answers + 1;
    if (emotionSelected.name === optionsState[0].name) {
      respuestasCorrectas++;
      setCorrectAnswers(correctAnswers + 1);
    }
    if (respuestas === 5) {
      //TODO: Estaria bueno dividir esta funcion o encapsularlo en un metodo para cuando sea de tipo "Arcade" quede mas simple de entender y modificar en caso de necesitarlo.
      if (type === 'Arcade') {
        if (respuestasCorrectas >= 3) {
          let idInsignia = `${type}_${route.params.emotion?.name}`;
          updateInsignias({
            idInsignia: idInsignia as unknown as insigniasEnum,
          });
          navigation.navigate(HomeRoutes.FEEDBACK_POS_ARCADE, {
            emotion: route.params.emotion,
            type: type,
          });
        } else {
          navigation.navigate(HomeRoutes.FEEDBACK_NEG_ARCADE, {
            emotion: emotionSelected,
            type: type,
          });
        }
      } else {
        if (respuestasCorrectas >= 3) {
          updateInsignias({
            idInsignia: 'Asociacion' as unknown as insigniasEnum,
          });

          navigation.navigate(HomeRoutes.FEEDBACK_POS_ASO, {
            type: type,
            aciertos: respuestasCorrectas,
          });
        } else {
          navigation.navigate(HomeRoutes.FEEDBACK_NEG_ASO, {
            emotion: emotionSelected,
            type: type,
            aciertos: respuestasCorrectas,
          });
        }
      }
    } else {
      if (type === 'Arcade') {
        generateIndicesYOptionsRandomsEmocionesArcade();
      } else {
        generateIndicesYOptionsRandomsEmociones();
      }
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
            {optionRandom}
          </Text>
          <View style={style.containerOptions}>
            <OptionItem
              onPress={() => reload(optionsState[indicesRandomsOpciones[0]])}
              source={
                optionsState[indicesRandomsOpciones[0]].pathOpciones[
                  optionRandom || 0
                ]
              }
            />
            <OptionItem
              onPress={() => reload(optionsState[indicesRandomsOpciones[1]])}
              source={
                optionsState[indicesRandomsOpciones[1]].pathOpciones[
                  optionRandom ?? 0
                ]
              }
            />
            <OptionItem
              onPress={() => reload(optionsState[indicesRandomsOpciones[2]])}
              source={
                optionsState[indicesRandomsOpciones[2]].pathOpciones[
                  optionRandom ?? 0
                ]
              }
            />
          </View>
        </>
      )}
    </View>
  );
};

export default AsociationScreen;
