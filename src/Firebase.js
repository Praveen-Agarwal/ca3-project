// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRXjU0HAaafH7c5RuxVwL-uDPJjbj_03c",
  authDomain: "todo-list-dc20d.firebaseapp.com",
  projectId: "todo-list-dc20d",
  storageBucket: "todo-list-dc20d.appspot.com",
  messagingSenderId: "1096566689364",
  appId: "1:1096566689364:web:289eb2d5e3a9bef40ee7c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};
