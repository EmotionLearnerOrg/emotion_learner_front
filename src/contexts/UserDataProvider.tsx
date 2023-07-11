import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  getNickName,
  getUID,
  getIsLoggedIn,
  getAllInsigniasByUser,
} from '../services';
import {
  DEFAULT_STATE,
  IUserDataContext,
  UserDataActionKind,
  userDataReducer,
} from './UserData';
import {
  InsigniasTypeNames,
  insigniasDefault,
  typeInsignias,
} from '../types/insignias';
import {
  useCreateInsigniasMutation,
  useUpdateInsigniasMutation,
} from '../hooks/insignia';

export type ResponseType<T = Record<string, unknown>> = {
  onSuccess?: (data?: T) => void;
  onError?: (err?: any) => void;
};

const UserDataContext = createContext<IUserDataContext>({
  isLoadingPostInsignias: false,
  nickName: '',
  uid: '',
  loggedIn: null,
  insignias: [],
  initData: () => {},
  clearData: () => {},
  updateNickname: () => {},
  updateInsignias: () => {},
});

export const UserDataProvider: React.FC<any> = ({children}) => {
  const [state, dispatch] = useReducer(userDataReducer, DEFAULT_STATE);

  const {
    mutateAsync: mutateCreateInsignias,
    isLoading: isLoadingCreateInsignias,
  } = useCreateInsigniasMutation({
    uid: state.uid,
  });
  const {
    mutateAsync: mutateUpdateInsignias,
    isLoading: isLoadingUpdateInsignias,
  } = useUpdateInsigniasMutation({
    uid: state.uid,
  });

  useEffect(() => {
    if (!isLoadingCreateInsignias && !isLoadingUpdateInsignias) {
      dispatch({
        type: UserDataActionKind.SET_UPDATING_INSIGNIAS,
        isLoadingPostInsignias: false,
      });
    }
  }, [isLoadingCreateInsignias, isLoadingUpdateInsignias]);

  const clearData = () => {
    dispatch({
      type: UserDataActionKind.CLEAR_DATA,
    });
  };

  const updateNickname = async ({nickNameProp}: {nickNameProp: string}) => {
    //pegarle a bdd de firebase para actualizar nickname
    dispatch({
      type: UserDataActionKind.SET_NICKNAME,
      nickName: nickNameProp!,
    });
  };

  const updateInsignias = async ({
    idInsignia,
  }: {
    idInsignia: InsigniasTypeNames;
  }) => {
    const insigniasUsuario = await getAllInsigniasByUser({uid: state.uid});
    let nuevasInsignias: typeInsignias = insigniasUsuario;
    dispatch({
      type: UserDataActionKind.SET_UPDATING_INSIGNIAS,
      isLoadingPostInsignias: true,
    });
    if (insigniasUsuario) {
      nuevasInsignias = {...insigniasUsuario, ...{[idInsignia]: true}};
      mutateUpdateInsignias({nuevasInsignias: nuevasInsignias}).then(() => {
        dispatch({
          type: UserDataActionKind.SET_INSIGNIAS,
          insignias: Object.entries(nuevasInsignias),
        });
      });
    } else {
      nuevasInsignias = {
        ...insigniasDefault,
        ...{[idInsignia]: true},
      };
      mutateCreateInsignias({nuevasInsignias: nuevasInsignias}).then(() => {
        dispatch({
          type: UserDataActionKind.SET_INSIGNIAS,
          insignias: Object.entries(nuevasInsignias),
        });
      });
    }
  };

  const initData = useCallback(async () => {
    let nickName = await getNickName();
    let uid = await getUID();
    let loggedIn = await getIsLoggedIn();
    let insignias =
      uid?.length === 0
        ? insigniasDefault
        : await getAllInsigniasByUser({uid: uid!});

    dispatch({
      type: UserDataActionKind.INIT_DATA,
      state: {
        isLoadingPostInsignias: false,
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
