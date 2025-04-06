import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy28ywGYatOCNLOIRQXXvZ2UIG5DkNaxU",
  authDomain: "nwitter-reloaded-3c2ef.firebaseapp.com",
  projectId: "nwitter-reloaded-3c2ef",
  storageBucket: "nwitter-reloaded-3c2ef.firebasestorage.app",
  messagingSenderId: "138651447907",
  appId: "1:138651447907:web:58f02f19c2486600623e56",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
