import {auth} from '../../configs/config.firebase';
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

export const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  await savePreferenceData(auth.currentUser?.displayName!!, response.user.uid);
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
  await updateProfile(auth.currentUser!!, {displayName: nickName});
  await savePreferenceData(nickName, response.user.uid);
  return response.user.uid;
};

export const logout = async () => {
  await clearPreferenceData();
  return await signOut(auth);
};
