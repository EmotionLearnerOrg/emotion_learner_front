import {UserAuthState} from './UserAuth.model';
import {UserAuthAction, UserAuthActionKind} from './UserAuth.actions';

const {INIT_DATA, SET_NICKNAME, SET_UID, SET_LOGGED, CLEAR_DATA} =
  UserAuthActionKind;

export const DEFAULT_STATE_AUTH: UserAuthState = {
  nickName: '',
  uid: '',
  loggedIn: null,
};

export const UserAuthReducer = (
  prevState: UserAuthState,
  action: UserAuthAction,
): UserAuthState => {
  switch (action.type) {
    case INIT_DATA:
      return {
        ...prevState,
        ...action.state,
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
        ...DEFAULT_STATE_AUTH,
      };
    default:
      return prevState;
  }
};
