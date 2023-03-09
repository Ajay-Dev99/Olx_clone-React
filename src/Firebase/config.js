import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCU1DOS8rqIn6xRUWiuXm8byIyIXzX0jV0",
    authDomain: "olx-react-d61c6.firebaseapp.com",
    projectId: "olx-react-d61c6",
    storageBucket: "olx-react-d61c6.appspot.com",
    messagingSenderId: "994002105346",
    appId: "1:994002105346:web:85a87deae6a854ece0e31b",
    measurementId: "G-2KW6CTZH0F"
  };


const app = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();




export {auth,db,storage};