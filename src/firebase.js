// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAcCHrUihmEZRvfQZRmrFZlnUNVLbYR_Ds",
  authDomain: "ask-bitd.firebaseapp.com",
  projectId: "ask-bitd",
  storageBucket: "ask-bitd.appspot.com",
  messagingSenderId: "1035922209188",
  appId: "1:1035922209188:web:2da7113d37f161ed5c2931",
  measurementId: "G-XB9FY62QYS"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const db=firebaseApp.firestore();
  export {auth,provider};
  export default db;