//autorizacion de registor de google , se debe verificar
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    return payload;
}

// opciones de firebase para el hosting 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSP5ZI4Gl8MQlHE0ziya3TN47pOMEOKd4",
  authDomain: "proyecto-828b0.firebaseapp.com",
  projectId: "proyecto-828b0",
  storageBucket: "proyecto-828b0.firebasestorage.app",
  messagingSenderId: "945223501680",
  appId: "1:945223501680:web:8dcc7afb2a18dca67031b5",
  measurementId: "G-3JVZL1K4SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//