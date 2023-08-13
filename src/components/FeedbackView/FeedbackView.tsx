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
      <Text fontWeight="700" fontSize={20} textAlign="center" mt={20}>
        {title ?? success
          ? '¡Felicitaciones!'
          : `No pudimos reconocer la expresión ${emotion.displayname.toLocaleLowerCase()}, probá nuevamente`}
      </Text>
      <Text fontWeight="400" fontSize={18} textAlign="center" mt={25}>
        {success
          ? 'Excelente trabajo, ganaste una medalla'
          : `Sigue las siguientes sugerencias para realizar la expresión ${emotion.displayname.toLocaleLowerCase()}`}
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
      <Button
        alignSelf="center"
        bg="#FCCDCE"
        mx={10}
        mb={10}
        rounded={16}
        style={style.button}
        onPress={() => goTo && goTo()}>
        <Text style={style.buttonText}> {textButton ?? success ? 'Acceder a mis insignias' : 'Volver a intentar'}</Text>
      </Button>
    </View>
  );
};

export default FeedbackView;
