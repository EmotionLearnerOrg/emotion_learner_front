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
      <Text fontWeight="bold" fontSize={20} textAlign="center" mt={20}>
        {title}
      </Text>
      <Text fontWeight="400" fontSize={20} textAlign="center" mt={20}>
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
        ) : type === 'Asociacion' || type === 'Arcade' ? (
          <Image
            source={require('./../../../assets/ilustraciones/again.png')}
            style={{alignSelf: 'center', flex: 0.45, resizeMode: 'contain'}}
          />
        ) : (
          <></>
        )}
      </View>
      <Button
        alignSelf="center"
        bg="#FCCDCE"
        mx={10}
        mb={30}
        rounded={16}
        style={style.button}
        onPress={() => goTo && goTo()}>
        <Text style={style.buttonText}>
          {textButton ?? success
            ? 'Acceder a mis insignias'
            : 'Volver a intentar'}
        </Text>
      </Button>
    </View>
  );
};

export default FeedbackView;
