import {db} from '../../configs/config.firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import {insigniasDefault, typeInsignias} from '../../types/insignias';

export const existsInsigniaByUser = async ({
  uid,
  idInsignia,
}: {
  uid: string;
  idInsignia: string;
}) => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  let existsInsignia = false;
  if (docSnap.exists()) {
    existsInsignia = docSnap.data().insignias.includes(idInsignia);
  }
  return existsInsignia;
};

export const getAllInsigniasByUser = async ({uid}: {uid: string}) => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  let insignias = [];
  if (docSnap.exists()) {
    insignias = docSnap.data().insignias;
  }
  return insignias;
};

export const saveInsigniaByUser = async ({
  uid,
  idInsignia,
  updateProv,
}: {
  uid: string;
  idInsignia: string;
  updateProv: any;
}) => {
  const insigniasUsuario = await getAllInsigniasByUser({uid});
  let nuevasInsignias: typeInsignias = insigniasUsuario;
  if (insigniasUsuario) {
    //caso en el que ya tenia alguna insignia
    nuevasInsignias = {...insigniasUsuario, ...{[idInsignia]: true}};
    await updateDoc(doc(db, 'users', uid), {
      insignias: nuevasInsignias,
    })
      .then(
        () => updateProv({insigniasProp: nuevasInsignias}), //esto es para actualizar el estado global, (provider)
      )
      .catch(dataerr => console.log('no se pudo saveInsigniaByUser', dataerr));
  } else {
    //caso en el que tenia 0 insignias
    nuevasInsignias = {
      ...insigniasDefault,
      ...{[idInsignia]: true},
    };
    await setDoc(doc(db, 'users', uid), {
      insignias: nuevasInsignias,
    })
      .then(() => updateProv({insigniasProp: nuevasInsignias})) //esto es para actualizar el estado global, (provider)
      .catch(dataerr => console.log('no se pudo saveInsigniaByUser', dataerr));
  }
};

export const saveData = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  console.log('querySnapshot: ', querySnapshot);
  return;
};
