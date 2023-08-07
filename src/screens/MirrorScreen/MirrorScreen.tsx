import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {makeMirrorScreenStyles} from './MirrorScreen.style';
import {Button, Text} from 'react-native-magnus';
import {HomeRoutes, MirrorType} from '../../stacks/HomeParams';
import {emociones, emocionType} from '../../components';

const prueba = Object.values(emociones);

const ButtonItem = ({
  item,
  goToLearn,
}: {
  item: emocionType;
  goToLearn: () => void;
}) => {
  return (
    <Button
      mb={4}
      rounded={8}
      style={{width: 120}}
      bg={item.color}
      color="#524b6b"
      onPress={goToLearn}>
      {item.name}
    </Button>
  );
};

const MirrorScreen: FC<MirrorType> = ({navigation}) => {
  const style = makeMirrorScreenStyles();
  const gap = 16;

  return (
    <View style={style.containerView}>
      <Text textAlign="center" fontSize={32}>
        Espejo inteligente
      </Text>
      <Text fontSize={16} textAlign="center" mt={20}> Elegí la emoción que quieras aprender y practicar! </Text>
      <View style={style.buttonsContainer}>
        <View>
          <Text fontWeight="700" fontSize={16}>
            Elegi una emocion
          </Text>
        </View>
        <FlatList
          style={style.list}
          data={prueba}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <ButtonItem
              item={item}
              goToLearn={() =>
                navigation.navigate(HomeRoutes.GUIDE_FEEL, {emotion: item})
              }
            />
          )}
          contentContainerStyle={{gap}}
          columnWrapperStyle={{gap}}
        />
      </View>
    </View>
  );
};

export default MirrorScreen;
