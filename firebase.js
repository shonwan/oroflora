import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi45ap9iHu5dfpxZXcL-dVjxAHrj5ioOQ",
  // authDomain: "mobprog-19efe.firebaseapp.com",
  projectId: "mobprog-19efe",
  storageBucket: "mobprog-19efe.appspot.com",
  messagingSenderId: "697143695532",
  appId: "1:697143695532:android:18f9a545d2fbf0981ba709"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}