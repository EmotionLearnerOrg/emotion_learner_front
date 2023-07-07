import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {makeMirrorScreenStyles} from './MirrorScreen.style';
import {Button, Text} from 'react-native-magnus';
import {emocionType, emociones} from '../../components/Ruleta/emociones';
import {HomeRoutes, MirrorType} from '../../stacks/HomeParams';

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
      <Text style={{alignSelf: 'center'}} fontSize={32}>Espejo inteligente</Text>
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
        {/* <View style={{padding: 16}}> */}
        <FlatList
          style={{alignSelf: 'center', marginTop: 16}}
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
        {/* <View style={style.cardContainer}>
          <View style={{flexDirection: 'row', gap: 16}}>
            <Button
              mb={4}
              rounded={8}
              style={style.buttonEmotion}
              bg="#ceecdb"
              color="#524b6b"
              onPress={() => navigation.navigate(HomeRoutes.PERFORM_EMOTION)}>
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
        </View> */}
      </View>
    </View>
  );
};

export default MirrorScreen;
