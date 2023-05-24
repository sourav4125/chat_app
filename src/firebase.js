import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCjZuFWFg2sKCI-dpxyF1OLIZlUkCDYVG0",
  authDomain: "zomato-cfdfd.firebaseapp.com",
  databaseURL: "https://zomato-cfdfd-default-rtdb.firebaseio.com",
  projectId: "zomato-cfdfd",
  storageBucket: "zomato-cfdfd.appspot.com",
  messagingSenderId: "780756577902",
  appId: "1:780756577902:web:6dbc0f5e4e9536099b407f"
};
  
  firebase.initializeApp(firebaseConfig);
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();
