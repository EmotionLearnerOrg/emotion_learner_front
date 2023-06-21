import { useState, useEffect } from 'react';
import { getNickName, getUID, isLoggedIn } from '../services/preference/preference.service';

const useDataUser = () => {
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
        isLoggedIn().then(dataLoggedIn => {
            setIsLoggedIn(dataLoggedIn!);
        });
    }, []);

    return { nickName, uid, loggedIn };
};

export default useDataUser;
