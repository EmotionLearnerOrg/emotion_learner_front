export enum UserDataActionKind {
  INIT_DATA = 'INIT_DATA',
  SET_INSIGNIAS = 'SET_INSIGNIAS',
  CLEAR_DATA = 'CLEAR_DATA',
  SET_UPDATING_INSIGNIAS = 'SET_UPDATING_INSIGNIAS',
}

export type UserDataAction =
  | {
      type: UserDataActionKind.SET_INSIGNIAS;
      insignias: [string, unknown][];
    }
  | {
      type: UserDataActionKind.CLEAR_DATA;
    }
  | {
      type: UserDataActionKind.SET_UPDATING_INSIGNIAS;
      isLoadingPostInsignias: boolean;
    };
