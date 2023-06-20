import { useState, useEffect } from 'react';
import { getNickName, getUID } from '../services/preference/preference.service';

const useDataUser = () => {
    const [nickName, setNickname] = useState('');
    const [uid, setUid] = useState('');

    useEffect(() => {
        getNickName().then(dataNickname => {
            setNickname(dataNickname!);
        });
        getUID().then(dataUid => {
            setUid(dataUid!);
        });
    }, []);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             console.log('viene?');

    //             const nickNameSto = await getNickName();
    //             // const jsonData = await response.json();
    //             setNickname(nickNameSto!);
    //             setIsLoading(false);
    //         } catch (error2) {
    //             setError(error2);
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return { nickName, uid };
};

export default useDataUser;
