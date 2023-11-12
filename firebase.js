// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB0jydhV_Qhm6iTuSrQlVDX7FanxDAW1o",
  authDomain: "fir-auth-2eb61.firebaseapp.com",
  projectId: "fir-auth-2eb61",
  storageBucket: "fir-auth-2eb61.appspot.com",
  messagingSenderId: "975937072419",
  appId: "1:975937072419:web:aa7345bd2d28c8273d3096",
  measurementId: "G-3NTP1CGP0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//let app;
//if(firebase.apps.length === 0){
//    app = firebase.initializeApp(firebaseConfig);
//} else{
//    app = firebase.app()
//}
//const auth = firebase.auth()

//export{auth};
