import {InsigniasTypeNames} from '../../types/insignias';
import {UserDataAction} from './UserData.actions';

export interface IUserDataContext {
  isLoadingUpdateNickname: boolean;
  isLoadingPostInsignias: boolean;
  nickName?: string;
  insignias?: [string, boolean][];
  dispatch?: (value: UserDataAction) => void;
  initData: () => void;
  clearData: () => void;
  refetch: () => void;
  updateInsignias: ({idInsignia}: {idInsignia: InsigniasTypeNames}) => void;
  updateNickname: ({nickname}: {nickname: string}) => void;
}

export interface UserDataState {
  isLoadingUpdateNickname: boolean;
  isLoadingPostInsignias: boolean;
  nickName?: string;
  insignias?: [string, boolean][];
}

export type RangeValueData<T> = [T, T];
