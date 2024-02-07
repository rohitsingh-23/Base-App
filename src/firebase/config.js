// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc195Y-KXCSqATJZUVxwNvaDxAyVg6N9I",
  authDomain: "baseapp-4329e.firebaseapp.com",
  projectId: "baseapp-4329e",
  storageBucket: "baseapp-4329e.appspot.com",
  messagingSenderId: "394118797195",
  appId: "1:394118797195:web:622dd8e8d2b92c6bd8018e",
  measurementId: "G-6HDVF8QZK6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
