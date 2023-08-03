// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4esseTQ2crKk1Jx35j76ISAifvp82x_M',
  authDomain: 'emotionlearner-a7179.firebaseapp.com',
  projectId: 'emotionlearner-a7179',
  storageBucket: 'emotionlearner-a7179.appspot.com',
  messagingSenderId: '725386975068',
  appId: '1:725386975068:web:ebaaa974e2a4538de11399',
  measurementId: 'G-9QHG5J1S36',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
