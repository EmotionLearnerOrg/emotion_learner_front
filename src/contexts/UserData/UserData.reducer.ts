import {UserDataState} from './UserData.model';
import {UserDataAction, UserDataActionKind} from './UserData.actions';

const {
  INIT_DATA,
  SET_INSIGNIAS,
  SET_NICKNAME,
  SET_UID,
  SET_LOGGED,
  CLEAR_DATA,
} = UserDataActionKind;

export const DEFAULT_STATE: UserDataState = {
  nickName: '',
  uid: '',
  loggedIn: null,
  insignias: [],
};

export const userDataReducer = (
  prevState: UserDataState,
  action: UserDataAction,
): UserDataState => {
  switch (action.type) {
    case INIT_DATA:
      return {
        ...prevState,
        ...action.state,
      };
    case SET_INSIGNIAS:
      return {
        ...prevState,
        insignias: action.insignias,
      };
    case SET_LOGGED:
      return {
        ...prevState,
        loggedIn: action.loggedIn,
      };
    case SET_NICKNAME:
      return {
        ...prevState,
        nickName: action.nickName,
      };
    case SET_UID:
      return {
        ...prevState,
        uid: action.uid,
      };
    case CLEAR_DATA:
      return {
        ...DEFAULT_STATE,
      };
    default:
      return prevState;
  }
};
