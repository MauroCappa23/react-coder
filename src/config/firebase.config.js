import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCnbqduQPcvi-4n9vrWCw798alWfpbm_NI",
  authDomain: "coderhouse-cursoreact.firebaseapp.com",
  projectId: "coderhouse-cursoreact",
  storageBucket: "coderhouse-cursoreact.appspot.com",
  messagingSenderId: "5312232379",
  appId: "1:5312232379:web:5e6a344cb593a41e6aa29e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);