import { useState, useEffect } from 'react';
import { getNickName, getUID, getIsLoggedIn } from '../services/preference/preference.service';

const useUserDataStorage = () => {
    const [nickName, setNickname] = useState('');
    const [uid, setUid] = useState('');
    const [loggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        getNickName().then(dataNickname => {
            setNickname(dataNickname!);
        });
        getUID().then(dataUid => {
            setUid(dataUid!);
        });
        getIsLoggedIn().then(dataLoggedIn => {
            setIsLoggedIn(dataLoggedIn!);
        });
    }, [nickName]);

    return { nickName, uid, loggedIn };
};

export default useUserDataStorage;
