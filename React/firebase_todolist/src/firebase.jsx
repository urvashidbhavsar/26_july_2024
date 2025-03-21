import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBObDSxF8xIFV06c3ybFVh4t3O-3eg-Vpc",
    authDomain: "mydb-todo.firebaseapp.com",
    projectId: "mydb-todo",
    storageBucket: "mydb-todo.firebasestorage.app",
    messagingSenderId: "445018940245",
    appId: "1:445018940245:web:dd98f6fc565943558585dc",
    measurementId: "G-CMYLNG56MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;