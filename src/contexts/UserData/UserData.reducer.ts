import {UserDataState} from './UserData.model';
import {UserDataAction, UserDataActionKind} from './UserData.actions';

const {
  SET_INSIGNIAS,
  SET_UPDATING_NICKNAME,
  SET_NICKNAME,
  CLEAR_DATA,
  SET_UPDATING_INSIGNIAS,
} = UserDataActionKind;

export const DEFAULT_STATE_DATA: UserDataState = {
  isLoadingUpdateNickname: false,
  isLoadingPostInsignias: false,
  insignias: [],
  nickName: '',
};

export const userInsigniasReducer = (
  prevState: UserDataState,
  action: UserDataAction,
): UserDataState => {
  switch (action.type) {
    case SET_INSIGNIAS:
      return {
        ...prevState,
        insignias: action.insignias,
      };
    case SET_NICKNAME:
      return {
        ...prevState,
        nickName: action.nickName,
      };
    case CLEAR_DATA:
      return {
        ...DEFAULT_STATE_DATA,
      };
    case SET_UPDATING_INSIGNIAS:
      return {
        ...prevState,
        isLoadingPostInsignias: action.isLoadingPostInsignias,
      };
    case SET_UPDATING_NICKNAME:
      return {
        ...prevState,
        isLoadingUpdateNickname: action.isLoadingUpdateNickname,
      };
    default:
      return prevState;
  }
};
