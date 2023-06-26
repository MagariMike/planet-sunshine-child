import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBskTdEI08BoXTtpU6b_fSsugb18D6ELx4",
    authDomain: "planet-sunshinechild-archive.firebaseapp.com",
    projectId: "planet-sunshinechild-archive",
    storageBucket: "planet-sunshinechild-archive.appspot.com",
    messagingSenderId: "16709757841",
    appId: "1:16709757841:web:73d73157cc72a3579b0830",

};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const db = getFirestore(app);




export { app, storage, storageRef, db };

