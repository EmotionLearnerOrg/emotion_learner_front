import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {makeInsigniasScreenStyles} from './InsigniasScreen.style';
import {Text} from 'react-native-magnus';
import {useUserData} from '../../contexts/UserDataProvider';
import SvgInsignia from '../../../assets/svgImages/Insignia';
import InsigniaBloqueada from '../../../assets/svgImages/InsigniaBloqueada';
import {insigniasColor, insigniasEnum} from '../../types/insignias';

const InsigniaItem = ({style, item}: {style: any; item: any}) => {
  return (
    <View style={style}>
      <Text>{item[0]}</Text>
      {item[1] ? (
        <SvgInsignia
          width={85}
          height={85}
          color={insigniasColor[item[0] as unknown as insigniasEnum]}
        />
      ) : (
        <InsigniaBloqueada width={85} height={85} color="black" />
      )}
    </View>
  );
};

const InsigniasScreen: FC<{}> = () => {
  const style = makeInsigniasScreenStyles();
  const {insignias} = useUserData();

  return (
    <FlatList
      style={style.list}
      data={insignias}
      numColumns={2}
      keyExtractor={(item, index) => `${item[0]}${index.toString()}`}
      renderItem={({item}) => (
        <InsigniaItem item={item} style={style.insigniaItem} />
      )}
      contentContainerStyle={style.gapList}
      columnWrapperStyle={style.gapList}
    />
  );
};

export default InsigniasScreen;
