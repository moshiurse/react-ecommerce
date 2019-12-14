import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDvBk6AUBOLEEooC4lG3XIqccPrMs1hWPE",
    authDomain: "ecommerce-db-98574.firebaseapp.com",
    databaseURL: "https://ecommerce-db-98574.firebaseio.com",
    projectId: "ecommerce-db-98574",
    storageBucket: "ecommerce-db-98574.appspot.com",
    messagingSenderId: "658123343433",
    appId: "1:658123343433:web:9946e76c18535ebd576198",
    measurementId: "G-77V1PBF92H"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;