import React from 'react';
import { View } from 'react-native';
import { makeInsigniasAccessSectionStyles } from './InsigniasAccessSection.style';
import { Button, Text } from 'react-native-magnus';

const InsigniasAccessSection = ({
  goToInsignias,
}: {
  goToInsignias: () => void;
}) => {
  const style = makeInsigniasAccessSectionStyles();

  return (
    <View style={style.insigniasContainer}>
      <View>
        <Text color='#150B3D' fontWeight="700" fontSize={16}>
          Insignias ganadas
        </Text>
      </View>
      <Button
        alignSelf="center"
        bg="#FCCDCE"
        mt={15}
        rounded={16}
        style={style.button}
        onPress={goToInsignias}>
        <Text style={style.buttonText}>Acceder a mis insignias</Text>
      </Button>
    </View>
  );
};

export default InsigniasAccessSection;
