import React from 'react';
import {View} from 'react-native';
import {makeInsigniasAccessSectionStyles} from './InsigniasAccessSection.style';
import {Button, Text} from 'react-native-magnus';

const InsigniasAccessSection = ({
  goToInsignias,
}: {
  goToInsignias: () => void;
}) => {
  const style = makeInsigniasAccessSectionStyles();

  return (
    <View style={style.insigniasContainer}>
      <View>
        <Text fontWeight="700" fontSize={16}>
          Insignias ganadas
        </Text>
      </View>
      <Button
        rounded={8}
        bg="#F5CACC"
        color="#524b6b"
        style={style.button}
        onPress={goToInsignias}>
        Acceder a Mis Insignias
      </Button>
    </View>
  );
};

export default InsigniasAccessSection;
