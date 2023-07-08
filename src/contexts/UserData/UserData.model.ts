import {UserDataAction} from './UserData.actions';

export interface IUserDataContext {
  nickName: string;
  uid: string;
  loggedIn: any;
  insignias: [string, unknown][];
  dispatch?: (value: UserDataAction) => void;
  initData: () => void;
  clearData: () => void;
  updateNickname: ({nickNameProp}: {nickNameProp?: string | undefined}) => void;
  updateUid: ({uidProp}: {uidProp?: string | undefined}) => void;
  updateLoggedIn: ({loggedInProp}: {loggedInProp?: string | undefined}) => void;
  updateInsignias: ({insigniasProp}: {insigniasProp?: any | undefined}) => void;
}

export interface UserDataState {
  nickName: string;
  uid: string;
  loggedIn: any;
  insignias: [string, unknown][];
}

export type RangeValue<T> = [T, T];
