import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAihCdLVMBt25qz8Gnkv5sEdWGaQ9I4vMY",
  authDomain: "hive-c060d.firebaseapp.com",
  projectId: "hive-c060d",
  storageBucket: "hive-c060d.appspot.com",
  messagingSenderId: "397888281753",
  appId: "1:397888281753:web:69db73e85235a79b3fec08",
  measurementId: "G-YCVKH7XWFL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const storage = getStorage(app);
export const db = getFirestore(app);
