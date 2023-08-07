import React from 'react';
import {Image, View} from 'react-native';
import {makeFeedbackViewStyles} from './FeedbackView.style';
import {Button, Text} from 'react-native-magnus';
import {emocionType} from '..';
import {InsigniaPorCategoria} from '../../screens/InsigniasScreen/InsigniasScreen';

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
  emotion: emocionType;
  goTo?: () => void;
  type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
  success: boolean;
}) => {
  const style = makeFeedbackViewStyles();

  return (
    <View style={style.containerView}>
      <Text fontSize={18} textAlign="center" mt={20}>
        {title ?? success
          ? 'Felicitaciones'
          : `No pudimos reconocer la expresión ${emotion.name}, probá nuevamente!`}
      </Text>
      <Text fontSize={18} textAlign="center" mt={20}>
        {description ?? success
          ? `Hiciste la emoción ${emotion.name} correctamente y te ganaste una medalla:`
          : 'Sugerencias:'}
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        {success ? (
          InsigniaPorCategoria({
            category: 'Mirror',
            item: [type + '_' + emotion.name, true],
            height: 200,
            width: 200,
          })
        ) : (
          <Image
            source={emotion.pathGuia}
            style={{alignSelf: 'center', flex: 1, resizeMode: 'contain'}}
          />
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
