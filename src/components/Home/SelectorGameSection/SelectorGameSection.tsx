import React from 'react';
import {View} from 'react-native';
import {makeSelectorGameStyles} from './SelectorGameSection.style';
import Card from './Card/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native-magnus';

const SelectorGameSection = () => {
  const style = makeSelectorGameStyles();

  return (
    <View style={style.selectorGameContainer}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text fontWeight="700" fontSize={16}>
          Elige un juego
        </Text>
      </View>
      <View style={style.gamesGrid}>
        <View style={{flex: 0.5}}>
          <Card
            style={{flex: 1}}
            color={'#AFECFE'}
            text={'Mirror'}
            icon={<Icon name="mirror" size={34} />}
          />
        </View>
        <View style={{flex: 0.5, gap: 10}}>
          <Card
            style={{flex: 0.5}}
            color={'#BEAFFE'}
            text={'Ruleta'}
            icon={<Icon name="emoticon-tongue-outline" size={34} />}
          />
          <Card
            style={{flex: 0.5}}
            color={'#FFD6AD'}
            text={'Asociacion'}
            icon={<Icon name="emoticon-tongue-outline" size={34} />}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectorGameSection;
