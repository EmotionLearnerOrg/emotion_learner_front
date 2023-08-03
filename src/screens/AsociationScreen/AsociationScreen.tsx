import React, {FC} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {makeAsociationScreenStyles} from './AsociationScreen.style';
import {Text} from 'react-native-magnus';
import {HomeRoutes, AsociationType} from '../../stacks/HomeParams';
import {emociones} from '../../components/RuletaContainer/emociones';

const AsociationScreen: FC<AsociationType> = ({navigation}) => {
  const style = makeAsociationScreenStyles();
  const emotions = Object.values(emociones);
  //declaro indices randoms para emociones
  var randEmotion1 = generateRandom(0, 4);
  var randEmotion2 = generateRandom(0, 4, randEmotion1);
  var randEmotion3 = generateRandom(0, 4, randEmotion1, randEmotion2);
  //declaro indices randoms para orden de opciones
  var randOption1 = generateRandom(0, 2);
  var randOption2 = generateRandom(0, 2, randOption1);
  var randOption3 = generateRandom(0, 2, randOption1, randOption2);

  var options = [
    emotions[randEmotion1],
    emotions[randEmotion2],
    emotions[randEmotion3]
  ];

  var respuestas = 0;
  var correctas = 0;

  function generateRandom(min, max, exeption1 = -10000, exeption2 = -10000):number {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === exeption1 || num === exeption2) ? generateRandom(min, max, exeption1, exeption2) : num;
  }

  function reload(emotionSelected) {
    respuestas++;
    if (emotionSelected.name === emotions[randEmotion1].name) {
      correctas++;
      console.log("Opcion correcta " + emotionSelected.name + " respuestas: " + respuestas + " correctas: " + correctas);
    }
    if (respuestas == 5) {
      if (correctas >= 3) {
        navigation.navigate(HomeRoutes.FEEDBACK_POS, {
          emotion: emotionSelected,
          type: 'asociacion'
        })
      } else {
        navigation.navigate(HomeRoutes.FEEDBACK_NEG, {
          emotion: emotionSelected,
          type: 'asociacion'
        });
      }
    }
  }

  return (
    <View style={[style.containerView, {flexDirection: 'column', alignItems:'center'}]}>
      <Image source={emotions[randEmotion1].pathMonstruo} style={{ width: 120, resizeMode: 'contain', flex: 1}} />

      <Text fontSize={18} textAlign="center" style={{flex:1}}>
        ¿Cual de estos personajes está {emotions[randEmotion1].name}?
      </Text>

      <View style={{flex: 1, flexDirection: 'row', alignItems:'flex-start', justifyContent : 'space-evenly'}}>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload(options[randOption1])}>
            <Image 
              source={options[randOption1].pathOpciones}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload(options[randOption2])}>
            <Image 
              source={options[randOption2].pathOpciones}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload(options[randOption3])}>
            <Image 
              source={options[randOption3].pathOpciones}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AsociationScreen;
