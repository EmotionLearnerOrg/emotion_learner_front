import {InsigniasTypeNames} from '../../types/insignias';
import {UserDataAction} from './UserData.actions';

export interface IUserDataContext {
  isLoadingPostInsignias: boolean;
  insignias?: [string, unknown][];
  dispatch?: (value: UserDataAction) => void;
  initData: () => void;
  clearData: () => void;
  updateInsignias: ({idInsignia}: {idInsignia: InsigniasTypeNames}) => void;
}

export interface UserDataState {
  isLoadingPostInsignias: boolean;
  insignias?: [string, unknown][];
}

export type RangeValueData<T> = [T, T];
