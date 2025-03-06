import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyA5DMsfZRKwksIVne__cMUIAUe00yRdujI",
    authDomain: "arch-171f3.firebaseapp.com",
    projectId: "arch-171f3",
    storageBucket: "arch-171f3.firebasestorage.app",
    messagingSenderId: "751189303816",
    appId: "1:751189303816:web:613dcb4105a35651bf27bd"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
