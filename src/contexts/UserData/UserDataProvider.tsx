import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useMemo,
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
import {useGetNicknameByUser, useUpdateDisplayName, useUpdateSubscriptionType, useGetSubscriptionTypeByUser} from '../../hooks/account';

type objectInsignias = {
  [key: string]: boolean;
};

export type ResponseType<T = Record<string, unknown>> = {
  onSuccess?: (data?: T) => void;
  onError?: (err?: any) => void;
};

const UserDataContext = createContext<IUserDataContext>({
  isLoadingUpdateNickname: false,
  isLoadingUpdateSubscriptionType: false,
  isLoadingPostInsignias: false,
  nickName: '',
  subscriptionType: 'PRUEBA',
  insignias: [],
  initData: () => {},
  clearData: () => {},
  updateInsignias: () => {},
  updateNickname: () => {},
  updateSubscriptionType: () => {},
  refetch: () => {},
});

export const UserDataProvider: React.FC<any> = ({children}) => {
  const [state, dispatch] = useReducer(
    userInsigniasReducer,
    DEFAULT_STATE_DATA,
  );

  const {uid} = useUserAuth();

  const {
    mutateAsync: mutateUpdateNickname,
    isLoading: isLoadingUpdateNickname,
  } = useUpdateDisplayName({uid: uid});

  const {
    mutateAsync: mutateUpdateSubscriptionType,
    isLoading: isLoadingUpdateSubscriptionType,
  } = useUpdateSubscriptionType({uid: uid});

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

  const {
    data: dataNickname,
    isLoading: isLoadingGetNickname,
    isRefetching: isRefetchingGetNickname,
  } = useGetNicknameByUser({uid: uid});

  const {
    data: dataSubscriptionType,
    isLoading: isLoadingGetSubscriptionType,
    isRefetching: isRefetchingGetSubscriptionType,
  } = useGetSubscriptionTypeByUser({uid: uid});

  useEffect(() => {
    if (!isLoadingGetNickname && dataNickname && !isRefetchingGetNickname) {
      dispatch({
        type: UserDataActionKind.SET_NICKNAME,
        nickName: dataNickname,
      });
    }
  }, [dataNickname, isLoadingGetNickname, isRefetchingGetNickname]);

  useEffect(() => {
    if (!isLoadingGetSubscriptionType && dataSubscriptionType && !isRefetchingGetSubscriptionType) {
      dispatch({
        type: UserDataActionKind.SET_SUBSCRIPTION_TYPE,
        subscriptionType: dataSubscriptionType,
      });
    }
  }, [dataSubscriptionType, isLoadingGetSubscriptionType, isRefetchingGetSubscriptionType]);

  useEffect(() => {
    if (!isLoading && dataInsignias && !isRefetching) {
      dispatch({
        type: UserDataActionKind.SET_INSIGNIAS,
        insignias: Object.entries(dataInsignias),
      });
    }
  }, [dataInsignias, isLoading, isRefetching]);

  useEffect(() => {
    if (!isLoadingUpdateNickname) {
      dispatch({
        type: UserDataActionKind.SET_UPDATING_NICKNAME,
        isLoadingUpdateNickname: false,
      });
    }
  }, [isLoadingUpdateNickname]);

  useEffect(() => {
    if (!isLoadingUpdateSubscriptionType) {
      dispatch({
        type: UserDataActionKind.SET_UPDATING_SUBSCRIPTION_TYPE,
        isLoadingUpdateSubscriptionType: false,
      });
    }
  }, [isLoadingUpdateSubscriptionType]);

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

  const updateNickname = useCallback(
    async ({nickname}: {nickname: string}) => {
      dispatch({
        type: UserDataActionKind.SET_UPDATING_NICKNAME,
        isLoadingUpdateNickname: true,
      });
      mutateUpdateNickname({nickName: nickname}).then(() => {
        dispatch({
          type: UserDataActionKind.SET_NICKNAME,
          nickName: nickname,
        });
      });
    },
    [mutateUpdateNickname],
  );

  const updateSubscriptionType = useCallback(
    async ({subscriptionType}: {subscriptionType: string}) => {
      dispatch({
        type: UserDataActionKind.SET_UPDATING_SUBSCRIPTION_TYPE,
        isLoadingUpdateSubscriptionType: true,
      });
      mutateUpdateSubscriptionType({subscriptionType: subscriptionType}).then(() => {
        dispatch({
          type: UserDataActionKind.SET_SUBSCRIPTION_TYPE,
          subscriptionType: subscriptionType,
        });
      });
    },
    [mutateUpdateSubscriptionType],
  );

  const updateInsignias = useCallback(
    async ({idInsignia}: {idInsignia: InsigniasTypeNames}) => {
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
    },
    [mutateCreateInsignias, mutateUpdateInsignias, state.insignias],
  );

  const initData = useCallback(async () => {}, []);

  const memoState = useMemo(
    () => ({
      ...state,
      initData,
      clearData,
      updateInsignias,
      updateNickname,
      updateSubscriptionType,
      refetch,
    }),
    [initData, refetch, state, updateInsignias, updateNickname, updateSubscriptionType],
  );

  return (
    <UserDataContext.Provider value={memoState}>
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
