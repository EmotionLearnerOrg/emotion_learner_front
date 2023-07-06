import React, {createContext, useCallback, useContext, useReducer} from 'react';
import {
  getNickName,
  getUID,
  getIsLoggedIn,
} from '../services/preference/preference.service';
import {getAllInsigniasByUser} from '../services/insignia/insignia.service';
import {
  DEFAULT_STATE,
  IUserDataContext,
  UserDataActionKind,
  userDataReducer,
} from './UserData';

const UserDataContext = createContext<IUserDataContext>({
  nickName: '',
  uid: '',
  loggedIn: null,
  insignias: [],
  initData: () => {},
  clearData: () => {},
  updateNickname: () => {},
  updateUid: () => {},
  updateLoggedIn: () => {},
  updateInsignias: () => {},
});

export const UserDataProvider: React.FC<any> = ({children}) => {
  const [state, dispatch] = useReducer(userDataReducer, DEFAULT_STATE);

  const clearData = () => {
    updateNickname({});
    updateUid({});
    updateLoggedIn({});
    updateInsignias({});
    dispatch({
      type: UserDataActionKind.CLEAR_DATA,
    });
  };

  const updateNickname = async ({nickNameProp}: {nickNameProp?: string}) => {
    let nickNamePayload = nickNameProp ?? (await getNickName());
    dispatch({
      type: UserDataActionKind.SET_NICKNAME,
      nickName: nickNamePayload!,
    });
  };

  const updateUid = async ({uidProp}: {uidProp?: string}) => {
    let uidPayload = uidProp ?? (await getUID());
    dispatch({
      type: UserDataActionKind.SET_UID,
      uid: uidPayload!,
    });
  };

  const updateLoggedIn = async ({loggedInProp}: {loggedInProp?: any}) => {
    let loggedInPayload = loggedInProp ?? (await getIsLoggedIn());
    dispatch({
      type: UserDataActionKind.SET_LOGGED,
      loggedIn: loggedInPayload,
    });
  };

  const updateInsignias = useCallback(
    async ({insigniasProp}: {insigniasProp?: any}) => {
      let insigniasPayload =
        insigniasProp ?? (await getAllInsigniasByUser({uid: state.uid}));
      dispatch({
        type: UserDataActionKind.SET_INSIGNIAS,
        insignias: Object.entries(insigniasPayload),
      });
    },
    [state.uid],
  );

  const initData = useCallback(async () => {
    let nickName = await getNickName();
    let uid = await getUID();
    let loggedIn = await getIsLoggedIn();
    let insignias =
      uid?.length === 0 ? [] : await getAllInsigniasByUser({uid: uid!});

    dispatch({
      type: UserDataActionKind.INIT_DATA,
      state: {
        nickName: nickName!,
        uid: uid!,
        loggedIn: loggedIn,
        insignias: Object.entries(insignias),
      },
    });
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        ...state,
        initData,
        clearData,
        updateNickname,
        updateUid,
        updateLoggedIn,
        updateInsignias,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = (): IUserDataContext => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used inside UserDataProvider');
  }
  return context;
};
