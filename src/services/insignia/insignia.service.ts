import {db} from '../../configs/config.firebase';
import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';
import {insigniasDefault, typeInsignias} from '../../types/insignias';

export const getInsigniasByUser = async ({uid}: {uid: string}) => {
  const docRef = doc(db, 'users', uid);

  return getDoc(docRef)
    .then(docSnap => {
      let insignias = [];
      if (docSnap.exists()) {
        insignias = docSnap.data().insignias;
      }

      return insignias ?? insigniasDefault;
    })
    .catch(error => {
      throw error.parsedError;
    });
};

export const createInsigniaByUser = async ({
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
