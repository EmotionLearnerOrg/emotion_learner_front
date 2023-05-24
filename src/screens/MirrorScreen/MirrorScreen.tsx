import React from 'react';
import {View} from 'react-native';
import {makeMirrorScreenStyles} from './MirrorScreen.style';
import {Button, Text} from 'react-native-magnus';

const MirrorScreen = () => {
  const style = makeMirrorScreenStyles();
  return (
    <View style={style.containerView}>
      <Text fontSize={32}>Espejo inteligente</Text>
      <Text fontSize={16} textAlign="center" style={{marginTop: 20}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit.
      </Text>

      <View style={style.calendarCardContainer}>
        <View>
          <Text fontWeight="700" fontSize={16}>
            Elegi una emocion
          </Text>
        </View>
        <View style={style.cardContainer}>
          <View style={{flexDirection: 'row', gap: 16}}>
            <Button
              mb={4}
              rounded={8}
              style={style.buttonEmotion}
              bg="#ceecdb"
              color="#524b6b">
              Felicidad/Alegria
            </Button>
            <Button
              mb={4}
              rounded={8}
              style={style.buttonEmotion}
              bg="#fcd0d2"
              color="#524b6b">
              Enojo
            </Button>
          </View>
          <View style={{flexDirection: 'row', gap: 16}}>
            <Button
              mb={4}
              rounded={8}
              style={style.buttonEmotion}
              bg="#e5e6fe"
              color="#524b6b">
              Sorpresa
            </Button>
            <Button
              mb={4}
              rounded={8}
              style={style.buttonEmotion}
              bg="#f3f1f4"
              color="#524b6b">
              Tristeza
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MirrorScreen;
