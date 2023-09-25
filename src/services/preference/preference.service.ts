import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePreferenceData = async (nickName: string, subscriptionType: string, urlApi: string, uid: string) => {
  try {
    await AsyncStorage.setItem('subscriptionType', subscriptionType);
    await AsyncStorage.setItem('nickName', nickName);
    await AsyncStorage.setItem('urlApi', urlApi);
    await AsyncStorage.setItem('uid', uid);
    await AsyncStorage.setItem('loggedIn', 'true');
  } catch (e) { }
};

export const clearPreferenceData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) { }
};

export const getNickName = async () => {
  try {
    const nickName = await AsyncStorage.getItem('nickName');
    return nickName || '';
  } catch (e) { }
};

export const setNickName = async (nickName: string) => {
  try {
    await AsyncStorage.setItem('nickName', nickName);
    return nickName || '';
  } catch (e) { }
};

export const getUrlApi = async () => {
  try {
    const urlApi = await AsyncStorage.getItem('urlApi');
    return urlApi || '';
  } catch (e) { }
};

export const setUrlApi = async (urlApi: string) => {
  try {
    await AsyncStorage.setItem('urlApi', urlApi);
    return urlApi || '';
  } catch (e) { }
};

export const getIsLoggedIn = async () => {
  try {
    const isLoggedIn = await AsyncStorage.getItem('loggedIn');
    return isLoggedIn ? JSON.parse(isLoggedIn) : false;
  } catch (e) { }
};

export const getUID = async () => {
  try {
    const uid = await AsyncStorage.getItem('uid');
    return uid || '';
  } catch (e) { }
};

export const getSubscriptionTypeLocal = async () => {
  try {
    const subscriptionType = await AsyncStorage.getItem('subscriptionType');
    return subscriptionType || '';
  } catch (e) { }
};

export const setSubscriptionType = async (subscriptionType: string) => {
  try {
    await AsyncStorage.setItem('subscriptionType', subscriptionType);
    return subscriptionType || '';
  } catch (e) { }
};