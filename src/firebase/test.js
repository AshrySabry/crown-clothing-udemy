import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('DGCryggGObX6R7hsA4HF').collection('cartIems').doc('N8uBRjmSQmsxfSen0NTA');
//Below is another way to declare 
// firestore.doc('/users/DGCryggGObX6R7hsA4HF/cartIems/N8uBRjmSQmsxfSen0NTA');
// firestore.collection('/users/DGCryggGObX6R7hsA4HF/cartIems');