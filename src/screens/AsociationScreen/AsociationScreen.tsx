import React, {FC, useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
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
  const {updateInsignias} = useUserData();
  const [isLoading, setIsLoading] = useState(true);

  const [group3Emotions, setGroup3Emotions] = useState<any[]>();
  //grupo de 3 emociones donde se preguntara por la primera (0) para matchear imagen con respuesta opcion correcta
  const [indicesRandomsOpciones, setIndicesRandomsOpciones] = useState<any>();
  //indica el orden en que las opciones de emociones van a aparecer
  const [used, setUsed] = useState<number[]>([]);
  //usado para guardar y no repetir emociones en asociacion normal,tambien usado para no repetir opcion correcta de la emocion arcade
  const [indicesDeOpcionesUsadas, setIndicesDeOpcionesUsadas] = useState<
    number[]
  >([]);
  //usado para guardar y no repetir opciones usadas
  // const [optionRandom, setOptionRandom] = useState<number>();
  // //usado para saber cual opcion de manera random mostrar como correcta en asociacion

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

  const generateRandomOpcionYGuardarEnUsadas = useCallback(() => {
    const resultado = [0, 1, 2, 3, 4].filter(
      item => !indicesDeOpcionesUsadas.includes(item),
    );

    const indiceAleatorio = Math.floor(Math.random() * resultado.length);

    const arrayDeOpcionesUsadas = [
      ...indicesDeOpcionesUsadas,
      resultado[indiceAleatorio],
    ];
    setIndicesDeOpcionesUsadas(arrayDeOpcionesUsadas);
  }, [indicesDeOpcionesUsadas]);

  const generateRandomFirst = useCallback((): number => {
    const resultado = [0, 1, 2, 3, 4].filter(item => !used.includes(item));

    const indiceAleatorio = Math.floor(Math.random() * resultado.length);
    return resultado[indiceAleatorio];
  }, [used]);

  const generateIndicesYOptionsRandomsEmocionesMerge = useCallback(() => {
    const esArcade = type === 'Arcade';
    generateRandomOpcionYGuardarEnUsadas();
    // if (esArcade) {
    //   const randomOptionArcade = generateRandomFirst();
    //   // setOptionRandom(randomOptionArcade);
    // }
    const randomEmotion1 = esArcade
      ? emotions.findIndex(
          emocion => emocion.displayname === emotion?.displayname,
        )
      : generateRandomFirst();
    const arrayToCheck = [...used, randomEmotion1];
    const randomEmotion2 = generateRandom({
      min: 0,
      max: 4,
      exception1: randomEmotion1,
    });
    const randomEmotion3 = generateRandom({
      min: 0,
      max: 4,
      exception1: randomEmotion1,
      exception2: randomEmotion2,
    });
    const randomOption1 = generateRandom({min: 0, max: 2});
    const randomOption2 = generateRandom({
      min: 0,
      max: 2,
      exception1: randomOption1,
    });
    const randomOption3 = generateRandom({
      min: 0,
      max: 2,
      exception1: randomOption1,
      exception2: randomOption2,
    });
    setIndicesRandomsOpciones([randomOption1, randomOption2, randomOption3]);
    setGroup3Emotions([
      emotions[randomEmotion1],
      emotions[randomEmotion2],
      emotions[randomEmotion3],
    ]);
    setUsed(arrayToCheck);
  }, [
    emotion?.displayname,
    emotions,
    generateRandom,
    generateRandomFirst,
    generateRandomOpcionYGuardarEnUsadas,
    type,
    used,
  ]);

  useFocusEffect(
    React.useCallback(() => {
      setAnswers(0);
      setCorrectAnswers(0);
      generateIndicesYOptionsRandomsEmocionesMerge();
    }, []),
  );

  if (isLoading && type === 'Arcade') {
    return (
      <View style={{flex: 1, padding: 10}}>
        <Text fontSize={30} textAlign="center" mt={20}>
          Buen trabajo! ganaste la partida de Ruleta... Ahora continuaremos
          jugando con Asociación de emociones
        </Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const seleccionarOpcion = (emotionSelected: emocionType) => {
    let respuestasCorrectas = correctAnswers;
    let respuestas = answers + 1;
    if (emotionSelected.name === group3Emotions[0].name) {
      respuestasCorrectas++;
      setCorrectAnswers(correctAnswers + 1);
    }
    if (respuestas === 5) {
      //TODO: Estaria bueno dividir esta funcion o encapsularlo en un metodo para cuando sea de tipo "Arcade"
      //quede mas simple de entender y modificar en caso de necesitarlo.
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
      } else if (respuestasCorrectas >= 3) {
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
    } else {
      generateIndicesYOptionsRandomsEmocionesMerge();
    }

    setAnswers(answers + 1);
  };

  return (
    <View style={style.containerView}>
      {!!group3Emotions && !!indicesRandomsOpciones && (
        <>
          <Image
            source={group3Emotions[0].pathMonstruo}
            style={style.OptionImageStyle}
          />
          <Text fontSize={18} textAlign="center" flex={1}>
            {`¿Cual de estos personajes refleja ${group3Emotions[0].name}?`}
          </Text>
          <View style={style.containerOptions}>
            <OptionItem
              onPress={() =>
                seleccionarOpcion(group3Emotions[indicesRandomsOpciones[0]])
              }
              source={
                group3Emotions[indicesRandomsOpciones[0]].pathOpciones[
                  indicesDeOpcionesUsadas[indicesDeOpcionesUsadas.length - 1]
                ]
              }
              texto={group3Emotions[indicesRandomsOpciones[0]].displayname}
            />
            <OptionItem
              onPress={() =>
                seleccionarOpcion(group3Emotions[indicesRandomsOpciones[1]])
              }
              source={
                group3Emotions[indicesRandomsOpciones[1]].pathOpciones[
                  indicesDeOpcionesUsadas[indicesDeOpcionesUsadas.length - 1]
                ]
              }
              texto={group3Emotions[indicesRandomsOpciones[1]].displayname}
            />
            <OptionItem
              onPress={() =>
                seleccionarOpcion(group3Emotions[indicesRandomsOpciones[2]])
              }
              source={
                group3Emotions[indicesRandomsOpciones[2]].pathOpciones[
                  indicesDeOpcionesUsadas[indicesDeOpcionesUsadas.length - 1]
                ]
              }
              texto={group3Emotions[indicesRandomsOpciones[2]].displayname}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default AsociationScreen;
