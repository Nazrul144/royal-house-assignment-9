// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5bWLpv8gsjdcox_0xMcWrf25YqEpshKg",
  authDomain: "royal-house-assignment-9.firebaseapp.com",
  projectId: "royal-house-assignment-9",
  storageBucket: "royal-house-assignment-9.appspot.com",
  messagingSenderId: "484489722584",
  appId: "1:484489722584:web:ec14beb85ac517ad8535ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;