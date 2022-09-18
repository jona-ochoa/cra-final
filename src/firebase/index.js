// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbqw9tNFLNzNen4Ww0zxzsX3W3UtKw7xw",
  authDomain: "ob-tasklist-firebase-e147b.firebaseapp.com",
  projectId: "ob-tasklist-firebase-e147b",
  storageBucket: "ob-tasklist-firebase-e147b.appspot.com",
  messagingSenderId: "753339615426",
  appId: "1:753339615426:web:235443aca08c651fe7935b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()