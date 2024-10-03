// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
 
    apiKey: "AIzaSyDQQTk0FtYDymUvgBYEqB4iWvdhNbq0TAQ",
    authDomain: "reactchat-dbcc6.firebaseapp.com",
    projectId: "reactchat-dbcc6",
    storageBucket: "reactchat-dbcc6.appspot.com",
    messagingSenderId: "636074654705",
    appId: "1:636074654705:web:d5dce439b79bfdc3b42250",
    measurementId: "G-344M62D4J2"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
