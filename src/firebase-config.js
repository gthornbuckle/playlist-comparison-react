import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBcorgc2iXnlDfmzuQU-K1shPuo59XHags",
  authDomain: "playlist-compairson.firebaseapp.com",
  databaseURL: "https://playlist-compairson-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "playlist-compairson",
  storageBucket: "playlist-compairson.appspot.com",
  messagingSenderId: "194643613176",
  appId: "1:194643613176:web:88d86521726ef87cc1b20d",
  measurementId: "G-E9S87ZS8QQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);