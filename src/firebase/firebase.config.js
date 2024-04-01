// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzevuRnodYjAiuB_n_12AkdmvNmckgd24",
  authDomain: "auth-moha-milon-4677d.firebaseapp.com",
  projectId: "auth-moha-milon-4677d",
  storageBucket: "auth-moha-milon-4677d.appspot.com",
  messagingSenderId: "205872040655",
  appId: "1:205872040655:web:372513d233598d97af85ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 