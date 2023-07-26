import React, {FC} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {makeAsociationScreenStyles} from './AsociationScreen.style';
import {Button, Text} from 'react-native-magnus';
import {HomeRoutes, AsociationType} from '../../stacks/HomeParams';
import {emocionType, emociones} from '../../components/Ruleta/emociones';

const AsociationScreen: FC<AsociationType> = ({navigation}) => {
  const emotions = Object.values(emociones);
  var RandomNumber = Math.floor(Math.random() * 5) ;
  const style = makeAsociationScreenStyles();

  function reload() {
    RandomNumber = Math.floor(Math.random() * 5) ;
    console.log(RandomNumber);
    navigation.navigate(HomeRoutes.ASOCIATION)
  }

  return (
    <View style={[style.containerView, {flexDirection: 'column', alignItems:'center'}]}>
      <Image source={emotions[RandomNumber].pathMonstruo} style={{ width: 120, resizeMode: 'contain', flex: 1}} />

      <Text fontSize={18} textAlign="center" style={{flex:1}}>
        ¿Cual de estos personajes está {emotions[RandomNumber].name}?
      </Text>

      <View style={{flex: 1, flexDirection: 'row', alignItems:'flex-start', justifyContent : 'space-evenly'}}>
        
        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload()}>
            <Image 
              source={require('./../../../assets/ilustraciones/opciones/1.png')}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => navigation.navigate(HomeRoutes.ASOCIATION)}>
            <Image 
              source={require('./../../../assets/ilustraciones/opciones/2.png')}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => navigation.navigate(HomeRoutes.ASOCIATION)}>
            <Image 
              source={require('./../../../assets/ilustraciones/opciones/3.png')}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AsociationScreen;
