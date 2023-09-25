import { auth, db } from '../../configs/config.firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail
} from 'firebase/auth';
import {
  clearPreferenceData,
  savePreferenceData,
} from '../preference/preference.service';
import { insigniasDefault } from '../../types';
import { createInsigniaByUser } from '../insignia/insignia.service';
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
        if (!response.user.emailVerified) {
          throw new Error('Error not verified email');
        }
        const nickName = await getDisplayName({ uid: response.user.uid });
        const subscriptionType = await getSubscriptionType({ uid: response.user.uid, });
        await savePreferenceData(nickName, subscriptionType, response.user.uid);
        return response.user.uid;
      })
      .catch();
  } catch (error) {
    throw new Error('Error signInWithEmailAndPassword function: ' + error);
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
    await sendEmailVerification(auth.currentUser!!);
    await updateProfile(auth.currentUser!!, { displayName: nickName });
    await createInsigniaByUser({
      uid: response.user.uid,
      nuevasInsignias: insigniasDefault,
    });
    await setInitialData(nickName, 'PRUEBA', response.user.uid!!);
    await savePreferenceData(nickName, 'PRUEBA', response.user.uid);
    return response.user.uid;
  } catch (error) {
    throw new Error('Error signUpWithEmailAndPassword function: ' + error);
  }
};

export const sendPassResetEmail = async ({
  email
}: {
  email: string;
}) => {
  try {
    await sendPasswordResetEmail(auth, email)
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error sendPassResetEmail function conection: ' + error);
  }
};

export const setInitialData = async (
  nickName: string,
  subscriptionType: string,
  uid: string,
) => {
  try {
    await setDoc(doc(db, 'users', uid!), {
      nickName: nickName,
      subscriptionType: subscriptionType,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
  return uid;
};

export const getDisplayName = async ({ uid }: { uid: string }): Promise<any> => {
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

export const getSubscriptionType = async ({
  uid,
}: {
  uid: string;
}): Promise<any> => {
  const docRef = doc(db, 'users', uid!);
  return getDoc(docRef)
    .then(docSnap => {
      let subscriptionType = 'PRUEBA';
      if (docSnap.exists()) {
        subscriptionType = docSnap.data().subscriptionType;
      }
      return subscriptionType;
    })
    .catch(error => {
      throw error.parsedError;
    });
};

export const updateSubscriptionType = async ({
  subscriptionType,
  uid,
}: {
  subscriptionType: string;
  uid: string;
}) => {
  try {
    await updateDoc(doc(db, 'users', uid!!), {
      subscriptionType: subscriptionType,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
};

export const updateUrlApi = async ({
  urlApi,
  uid,
}: {
  urlApi: string;
  uid: string;
}) => {
  try {
    await updateDoc(doc(db, 'users', uid!!), {
      urlApi: urlApi,
    })
      .then()
      .catch();
  } catch (error) {
    throw new Error('Error creating document: ' + error);
  }
};

export const getUrlApi = async ({ uid }: { uid: string }): Promise<any> => {
  const docRef = doc(db, 'users', uid!);
  return getDoc(docRef)
    .then(docSnap => {
      let urlApi = 'https://many-sole-solely.ngrok-free.app/detect-emotion';
      if (docSnap.exists()) {
        urlApi = docSnap.data().urlApi;
      }
      return urlApi;
    })
    .catch(error => {
      throw error.parsedError;
    });
};

export const logout = async () => {
  await clearPreferenceData();
  return await signOut(auth);
};