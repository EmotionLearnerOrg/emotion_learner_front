import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  InsigniasTypeNames,
  insigniasDefault,
  typeInsignias,
} from '../../types/insignias';
import {
  useCreateInsigniaByUser,
  useGetInsigniasByUser,
  useUpdateInsigniaByUser,
} from '../../hooks';
import {IUserDataContext} from './UserData.model';
import {DEFAULT_STATE_DATA, userInsigniasReducer} from './UserData.reducer';
import {UserDataActionKind} from './UserData.actions';
import {useUserAuth} from '../UserAuth';

type objectInsignias = {
  [key: string]: boolean;
};

export type ResponseType<T = Record<string, unknown>> = {
  onSuccess?: (data?: T) => void;
  onError?: (err?: any) => void;
};

const UserDataContext = createContext<IUserDataContext>({
  isLoadingPostInsignias: false,
  insignias: [],
  initData: () => {},
  clearData: () => {},
  updateInsignias: () => {},
  refetch: () => {},
});

export const UserDataProvider: React.FC<any> = ({children}) => {
  const [state, dispatch] = useReducer(
    userInsigniasReducer,
    DEFAULT_STATE_DATA,
  );
  const {uid} = useUserAuth();

  const {
    mutateAsync: mutateCreateInsignias,
    isLoading: isLoadingCreateInsignias,
  } = useCreateInsigniaByUser({
    uid: uid,
  });

  const {
    mutateAsync: mutateUpdateInsignias,
    isLoading: isLoadingUpdateInsignias,
  } = useUpdateInsigniaByUser({
    uid: uid,
  });

  const {
    data: dataInsignias,
    isLoading,
    isRefetching,
    refetch,
  } = useGetInsigniasByUser({uid: uid});

  useEffect(() => {
    if (!isLoading && dataInsignias && !isRefetching) {
      dispatch({
        type: UserDataActionKind.SET_INSIGNIAS,
        insignias: Object.entries(dataInsignias),
      });
    }
  }, [dataInsignias, isLoading, isRefetching]);

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

  const updateInsignias = async ({
    idInsignia,
  }: {
    idInsignia: InsigniasTypeNames;
  }) => {
    let nuevasInsignias: typeInsignias = state.insignias!.reduce(
      (obj: objectInsignias, [key, value]) => {
        obj[key] = value as boolean;
        return obj;
      },
      {},
    ) as typeInsignias;
    dispatch({
      type: UserDataActionKind.SET_UPDATING_INSIGNIAS,
      isLoadingPostInsignias: true,
    });

    if (nuevasInsignias) {
      ///actualizar
      nuevasInsignias = {
        ...(nuevasInsignias as typeInsignias),
        ...{[idInsignia]: true},
      };
      mutateUpdateInsignias({nuevasInsignias: nuevasInsignias}).then(() => {
        dispatch({
          type: UserDataActionKind.SET_INSIGNIAS,
          insignias: Object.entries(nuevasInsignias),
        });
      });
    } else {
      ///guardar
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

  const initData = useCallback(async () => {}, []);

  return (
    <UserDataContext.Provider
      value={{
        ...state,
        initData,
        clearData,
        updateInsignias,
        refetch,
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
