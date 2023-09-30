export enum UserDataActionKind {
  INIT_DATA = 'INIT_DATA',
  SET_INSIGNIAS = 'SET_INSIGNIAS',
  SET_NICKNAME = 'SET_NICKNAME',
  SET_SUBSCRIPTION_TYPE = 'SET_SUBSCRIPTION_TYPE',
  CLEAR_DATA = 'CLEAR_DATA',
  SET_UPDATING_INSIGNIAS = 'SET_UPDATING_INSIGNIAS',
  SET_UPDATING_NICKNAME = 'SET_UPDATING_NICKNAME',
  SET_UPDATING_SUBSCRIPTION_TYPE = 'SET_UPDATING_SUBSCRIPTION_TYPE',
  SET_URL_API = 'SET_URL_API',
  SET_UPDATING_URL_API = 'SET_UPDATING_URL_API',
}

export type UserDataAction =
  | {
    type: UserDataActionKind.SET_INSIGNIAS;
    insignias: [string, boolean][];
  }
  | {
    type: UserDataActionKind.SET_NICKNAME;
    nickName: string;
  }
  | {
    type: UserDataActionKind.SET_SUBSCRIPTION_TYPE;
    subscriptionType: string;
  }
  |
  {
    type: UserDataActionKind.SET_URL_API;
    urlApi: string;
  }
  |
  {
    type: UserDataActionKind.CLEAR_DATA;
  }
  | {
    type: UserDataActionKind.SET_UPDATING_INSIGNIAS;
    isLoadingPostInsignias: boolean;
  }
  | {
    type: UserDataActionKind.SET_UPDATING_NICKNAME;
    isLoadingUpdateNickname: boolean;
  }
  | {
    type: UserDataActionKind.SET_UPDATING_SUBSCRIPTION_TYPE;
    isLoadingUpdateSubscriptionType: boolean;
  }
  | {
    type: UserDataActionKind.SET_UPDATING_URL_API;
    isLoadingUrlApi: boolean;
  };