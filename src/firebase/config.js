import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBRo4COTmDoejkRaFagLSKBPYRbQVGK4bg",
  authDomain: "thedojosite-318b9.firebaseapp.com",
  projectId: "thedojosite-318b9",
  storageBucket: "thedojosite-318b9.appspot.com",
  messagingSenderId: "509797417224",
  appId: "1:509797417224:web:ed215eeb2edc48e8df6cbd",
};
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
