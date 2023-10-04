// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBEu2Egf9cQK0qrllLOGvSyGYYGdemm8Y",
  authDomain: "dragon-news-react-auth-f4d35.firebaseapp.com",
  projectId: "dragon-news-react-auth-f4d35",
  storageBucket: "dragon-news-react-auth-f4d35.appspot.com",
  messagingSenderId: "505238909418",
  appId: "1:505238909418:web:57b1d36f589507d5db8293"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;