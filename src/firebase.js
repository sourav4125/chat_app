import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCdr9H2msRQGwxoUeOv1qaPjR8uGuxLWaE",
  authDomain: "chat-apk-a7861.firebaseapp.com",
  projectId: "chat-apk-a7861",
  storageBucket: "chat-apk-a7861.appspot.com",
  messagingSenderId: "834794297650",
  appId: "1:834794297650:web:ed58940c70944339379f2b",
  measurementId: "G-C461C1PS3W"
  };
  
  firebase.initializeApp(firebaseConfig);
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();
