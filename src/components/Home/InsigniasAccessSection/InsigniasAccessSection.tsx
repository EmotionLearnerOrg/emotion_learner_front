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
      <Button
        alignSelf="center"
        bg="#FCCDCE"
        mt={5}
        mb={5}
        rounded={16}
        style={style.button}
        onPress={goToInsignias}>
        <Text style={style.buttonText}>Mis insignias</Text>
      </Button>
    </View>
  );
};

export default InsigniasAccessSection;