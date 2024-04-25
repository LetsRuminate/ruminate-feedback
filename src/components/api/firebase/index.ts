// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// // ===============================================================
// // FOR ACTUAL PROJECT ONLY - COMMENT OUT WHEN USING LOCAL EMULATORS
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);
// // ===============================================================

// ===============================================================
// FOR LOCAL EMULATORS ONLY - COMMENT OUT WHEN USING ACTUAL FIREBASE PROJECT

const auth = getAuth();
connectAuthEmulator(auth, "http://127.0.0.1:9099");
const db = getFirestore();
connectFirestoreEmulator(db, "127.0.0.1", 8080);
const storage = getStorage();
connectStorageEmulator(storage, "127.0.0.1", 9199);
// ===============================================================


export default app;
export { auth, db, storage };
