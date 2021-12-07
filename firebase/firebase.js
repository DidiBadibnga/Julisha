import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";

const clientCredentials = {
  /*apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,*/
  apiKey: "AIzaSyC_Te9Wvvw8MC8tBWbMXuDnx1Vm76nmwk4",
  authDomain: "julisha-final-version.firebaseapp.com",
  projectId: "julisha-final-version",
  storageBucket: "julisha-final-version.appspot.com",
  messagingSenderId: "921697857292",
  appId: "1:921697857292:web:7386c549a09502dd6c2329",
  measurementId: "${config.measurementId}"
};


const app = !getApps().length ? initializeApp(clientCredentials) : getApps();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };