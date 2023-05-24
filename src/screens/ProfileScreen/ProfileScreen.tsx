import React from 'react';
import {ScrollView} from 'react-native';
import {makeProfileScreenStyles} from './ProfileScreen.style';
import {Text} from 'react-native-magnus';

const ProfileScreen = () => {
  const style = makeProfileScreenStyles();
  return (
    <ScrollView style={style.containerView}>
      <Text>Profile</Text>
    </ScrollView>
  );
};

export default ProfileScreen;
