import { GoogleAuthProvider } from 'firebase/auth'
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = ({
// apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// databaseURL: process.env.FIREBASE_DATABASE_URL,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.FIREBASE_APP_ID,
// measurementId: process.env.FIREBASE_MEASUREMENT_ID
// });

const firebaseConfig = {
  apiKey: "AIzaSyA3gqULMuH34vEL_AJlTnVd4TAzKHAp13M",
  authDomain: "latetext-app.firebaseapp.com",
  projectId: "latetext-app",
  storageBucket: "latetext-app.appspot.com",
  messagingSenderId: "466280248490",
  appId: "1:466280248490:web:1583d5a0b12ceb8efd0cd3",
  measurementId: "G-QV2BZYWT5C"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore();

export { auth, db }

export default app;
export const provider = new GoogleAuthProvider()