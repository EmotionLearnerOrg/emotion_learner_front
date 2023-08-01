export enum UserDataActionKind {
  INIT_DATA = 'INIT_DATA',
  SET_INSIGNIAS = 'SET_INSIGNIAS',
  SET_NICKNAME = 'SET_NICKNAME',
  CLEAR_DATA = 'CLEAR_DATA',
  SET_UPDATING_INSIGNIAS = 'SET_UPDATING_INSIGNIAS',
  SET_UPDATING_NICKNAME = 'SET_UPDATING_NICKNAME',
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
      type: UserDataActionKind.CLEAR_DATA;
    }
  | {
      type: UserDataActionKind.SET_UPDATING_INSIGNIAS;
      isLoadingPostInsignias: boolean;
    }
  | {
      type: UserDataActionKind.SET_UPDATING_NICKNAME;
      isLoadingUpdateNickname: boolean;
    };
