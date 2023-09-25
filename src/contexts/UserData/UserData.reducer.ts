import { UserDataState } from './UserData.model';
import { UserDataAction, UserDataActionKind } from './UserData.actions';

const {
  SET_INSIGNIAS,
  SET_UPDATING_NICKNAME,
  SET_NICKNAME,
  CLEAR_DATA,
  SET_UPDATING_INSIGNIAS,
  SET_SUBSCRIPTION_TYPE,
  SET_UPDATING_SUBSCRIPTION_TYPE,
  SET_URL_API,
  SET_UPDATING_URL_API,
} = UserDataActionKind;

export const DEFAULT_STATE_DATA: UserDataState = {
  isLoadingUpdateNickname: false,
  isLoadingPostInsignias: false,
  isLoadingUpdateSubscriptionType: false,
  isLoadingUrlApi: false,
  insignias: [],
  nickName: '',
  subscriptionType: 'PRUEBA',
  urlApi: '',
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
    case SET_SUBSCRIPTION_TYPE:
      return {
        ...prevState,
        subscriptionType: action.subscriptionType,
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
    case SET_UPDATING_SUBSCRIPTION_TYPE:
      return {
        ...prevState,
        isLoadingUpdateSubscriptionType: action.isLoadingUpdateSubscriptionType,
      }
    case SET_UPDATING_URL_API:
      return {
        ...prevState,
        isLoadingUrlApi: action.isLoadingUrlApi,
      };
    case SET_URL_API:
      return {
        ...prevState,
        urlApi: action.urlApi,
      };

    default:
      return prevState;
  }
};
