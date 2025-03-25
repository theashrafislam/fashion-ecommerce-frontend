// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoKBHiGyMXjoYsmSpBRI4Bzrklf6SHtpI",
  authDomain: "fashion-e-commerce-277e4.firebaseapp.com",
  projectId: "fashion-e-commerce-277e4",
  storageBucket: "fashion-e-commerce-277e4.firebasestorage.app",
  messagingSenderId: "331870967645",
  appId: "1:331870967645:web:dd6b13d6752344ebae7ab4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);