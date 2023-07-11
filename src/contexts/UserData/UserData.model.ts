import {InsigniasTypeNames} from '../../types/insignias';
import {UserDataAction} from './UserData.actions';

export interface IUserDataContext {
  isLoadingPostInsignias: boolean;
  nickName: string;
  uid: string;
  loggedIn: any;
  insignias: [string, unknown][];
  dispatch?: (value: UserDataAction) => void;
  initData: () => void;
  clearData: () => void;
  updateNickname: ({nickNameProp}: {nickNameProp: string}) => void;
  updateInsignias: ({idInsignia}: {idInsignia: InsigniasTypeNames}) => void;
}

export interface UserDataState {
  isLoadingPostInsignias: boolean;
  nickName: string;
  uid: string;
  loggedIn: any;
  insignias: [string, unknown][];
}

export type RangeValue<T> = [T, T];
