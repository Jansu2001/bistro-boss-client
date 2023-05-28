// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIA6mfMyQ8DcevKjFid1X1NBZNwXgD5jM",
  authDomain: "bistro-boss-restaurant-fe6fd.firebaseapp.com",
  projectId: "bistro-boss-restaurant-fe6fd",
  storageBucket: "bistro-boss-restaurant-fe6fd.appspot.com",
  messagingSenderId: "1024831541451",
  appId: "1:1024831541451:web:a9ceb3cb0042b39b3c4b4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;