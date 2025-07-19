import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzCvQRQH1_OzsINoII0j_zbTpbhlThV9c",
  authDomain: "foodzing-15bfb.firebaseapp.com",
  databaseURL: "https://foodzing-15bfb-default-rtdb.firebaseio.com",
  projectId: "foodzing-15bfb",
  storageBucket: "foodzing-15bfb.firebasestorage.app",
  messagingSenderId: "512091835753",
  appId: "1:512091835753:web:0a87f66bbcc7ea084601f8",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
