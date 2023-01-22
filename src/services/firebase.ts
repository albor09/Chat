// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./fbconfig";
import {
  getAuth,
  Auth,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

// Initialize Firebase
export let app: FirebaseApp | undefined;
export let db: Firestore | undefined;
export let appAuth: Auth | undefined;
export let analytics: Analytics | undefined;

export const initFirebase = () => {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    appAuth = getAuth(app);
    setPersistence(appAuth, browserLocalPersistence);
    analytics = getAnalytics();
  } catch (e) {
    app = undefined;
    db = undefined;
    appAuth = undefined;
    analytics = undefined;
    console.error("Authentication failed to initialize", e);
  }
};
