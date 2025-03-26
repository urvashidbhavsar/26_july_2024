import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import for authentication
import { getAuth } from "firebase/auth";
import { alignPropType } from "react-bootstrap/esm/types";

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
export const db = getFirestore(app);
export const auth = getAuth();

// export default db;
export default app;