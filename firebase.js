import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHtkSgmwtMH2ycExSlW_Im__lyJ8-ZKXs",
    authDomain: "twitter-clone-8d137.firebaseapp.com",
    projectId: "twitter-clone-8d137",
    storageBucket: "twitter-clone-8d137.appspot.com",
    messagingSenderId: "294895433007",
    appId: "1:294895433007:web:294420999a6f1e31ef9dda",
    measurementId: "G-YBP72C24F0",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const db = app.firestore();

// no analitycs

// go authentication
// enable google
// valid email
// web sdk configuration
// change .env
