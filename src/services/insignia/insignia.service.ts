import {db} from '../../configs/config.firebase';
import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';
import {insigniasDefault, typeInsignias} from '../../types';

export const getInsigniasByUser = async ({
  uid,
}: {
  uid: string;
}): Promise<typeInsignias> => {
  const docRef = doc(db, 'insignias', uid);

  return getDoc(docRef)
    .then(docSnap => {
      let insignias = [];
      if (docSnap.exists()) {
        insignias = docSnap.data().insignias;
      }

      return insignias.length === 0 ? insigniasDefault : insignias;
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
    await setDoc(doc(db, 'insignias', uid), {
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
    await updateDoc(doc(db, 'insignias', uid), {
      insignias: nuevasInsignias,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
};
