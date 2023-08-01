import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePreferenceData = async (nickName: string, uid: string) => {
  try {
    await AsyncStorage.setItem('nickName', nickName);
    await AsyncStorage.setItem('uid', uid);
    await AsyncStorage.setItem('loggedIn', 'true');
  } catch (e) {}
};

export const clearPreferenceData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {}
};

export const getNickName = async () => {
  try {
    const nickName = await AsyncStorage.getItem('nickName');
    return nickName || '';
  } catch (e) {}
};

export const setNickName = async (nickName: string) => {
  try {
    await AsyncStorage.setItem('nickName', nickName);
    return nickName || '';
  } catch (e) {}
};

export const getIsLoggedIn = async () => {
  try {
    const isLoggedIn = await AsyncStorage.getItem('loggedIn');
    return isLoggedIn ? JSON.parse(isLoggedIn) : false;
  } catch (e) {}
};

export const getUID = async () => {
  try {
    const uid = await AsyncStorage.getItem('uid');
    return uid || '';
  } catch (e) {}
};
