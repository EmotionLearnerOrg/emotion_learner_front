import { auth } from '../../configs/config.firebase';
import { db } from '../../configs/config.firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  getUID,
  clearPreferenceData,
  savePreferenceData,
} from '../preference/preference.service';

export const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  const nickName = await getDisplayName(response.user.uid);
  await savePreferenceData(nickName, response.user.uid);
  return response.user.uid;
};

export const loginWithEmailAndPassword2 = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        savePreferenceData(auth.currentUser?.displayName!!, response.user.uid);
        return response.user.uid;
      })
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
};

export const signUpWithEmailAndPassword = async ({
  email,
  password,
  nickName,
}: {
  email: string;
  password: string;
  nickName: string;
}) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser!!, { displayName: nickName });
  await setDisplayName(nickName, response.user.uid!!);
  await savePreferenceData(nickName, response.user.uid);
  return response.user.uid;
};

export const getDisplayName = async (uid: string) => {
  const docRef = doc(db, 'users', uid!);
  return getDoc(docRef)
    .then(docSnap => {
      let nickName = '';
      if (docSnap.exists()) {
        nickName = docSnap.data().nickName;
      }
      return nickName;
    })
    .catch(error => {
      throw error.parsedError;
    });
}

export const setDisplayName = async (nickName: string, uid: string) => {
  try {
    await setDoc(doc(db, 'users', uid!), {
      nickName: nickName
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
  return nickName;
}

export const updateDisplayName = async (nickName: string) => {
  try {
    const uid = await getUID();
    await updateDoc(doc(db, 'users', uid!!), {
      nickName: nickName
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
  return nickName;
}

export const logout = async () => {
  await clearPreferenceData();
  return await signOut(auth);
};
