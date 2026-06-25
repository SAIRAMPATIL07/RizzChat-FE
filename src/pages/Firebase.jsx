// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtDh55YIRsKFQDeK9VvtGcCnUlP1v60cw",
  authDomain: "auth-13-01-2007.firebaseapp.com",
  projectId: "auth-13-01-2007",
  storageBucket: "auth-13-01-2007.firebasestorage.app",
  messagingSenderId: "31537857883",
  appId: "1:31537857883:web:5801bd25b703e5fa82c67e",
  measurementId: "G-REVXC748WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;