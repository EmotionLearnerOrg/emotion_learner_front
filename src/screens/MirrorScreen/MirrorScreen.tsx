import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { makeMirrorScreenStyles } from './MirrorScreen.style';
import { Button, Text, Image } from 'react-native-magnus';
import { HomeRoutes, MirrorType } from '../../stacks/HomeParams';
import { emociones, emocionType } from '../../components';

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
      rounded={16}
      style={{ width: 80, height: 160 }}
      bg={item.colorBottonContainer}
      color="#524b6b"
      onPress={goToLearn}>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#524B6B', textAlignVertical: 'top', textAlign: 'center', marginBottom: 10 }}>
          {item.displayname}
        </Text>
        <Image source={item.pathMonstruo} style={{ width: 100, height: 130 }} />
      </View>
    </Button>
  );
};

const MirrorScreen: FC<MirrorType> = ({ navigation }) => {
  const style = makeMirrorScreenStyles();
  const gap = 16;

  return (
    <View style={style.containerView}>
      <Text style={{ color: '#150B3D', textAlign: "center", fontSize: 32 }}>
        Espejo inteligente
      </Text>
      <Text style={{ color: '#150B3D', textAlign: "left", fontSize: 16, marginStart: 10, marginTop: 20 }}>
        Elegí la emoción que quieras aprender y practicar
      </Text>
      <View style={style.buttonsContainer}>
        <FlatList
          style={style.list}
          data={prueba}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ButtonItem
              item={item}
              goToLearn={() =>
                navigation.navigate(HomeRoutes.GUIDE_FEEL, { emotion: item })
              }
            />
          )}
          contentContainerStyle={{ gap }}
          columnWrapperStyle={{
            gap,
            justifyContent: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default MirrorScreen;
