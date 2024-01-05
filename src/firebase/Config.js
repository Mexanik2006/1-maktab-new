import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDFGQI-ObB_jZGTTs3EF4CAGKE4ZDyChxY",
    authDomain: "e1maktab.firebaseapp.com",
    databaseURL: "https://e1maktab-default-rtdb.firebaseio.com",
    projectId: "e1maktab",
    storageBucket: "e1maktab.appspot.com",
    messagingSenderId: "515507265315",
    appId: "1:515507265315:web:c3e557e3e1afb46777f696",
    measurementId: "G-D3ZLJP6K1K"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)