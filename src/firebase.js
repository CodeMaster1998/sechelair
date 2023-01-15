import firebase from 'firebase/compat/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCPdNAP_WCe02aCH2qtXv54oVhrZDJX9Qs",
    authDomain: "contact-form-4f092.firebaseapp.com",
    databaseURL: "https://contact-form-4f092-default-rtdb.firebaseio.com",
    projectId: "contact-form-4f092",
    storageBucket: "contact-form-4f092.appspot.com",
    messagingSenderId: "985679118752",
    appId: "1:985679118752:web:5804c56db308f710e624c5"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();