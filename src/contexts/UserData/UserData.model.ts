import { InsigniasTypeNames } from '../../types';
import { UserDataAction } from './UserData.actions';

export interface IUserDataContext {
  isLoadingUpdateNickname: boolean;
  isLoadingUpdateSubscriptionType: boolean;
  isLoadingPostInsignias: boolean;
  isLoadingUrlApi: boolean;
  nickName?: string;
  subscriptionType?: string;
  urlApi?: string;
  insignias?: [string, boolean][];
  dispatch?: (value: UserDataAction) => void;
  initData: () => void;
  clearData: () => void;
  refetch: () => void;
  updateInsignias: ({ idInsignia }: { idInsignia: InsigniasTypeNames }) => void;
  updateNickname: ({ nickname }: { nickname: string }) => void;
  updateSubscriptionType: ({ subscriptionType, }: { subscriptionType: string; }) => void;
  updateUrlApi: ({ urlApi, }: { urlApi: string; }) => void;
}

export interface UserDataState {
  isLoadingUpdateNickname: boolean;
  isLoadingUpdateSubscriptionType: boolean;
  isLoadingPostInsignias: boolean;
  isLoadingUrlApi: boolean;
  nickName?: string;
  subscriptionType?: string;
  urlApi?: string;
  insignias?: [string, boolean][];
}

export type RangeValueData<T> = [T, T];