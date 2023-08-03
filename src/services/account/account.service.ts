import {auth, db} from '../../configs/config.firebase';
import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  clearPreferenceData,
  savePreferenceData,
} from '../preference/preference.service';
import {insigniasDefault} from '../../types/insignias';
import {createInsigniaByUser} from '../insignia/insignia.service';
export const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
      .then(async response => {
        const nickName = await getDisplayName({uid: response.user.uid});
        await savePreferenceData(nickName, response.user.uid);
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
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(auth.currentUser!!, {displayName: nickName});
    await createInsigniaByUser({
      uid: response.user.uid,
      nuevasInsignias: insigniasDefault,
    });
    await setDisplayName(nickName, response.user.uid!!);
    await savePreferenceData(nickName, response.user.uid);
    return response.user.uid;
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
};

export const getDisplayName = async ({uid}: {uid: string}): Promise<any> => {
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
};

export const setDisplayName = async (nickName: string, uid: string) => {
  try {
    await setDoc(doc(db, 'users', uid!), {
      nickName: nickName,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
  return nickName;
};

export const updateDisplayName = async ({
  nickName,
  uid,
}: {
  nickName: string;
  uid: string;
}) => {
  try {
    await updateDoc(doc(db, 'users', uid!!), {
      nickName: nickName,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
};

export const logout = async () => {
  await clearPreferenceData();
  return await signOut(auth);
};
