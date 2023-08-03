import {UserAuthState} from './UserAuth.model';

export enum UserAuthActionKind {
  INIT_DATA = 'INIT_DATA',
  SET_UID = 'SET_UID',
  SET_LOGGED = 'SET_LOGGED',
  CLEAR_DATA = 'CLEAR_DATA',
}

export type UserAuthAction =
  | {
      type: UserAuthActionKind.INIT_DATA;
      state: UserAuthState;
    }
  | {
      type: UserAuthActionKind.SET_UID;
      uid: string;
    }
  | {
      type: UserAuthActionKind.SET_LOGGED;
      loggedIn?: any;
    }
  | {
      type: UserAuthActionKind.CLEAR_DATA;
    };
