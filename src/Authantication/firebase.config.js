
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAMZmlfz78llXDcTnrDNiCnXIPd3eRO8PM",
  authDomain: "blog-16a2c.firebaseapp.com",
  projectId: "blog-16a2c",
  storageBucket: "blog-16a2c.appspot.com",
  messagingSenderId: "1040822028080",
  appId: "1:1040822028080:web:4780674a12468655a9aaf5"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;