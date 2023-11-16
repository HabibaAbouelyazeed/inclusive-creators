import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)