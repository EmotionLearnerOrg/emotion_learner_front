import React from 'react';
import {Image, View} from 'react-native';
import {makeFeedbackViewStyles} from './FeedbackView.style';
import {Button, Text} from 'react-native-magnus';
import {InsigniaPorCategoria} from '../../screens/InsigniasScreen/InsigniasScreen';
import {emocionType} from '../RuletaContainer';

const FeedbackView = ({
  title,
  description,
  textButton,
  emotion,
  goTo,
  type,
  success,
}: {
  title?: string;
  description?: string;
  textButton?: string;
  emotion?: emocionType;
  goTo?: () => void;
  type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
  success: boolean;
}) => {
  const style = makeFeedbackViewStyles();

  return (
    <View style={style.containerView}>
      <Text fontSize={32} textAlign="center" mt={20}>
        {title}
      </Text>
      <Text fontSize={24} textAlign="center" mt={20}>
        {description}
      </Text>
      <View style={style.containerImage}>
        {success ? (
          InsigniaPorCategoria({
            category: type,
            item: [type + `${emotion ? '_' + emotion.name : ''}`, true],
            height: 200,
            width: 200,
          })
        ) : type === 'Ruleta' || type === 'Mirror' ? (
          <Image source={emotion?.pathGuia} style={style.image} />
        ) : (
          <></>
        )}
      </View>
      <View style={style.buttonContainer}>
        <Button onPress={() => goTo && goTo()}>
          {textButton ?? success ? 'Menu Principal' : 'Volver a intentar'}
        </Button>
      </View>
    </View>
  );
};

export default FeedbackView;
