// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWApxLQ5qa1-ASQRrRbZ7dVdXfTsruOXg",
  authDomain: "jobportal-f69b1.firebaseapp.com",
  projectId: "jobportal-f69b1",
  storageBucket: "jobportal-f69b1.appspot.com",
  messagingSenderId: "210723003615",
  appId: "1:210723003615:web:60fc67ca18e8a57cbf1d6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};