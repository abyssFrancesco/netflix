// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAyQk24mCMLZJUA__TDs7O5Bw3yTVZDrQ",
  authDomain: "netflix-clone-479a2.firebaseapp.com",
  projectId: "netflix-clone-479a2",
  storageBucket: "netflix-clone-479a2.firebasestorage.app",
  messagingSenderId: "137467573792",
  appId: "1:137467573792:web:1f3d94950425611c816e45",
  measurementId: "G-2V5PQEHTKY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};
export { auth, db, login, signup, logout };
