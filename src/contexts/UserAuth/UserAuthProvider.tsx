import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import {getUID, getIsLoggedIn} from '../../services';
import {IUserAuthContext} from './UserAuth.model';
import {DEFAULT_STATE_AUTH, UserAuthReducer} from './UserAuth.reducer';
import {UserAuthActionKind} from './UserAuth.actions';

export type ResponseType<T = Record<string, unknown>> = {
  onSuccess?: (data?: T) => Promise<void>;
  onError?: (err?: any) => void;
};

const UserAuthContext = createContext<IUserAuthContext>({
  uid: '',
  loggedIn: null,
  initData: () =>
    new Promise<void>(resolve => {
      resolve();
    }),
  clearData: () => {},
});

export const UserAuthProvider: React.FC<any> = ({children}) => {
  const [state, dispatch] = useReducer(UserAuthReducer, DEFAULT_STATE_AUTH);

  const clearData = () => {
    dispatch({
      type: UserAuthActionKind.CLEAR_DATA,
    });
  };

  const initData = useCallback(async () => {
    let uid = await getUID();
    let loggedIn = await getIsLoggedIn();

    dispatch({
      type: UserAuthActionKind.INIT_DATA,
      state: {
        uid: uid!,
        loggedIn: loggedIn,
      },
    });
  }, []);

  const memoState = useMemo(
    () => ({
      ...state,
      initData,
      clearData,
    }),
    [initData, state],
  );

  return (
    <UserAuthContext.Provider value={memoState}>
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
