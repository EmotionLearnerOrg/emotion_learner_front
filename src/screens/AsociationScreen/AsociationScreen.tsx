import React, {FC} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {makeAsociationScreenStyles} from './AsociationScreen.style';
import {Button, Text} from 'react-native-magnus';
import {HomeRoutes, AsociationType} from '../../stacks/HomeParams';
import {emocionType, emociones} from '../../components/RuletaContainer/emociones';

const AsociationScreen: FC<AsociationType> = ({navigation}) => {
  const emotions = Object.values(emociones);
  var RandomNumber1 = Math.floor(Math.random() * 5) ;
  var RandomNumber2 = Math.floor(Math.random() * 5) ;
  var RandomNumber3 = Math.floor(Math.random() * 5) ;
  const style = makeAsociationScreenStyles();

  const opcion1 = getOptionImage(RandomNumber1);
  const opcion2 = getOptionImage(RandomNumber2);
  const opcion3 = getOptionImage(RandomNumber3);

  function reload() {
    navigation.navigate(HomeRoutes.ASOCIATION)
  }

  function getOptionImage(id) {
    if (id==0) {
      return require('./../../../assets/ilustraciones/feliz/opciones/1.png');
    }
    if (id==1) {
      return require('./../../../assets/ilustraciones/triste/opciones/1.png');
    }
    if (id==2) {
      return require('./../../../assets/ilustraciones/sorpresa/opciones/1.png');
    }
    if (id==3) {
      return require('./../../../assets/ilustraciones/enojado/opciones/1.png');
    }
    if (id==4) {
      return require('./../../../assets/ilustraciones/neutral/opciones/1.png');
    }
    return "";
  }

  return (
    <View style={[style.containerView, {flexDirection: 'column', alignItems:'center'}]}>
      <Image source={emotions[RandomNumber1].pathMonstruo} style={{ width: 120, resizeMode: 'contain', flex: 1}} />

      <Text fontSize={18} textAlign="center" style={{flex:1}}>
        ¿Cual de estos personajes está {emotions[RandomNumber1].name}?
      </Text>

      <View style={{flex: 1, flexDirection: 'row', alignItems:'flex-start', justifyContent : 'space-evenly'}}>
        
        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload()}>
            <Image 
              source={opcion1}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload()}>
            <Image 
              source={opcion2}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity style={{flex: 1}} activeOpacity={0.5} onPress={() => reload()}>
            <Image 
              source={opcion3}
              style={style.OptionImageStyle}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AsociationScreen;
