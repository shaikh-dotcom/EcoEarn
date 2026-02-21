import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEvMHJnVIw-jhcvh_c2zoT2iCnOW5KoJ8",
  authDomain: "ecoearn-fee5b.firebaseapp.com",
  projectId: "ecoearn-fee5b",
  storageBucket: "ecoearn-fee5b.firebasestorage.app",
  messagingSenderId: "677545713290",
  appId: "1:677545713290:web:27664787d4ffb2242f9773",
  measurementId: "G-GKDY28VMCC",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
