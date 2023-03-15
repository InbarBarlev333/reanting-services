// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnhTDn89KGWcBN1cjqaWMO7OqltGIOZZo",
  authDomain: "chat-app-7bc70.firebaseapp.com",
  projectId: "chat-app-7bc70",
  storageBucket: "chat-app-7bc70.appspot.com",
  messagingSenderId: "910254573895",
  appId: "1:910254573895:web:f6392e5322353036852462",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
