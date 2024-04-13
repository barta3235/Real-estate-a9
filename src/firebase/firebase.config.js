// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVyp1pziqxlwYV0qrd-ijbT_4birgU6So",
  authDomain: "m9-a9-realestate.firebaseapp.com",
  projectId: "m9-a9-realestate",
  storageBucket: "m9-a9-realestate.appspot.com",
  messagingSenderId: "518285279091",
  appId: "1:518285279091:web:a2b5e444b3683865868f06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;