import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyA6unpqvLblUQfMTHMW72g2CspZb0JB90U",
        authDomain: "facebook-b2543.firebaseapp.com",
        projectId: "facebook-b2543",
        storageBucket: "facebook-b2543.appspot.com",
        messagingSenderId: "184278303201",
        appId: "1:184278303201:web:cac7cae1f02638b03a92a0",
        measurementId: "G-15L4Z1JDSP"

});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};