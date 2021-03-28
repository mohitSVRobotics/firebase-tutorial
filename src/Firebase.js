import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCtW0owFn6etiJJRVS7gFhVeK40qDp4esQ",
  authDomain: "tutorial-project-1c3e4.firebaseapp.com",
  projectId: "tutorial-project-1c3e4",
  storageBucket: "tutorial-project-1c3e4.appspot.com",
  messagingSenderId: "378488910086",
  appId: "1:378488910086:web:8f2449d050ec09a6d82e87",
  measurementId: "G-MC6B6RM3K7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;