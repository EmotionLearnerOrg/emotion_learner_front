import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeSelectorGameSectionStyles } from './SelectorGameSection.style';
import Card from './Card/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-magnus';

const SelectorGameSection = ({
  goToMirror,
  goToAsociation,
  goToRuleta,
  goToArcade
}: {
  goToMirror: () => void;
  goToRuleta: () => void;
  goToAsociation: () => void;
  goToArcade: () => void;
}) => {
  const style = makeSelectorGameSectionStyles();

  return (
    <View style={style.selectorGameContainer}>
      <View style={style.titleContainer}>
        <Text style={{color: 'black', fontWeight: '700', fontSize: 16}}>
          ¡Elegí un Juego!
        </Text>
      </View>
      <View style={style.gamesGrid}>
        <View style={style.leftSection}>
          <TouchableOpacity
            style={style.contFull}
            activeOpacity={0.4}
            onPress={goToMirror}>
            <Card
              style={style.contFull}
              color={'#AFECFE'}
              text={'Espejo Inteligente'}
              icon={<Icon name="mirror" size={34} />}
            />
          </TouchableOpacity>
        </View>
        <View style={style.rigthSection}>
          <TouchableOpacity
            style={style.contHalf}
            activeOpacity={0.4}
            onPress={goToRuleta}>
            <Card
              style={style.contFull}
              color={'#BEAFFE'}
              text={'Ruleta'}
              icon={<Icon name="emoticon-tongue-outline" size={34} />}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.contHalf}
            activeOpacity={0.4}
            onPress={goToAsociation}>
            <Card
              style={style.contFull}
              color={'#FFD6AD'}
              text={'Asociación de Emociones'}
              icon={<Icon name="emoticon-tongue-outline" size={34} />}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.contHalf}
            activeOpacity={0.4}
            onPress={goToArcade}>
            <Card
              style={style.contFull}
              color={'#FEAFB0'}
              text={'Modo Arcade'}
              icon={<Icon name="emoticon-tongue-outline" size={34} />}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectorGameSection;
