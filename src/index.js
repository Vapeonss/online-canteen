// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIJ_ak3iDfmeFgweIcyMfFie89s_8QI90",
  authDomain: "online-canteen-86009.firebaseapp.com",
  projectId: "online-canteen-86009",
  storageBucket: "online-canteen-86009.appspot.com",
  messagingSenderId: "80315107210",
  appId: "1:80315107210:web:10065e1be57d5f7e0aea73",
  measurementId: "G-71970YRP1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)


const googleSignInBtn = document.querySelector('.google-sign-in');
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


googleSignInBtn.addEventListener('click', () => {
  signInWithPopup(auth, provider).then((result)=>{
    const user = result.user;
    alert(`hello ${user.displayName}`)
  }).catch((error)=>{
    const errorMessage = error.message;
    alert(`Error ${errorMessage}`)
  });
});