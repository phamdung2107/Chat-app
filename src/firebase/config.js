import firebase from "firebase/compat/app";
import 'firebase/compat/analytics'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA5OIM-ogGnDqAbt8iNfWyZjIvp5r0SrWY",
  authDomain: "fun-chat-8c33e.firebaseapp.com",
  projectId: "fun-chat-8c33e",
  storageBucket: "fun-chat-8c33e.appspot.com",
  messagingSenderId: "409191702642",
  appId: "1:409191702642:web:73e5d7b652a3a0e12062eb",
  measurementId: "G-Y0YF5EGPKS"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
// }

export { db, auth };
export default firebase;