import {db} from '../../configs/config.firebase';
import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';
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
  return insignias ?? insigniasDefault;
};

export const saveInsigniaByUser = async ({
  uid,
  nuevasInsignias,
}: {
  uid: string;
  nuevasInsignias: typeInsignias;
}) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      insignias: nuevasInsignias,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
};
export const updateInsigniaByUser = async ({
  uid,
  nuevasInsignias,
}: {
  uid: string;
  nuevasInsignias: typeInsignias;
}) => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      insignias: nuevasInsignias,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
};
