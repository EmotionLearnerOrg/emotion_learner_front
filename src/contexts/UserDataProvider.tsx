import React, {createContext, useContext, useState} from 'react';
import {
  getNickName,
  getUID,
  getIsLoggedIn,
} from '../services/preference/preference.service';

interface UserDataState {
  nickName: string;
  uid: string;
  loggedIn: any;
  initData: () => void;
  clearData: () => void;
  updateNickname: ({nickNameProp}: {nickNameProp?: string | undefined}) => void;
  updateUid: ({uidProp}: {uidProp?: string | undefined}) => void;
  updateLoggedIn: ({loggedInProp}: {loggedInProp?: string | undefined}) => void;
}

const UserDataContext = createContext<UserDataState>({
  nickName: '',
  uid: '',
  loggedIn: null,
  initData: () => {},
  clearData: () => {},
  updateNickname: () => {},
  updateUid: () => {},
  updateLoggedIn: () => {},
});

export const UserDataProvider: React.FC<any> = ({children}) => {
  const [nickName, setNickname] = useState('');
  const [uid, setUid] = useState('');
  const [loggedIn, setIsLoggedIn] = useState(null);

  const initData = () => {
    updateNickname({});
    updateUid({});
    updateLoggedIn({});
  };

  const clearData = () => {
    updateNickname({});
    updateUid({});
    updateLoggedIn({});
  };

  const updateNickname = ({nickNameProp}: {nickNameProp?: string}) => {
    nickNameProp
      ? setNickname('')
      : getNickName().then(dataNickname => {
          setNickname(dataNickname!);
        });
  };

  const updateUid = ({uidProp}: {uidProp?: string}) => {
    uidProp
      ? setUid('')
      : getUID().then(dataUid => {
          setUid(dataUid!);
        });
  };

  const updateLoggedIn = ({loggedInProp}: {loggedInProp?: any}) => {
    loggedInProp
      ? setIsLoggedIn(null)
      : getIsLoggedIn().then(dataLoggedIn => {
          setIsLoggedIn(dataLoggedIn!);
        });
  };

  return (
    <UserDataContext.Provider
      value={{
        nickName,
        uid,
        loggedIn,
        initData,
        clearData,
        updateNickname,
        updateUid,
        updateLoggedIn,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = (): UserDataState => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used inside UserDataProvider');
  }
  return context;
};
