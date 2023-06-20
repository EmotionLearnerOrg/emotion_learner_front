import { db } from '../../configs/config.firebase';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

export const existsInsigniaByUser = async (uuid: string, idInsignia: string) => {
    const docRef = doc(db, 'users', uuid);
    const docSnap = await getDoc(docRef);
    let existsInsignia = false;
    if (docSnap.exists()) {
        existsInsignia = docSnap.data().insignias.includes(idInsignia);
    }
    return existsInsignia;
}

export const getAllInsigniasByUser = async (uuid: string) => {
    const docRef = doc(db, 'users', uuid);
    const docSnap = await getDoc(docRef);
    let insignias = [];
    if (docSnap.exists()) {
        insignias = docSnap.data().insignias;
    }
    return insignias;
};

export const saveInsigniaByUser = async (uuid: string, idInsignia: string) => {
    await setDoc(doc(db, 'users', uuid), {
        insignias: [idInsignia]
    });
}

export const saveData = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    console.log('querySnapshot: ', querySnapshot);
    return;
};