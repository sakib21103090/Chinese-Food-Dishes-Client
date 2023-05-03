// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr3aP-tCEUuAbXoH3EjM3zf-VJCfSsZYQ",
  authDomain: "chinese-food-dishes.firebaseapp.com",
  projectId: "chinese-food-dishes",
  storageBucket: "chinese-food-dishes.appspot.com",
  messagingSenderId: "311273403870",
  appId: "1:311273403870:web:4c7feef02f1dd99bc1d94f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;