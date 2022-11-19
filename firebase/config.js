// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOpV6tCdoc2lEHyY-_buw11wRI_Xa6Z-k",
  authDomain: "image-uploader-a25a0.firebaseapp.com",
  projectId: "image-uploader-a25a0",
  storageBucket: "image-uploader-a25a0.appspot.com",
  messagingSenderId: "872578029934",
  appId: "1:872578029934:web:d648476cdd62259340c97f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db};