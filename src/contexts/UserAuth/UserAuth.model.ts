import {UserAuthAction} from './UserAuth.actions';

export interface IUserAuthContext {
  nickName: string;
  uid: string;
  loggedIn: any;
  dispatch?: (value: UserAuthAction) => void;
  initData: () => void;
  clearData: () => void;
  updateNickname: ({nickNameProp}: {nickNameProp: string}) => void;
}

export interface UserAuthState {
  nickName: string;
  uid: string;
  loggedIn: any;
}

export type RangeValueAuth<T> = [T, T];
