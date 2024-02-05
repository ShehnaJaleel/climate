import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMp_sxNegvJwmuSzQs3wtvp5a3tCpTr0Q",
  authDomain: "weather-ba52f.firebaseapp.com",
  projectId: "weather-ba52f",
  storageBucket: "weather-ba52f.appspot.com",
  messagingSenderId: "7021025015",
  appId: "1:7021025015:web:1797adc3d1f2642c3fa5f2",
  measurementId: "G-897MDRNGJ5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;