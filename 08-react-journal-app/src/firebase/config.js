// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_k5O51Qh_yYpzihw-eoIxxvRizgOx_fM",
  authDomain: "desarrollo-lusalas16.firebaseapp.com",
  projectId: "desarrollo-lusalas16",
  storageBucket: "desarrollo-lusalas16.appspot.com",
  messagingSenderId: "609638428723",
  appId: "1:609638428723:web:fd9953ea39f5b0df05b346"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );