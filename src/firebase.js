import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZaQmPKn5ywSaeob2XM8YOcgtpZiNbtEo",
    authDomain: "bt3103-week-6-ea835.firebaseapp.com",
    projectId: "bt3103-week-6-ea835",
    storageBucket: "bt3103-week-6-ea835.appspot.com",
    messagingSenderId: "766991790981",
    appId: "1:766991790981:web:cee6639ac427b725abcaec",
    measurementId: "G-4W74EBM01F"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
  