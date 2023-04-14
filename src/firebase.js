// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics"
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDUB4h1e-3G01ZIgR_Ta_7mUT6v_ws261k",
	authDomain: "project-with--mentor.firebaseapp.com",
	projectId: "project-with--mentor",
	storageBucket: "project-with--mentor.appspot.com",
	messagingSenderId: "598477082397",
	appId: "1:598477082397:web:647ede048f6a2ed2cb5bf4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app)

export const auth = getAuth(app)