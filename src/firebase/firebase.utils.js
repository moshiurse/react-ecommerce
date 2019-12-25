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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
        }catch(error){
          console.log('error '+error);
        }
    }

    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();

    objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      // console.log(newDocRef);
      batch.set(newDocRef, obj);
    })

    return await batch.commit();
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;