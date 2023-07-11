import {UserDataState} from './UserData.model';

export enum UserDataActionKind {
  INIT_DATA = 'INIT_DATA',
  SET_INSIGNIAS = 'SET_INSIGNIAS',
  SET_NICKNAME = 'SET_NICKNAME',
  SET_UID = 'SET_UID',
  SET_LOGGED = 'SET_LOGGED',
  CLEAR_DATA = 'CLEAR_DATA',
  SET_UPDATING_INSIGNIAS = 'SET_UPDATING_INSIGNIAS',
}

export type UserDataAction =
  | {
      type: UserDataActionKind.INIT_DATA;
      state: UserDataState;
    }
  | {
      type: UserDataActionKind.SET_INSIGNIAS;
      insignias: [string, unknown][];
    }
  | {
      type: UserDataActionKind.SET_NICKNAME;
      nickName: string;
    }
  | {
      type: UserDataActionKind.SET_UID;
      uid: string;
    }
  | {
      type: UserDataActionKind.SET_LOGGED;
      loggedIn?: any;
    }
  | {
      type: UserDataActionKind.CLEAR_DATA;
    }
  | {
      type: UserDataActionKind.SET_UPDATING_INSIGNIAS;
      isLoadingPostInsignias: boolean;
    };
