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
  var randomNum1 = generateRandom(0, 4);
  var randomNum2 = generateRandom(0, 4, randomNum1);
  var randomNum3 = generateRandom(0, 4, randomNum1, randomNum2);
  //declaro indices randoms para orden de opciones
  var randomNum4 = generateRandom(0, 2);
  var randomNum5 = generateRandom(0, 2, randomNum4);
  var randomNum6 = generateRandom(0, 2, randomNum4, randomNum5);

  var imgsOpciones = [
    emotions[randomNum1].pathOpciones,
    emotions[randomNum2].pathOpciones,
    emotions[randomNum3].pathOpciones
  ];

  function generateRandom(min, max, exeption1 = -10000, exeption2 = -10000):number {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (num === exeption1 || num === exeption2) ? generateRandom(min, max, exeption1, exeption2) : num;
  }

  function reload() {
    navigation.navigate(HomeRoutes.ASOCIATION)
  }

  return (
    <View style={[style.containerView, {flexDirection: 'column', alignItems:'center'}]}>
      <Image source={emotions[randomNum1].pathMonstruo} style={{ width: 120, resizeMode: 'contain', flex: 1}} />

      <Text fontSize={18} textAlign="center" style={{flex:1}}>
        ¿Cual de estos personajes está {emotions[randomNum1].name}?
      </Text>

      <View style={{flex: 1, flexDirection: 'row', alignItems:'flex-start', justifyContent : 'space-evenly'}}>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload()}>
            <Image 
              source={imgsOpciones[randomNum4]}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload()}>
            <Image 
              source={imgsOpciones[randomNum5]}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload()}>
            <Image 
              source={imgsOpciones[randomNum6]}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AsociationScreen;
