import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDMXLKAGilXqthudT3DARjD4vDOLyyloq4",
  authDomain: "crwn-db-d6499.firebaseapp.com",
  databaseURL: "https://crwn-db-d6499.firebaseio.com",
  projectId: "crwn-db-d6499",
  storageBucket: "crwn-db-d6499.appspot.com",
  messagingSenderId: "252121523172",
  appId: "1:252121523172:web:ca88371db61565a60fddf1",
  measurementId: "G-E1EB6WNBQ7"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;