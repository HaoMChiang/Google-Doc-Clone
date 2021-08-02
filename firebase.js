import firebase from "firebase";
//require("dotenv").config({ path: "./.env" });

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "doc-clone-f2fb2.firebaseapp.com",
  projectId: "doc-clone-f2fb2",
  storageBucket: "doc-clone-f2fb2.appspot.com",
  messagingSenderId: "335128858969",
  appId: "1:335128858969:web:61f77638d67275cfd3bc48",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
