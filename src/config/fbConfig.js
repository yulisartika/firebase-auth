import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyCSUdSxRCezkqYzXRxhn0Z0Rs7wWpNOw0I",
  authDomain: "first-firebase-exercise-f1dca.firebaseapp.com",
  databaseURL:
    "https://first-firebase-exercise-f1dca-default-rtdb.firebaseio.com",
  projectId: "first-firebase-exercise-f1dca",
  storageBucket: "first-firebase-exercise-f1dca.appspot.com",
  messagingSenderId: "356457952358",
  //   appId: "1:356457952358:web:762a9109d0576fa850e9a7",
  //   measurementId: "G-LP6KVD3L0G",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default firebase;
