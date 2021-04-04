import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTsf8s6eORCyyLYceArx6SZJnqGAh7eoA",
    authDomain: "crwn-db-16f76.firebaseapp.com",
    projectId: "crwn-db-16f76",
    storageBucket: "crwn-db-16f76.appspot.com",
    messagingSenderId: "549491868085",
    appId: "1:549491868085:web:b75e19ddac7b38698619fc",
    measurementId: "G-ZY335D90LQ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  } ;

firebase.initializeApp(config);
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;