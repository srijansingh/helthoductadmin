import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAm77uHqJdQM8fI2FfqA9Zj1zWb_KiWOsY",
    authDomain: "techronx-5f602.firebaseapp.com",
    databaseURL: "https://techronx-5f602.firebaseio.com",
    projectId: "techronx-5f602",
    storageBucket: "techronx-5f602.appspot.com",
    messagingSenderId: "348653710018",
    appId: "1:348653710018:web:18149d51993ea52546295b",
    measurementId: "G-93T37HLYHV"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;