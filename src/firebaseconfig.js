// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArzBRdrkHmQr4GPBb588Nm6dxyNBG_pvc",
  authDomain: "darknetz.firebaseapp.com",
  projectId: "darknetz",
  storageBucket: "darknetz.appspot.com",
  messagingSenderId: "38052501312",
  appId: "1:38052501312:web:c169786d4500827da98ca5",
  measurementId: "G-B3ZKLT5ZL7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyBfsE88sSF1zBHndoEQLvaCNgaUqtkKFGQ",
//   authDomain: "licitvip.firebaseapp.com",
//   projectId: "licitvip",
//   storageBucket: "licitvip.appspot.com",
//   messagingSenderId: "667759286109",
//   appId: "1:667759286109:web:ebecb4b6c7b4e6fdc97ab4",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
