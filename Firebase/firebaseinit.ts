// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkyfJA5WXHEGj-4dXPzohvaSFRe2GoaNM",
  authDomain: "anonymous-social-media-56803.firebaseapp.com",
  projectId: "anonymous-social-media-56803",
  storageBucket: "anonymous-social-media-56803.appspot.com",
  messagingSenderId: "286157802831",
  appId: "1:286157802831:web:2173bb9eb529e85c3bc93a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);