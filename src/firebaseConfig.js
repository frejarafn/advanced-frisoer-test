import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCif7tJyCQPmLKToNftC8qPvGCgNC80KI",
  authDomain: "frisoersalonapp.firebaseapp.com",
  projectId: "frisoersalonapp",
  storageBucket: "frisoersalonapp.appspot.com",
  messagingSenderId: "739312365174",
  appId: "1:739312365174:web:452aa2f6978d9aa746f957",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
