// importing dependencies to use firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD0vdSGIs2fIsJl10fPE6zb3-Gj8bjWpA4",
    authDomain: "blog-with-hooks-7c071.firebaseapp.com",
    projectId: "blog-with-hooks-7c071",
    storageBucket: "blog-with-hooks-7c071.appspot.com",
    messagingSenderId: "497551958079",
    appId: "1:497551958079:web:392b9b2865c8835b12988a"
  };

  // initialize firebase

 firebase.initializeApp(firebaseConfig);

// exporting firestore so that we can use it as needed
 export const firestore = firebase.firestore()
