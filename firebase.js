import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDKR4eZ1Xeoks9jw9Shd_MakYgiR4OWnRc",
  authDomain: "projet-transverse-310013.firebaseapp.com",
  projectId: "projet-transverse-310013",
  storageBucket: "projet-transverse-310013.appspot.com",
  messagingSenderId: "425223784944",
  appId: "1:425223784944:web:eb8641adc63bdbf9cff535",
  measurementId: "G-CJ5CL6KC49"
};

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const database = firebaseapp.firestore();


  export default database;