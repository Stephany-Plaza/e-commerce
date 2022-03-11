import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDxGQg824s_jS_6iw3zgZbzDUS9Xxd4KYg",
  authDomain: "proyecto-react-1-f8902.firebaseapp.com",
  projectId: "proyecto-react-1-f8902",
  storageBucket: "proyecto-react-1-f8902.appspot.com",
  messagingSenderId: "410292745929",
  appId: "1:410292745929:web:bb8fed8e08e30462e6ff18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)