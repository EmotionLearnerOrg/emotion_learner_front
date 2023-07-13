import {UserDataState} from './UserData.model';
import {UserDataAction, UserDataActionKind} from './UserData.actions';

const {SET_INSIGNIAS, CLEAR_DATA, SET_UPDATING_INSIGNIAS} = UserDataActionKind;

export const DEFAULT_STATE_DATA: UserDataState = {
  isLoadingPostInsignias: false,
  insignias: [],
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
    case CLEAR_DATA:
      return {
        ...DEFAULT_STATE_DATA,
      };
    case SET_UPDATING_INSIGNIAS:
      return {
        ...prevState,
        isLoadingPostInsignias: action.isLoadingPostInsignias,
      };
    default:
      return prevState;
  }
};
