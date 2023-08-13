// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtXkiKNE_aqhHDe9ypwLopv8Wf9p93akA",
  authDomain: "newsletter-d762e.firebaseapp.com",
  projectId: "newsletter-d762e",
  storageBucket: "newsletter-d762e.appspot.com",
  messagingSenderId: "678759779802",
  appId: "1:678759779802:web:289449cd0148a1a820c4e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
