import {UserAuthAction} from './UserAuth.actions';

export interface IUserAuthContext {
  uid: string;
  loggedIn: any;
  dispatch?: (value: UserAuthAction) => void;
  initData: () => Promise<void>;
  clearData: () => void;
}

export interface UserAuthState {
  uid: string;
  loggedIn: any;
}

export type RangeValueAuth<T> = [T, T];
