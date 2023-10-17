import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXtVeDVbFQmBN1tFiMr3uG9AMOBZhPI7s",
    authDomain: "relax-app-4722f.firebaseapp.com",
    projectId: "relax-app-4722f",
    storageBucket: "relax-app-4722f.appspot.com",
    messagingSenderId: "939407774619",
    appId: "1:939407774619:web:f1204aab4746a803ee873e",
    measurementId: "G-DTLFRS5M4X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();

export { auth }
export { firestore };
// console.log('Firebase initialized successfully');
