import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyAKpZJdx_oS5VqGY2LH9SfCSAx1-fMfWlM",
  authDomain: "noteapp-pab-fe151.firebaseapp.com",
  projectId: "noteapp-pab-fe151",
  storageBucket: "noteapp-pab-fe151.firebasestorage.app",
  messagingSenderId: "938241465211",
  appId: "1:938241465211:web:992c7bc0b30b172198fbde"
});

const FIREBASE = firebase;

export default FIREBASE;
