import React, {createContext, useCallback, useContext, useReducer} from 'react';
import {getNickName, getUID, getIsLoggedIn} from '../../services';
import {IUserAuthContext} from './UserAuth.model';
import {DEFAULT_STATE_AUTH, UserAuthReducer} from './UserAuth.reducer';
import {UserAuthActionKind} from './UserAuth.actions';

export type ResponseType<T = Record<string, unknown>> = {
  onSuccess?: (data?: T) => void;
  onError?: (err?: any) => void;
};

const UserAuthContext = createContext<IUserAuthContext>({
  nickName: '',
  uid: '',
  loggedIn: null,
  initData: () => {},
  clearData: () => {},
  updateNickname: () => {},
});

export const UserAuthProvider: React.FC<any> = ({children}) => {
  const [state, dispatch] = useReducer(UserAuthReducer, DEFAULT_STATE_AUTH);

  const clearData = () => {
    dispatch({
      type: UserAuthActionKind.CLEAR_DATA,
    });
  };

  const updateNickname = async ({nickNameProp}: {nickNameProp: string}) => {
    //pegarle a bdd de firebase para actualizar nickname
    dispatch({
      type: UserAuthActionKind.SET_NICKNAME,
      nickName: nickNameProp!,
    });
  };

  const initData = useCallback(async () => {
    let nickName = await getNickName();
    let uid = await getUID();
    let loggedIn = await getIsLoggedIn();

    dispatch({
      type: UserAuthActionKind.INIT_DATA,
      state: {
        nickName: nickName!,
        uid: uid!,
        loggedIn: loggedIn,
      },
    });
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        ...state,
        initData,
        clearData,
        updateNickname,
      }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = (): IUserAuthContext => {
  const context = useContext(UserAuthContext);
  if (context === undefined) {
    throw new Error('useUserAuth must be used inside UserAuthProvider');
  }
  return context;
};
