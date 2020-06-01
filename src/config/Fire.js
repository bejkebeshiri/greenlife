import firebase from 'firebase';


  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyCQJHXUy7R1JYlRnhyQfkdZdehXcayOR7g",
    authDomain: "greenlife-dhm.firebaseapp.com",
    databaseURL: "https://greenlife-dhm.firebaseio.com",
    projectId: "greenlife-dhm",
    storageBucket: "greenlife-dhm.appspot.com",
    messagingSenderId: "140970808047",
    appId: "1:140970808047:web:988320e941ecec1b88811a",
    measurementId: "G-R0LHKJLQYR"
  };

  const fire = firebase.initializeApp(config);
  export default fire;
