import React, {FC, useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {makeInsigniasScreenStyles} from './InsigniasScreen.style';
import {Text} from 'react-native-magnus';
import {
  InsigniaMirror,
  InsigniaArcade,
  InsigniaAso,
  InsigniaRuleta,
} from '../../../assets';
import {insigniasColor, insigniasEnum} from '../../types/insignias';
import {useUserData} from '../../contexts';

const capitalizeFirstLetter = ({str}: {str: string}) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const InsigniaPorCategoria = ({
  category,
  item,
  width,
  height,
}: {
  category: string;
  item: [string, boolean];
  width?: number;
  height?: number;
}) => {
  if (category === 'Mirror') {
    return (
      <InsigniaMirror
        width={width ?? 85}
        height={height ?? 85}
        color={
          item[1]
            ? insigniasColor[item[0] as unknown as insigniasEnum]
            : 'black'
        }
      />
    );
  } else if (category === 'Ruleta') {
    return (
      <InsigniaRuleta
        width={width ?? 85}
        height={height ?? 85}
        color={
          item[1]
            ? insigniasColor[item[0] as unknown as insigniasEnum]
            : 'black'
        }
      />
    );
  } else if (category === 'Arcade') {
    return (
      <InsigniaArcade
        width={width ?? 85}
        height={height ?? 85}
        color={
          item[1]
            ? insigniasColor[item[0] as unknown as insigniasEnum]
            : 'black'
        }
      />
    );
  } else {
    return (
      <InsigniaAso
        width={width ?? 85}
        height={height ?? 85}
        color={
          item[1]
            ? insigniasColor[item[0] as unknown as insigniasEnum]
            : 'black'
        }
      />
    );
  }
};

const groupStringsByPrefix = (
  insignias: [string, boolean][],
): {
  [key: string]: [string, boolean][];
} => {
  const groupedStrings: {[key: string]: [string, boolean][]} = {};

  insignias.forEach(insignia => {
    const prefix = insignia[0].split('_')[0]; // Obtenemos la cadena inicial hasta el primer '_'
    if (!groupedStrings[prefix]) {
      groupedStrings[prefix] = [];
    }
    groupedStrings[prefix].push([insignia[0], insignia[1]]);
  });

  return groupedStrings;
};

const InsigniaItem = ({
  style,
  item,
  category,
}: {
  style: any;
  item: [string, boolean];
  category: string;
}) => {
  const title = item[0].split('_').length > 1 ? item[0].split('_') : item[0];

  return (
    <View style={style}>
      <Text mb={8}>{capitalizeFirstLetter({str: title[1]})}</Text>
      {InsigniaPorCategoria({category: category, item: item})}
    </View>
  );
};

const InsigniasScreen: FC<{}> = () => {
  const styles = makeInsigniasScreenStyles();
  const {insignias} = useUserData();
  const [groupedInsignias, setGroupedInsignias] = useState<{
    [key: string]: [string, boolean][];
  }>();
  useEffect(() => {
    setGroupedInsignias(groupStringsByPrefix(insignias!));
  }, [insignias]);

  return (
    <ScrollView nestedScrollEnabled>
      <Text p={8} fontSize={32}>
        Estas son las insignias que ganaste!
      </Text>
      {groupedInsignias &&
        Object.keys(groupedInsignias).map(key => (
          <View key={key} style={styles.sectionContainer}>
            <Text textAlign="center" style={styles.titleSection} fontSize={24}>
              {capitalizeFirstLetter({str: key})}
            </Text>
            {groupedInsignias[key].map(elemento => (
              <View key={elemento[0]} style={styles.item}>
                <InsigniaItem
                  item={elemento}
                  style={styles.insignia}
                  category={key}
                />
              </View>
            ))}
          </View>
        ))}
    </ScrollView>
  );
};

export default InsigniasScreen;
