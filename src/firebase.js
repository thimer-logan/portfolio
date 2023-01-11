import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyATPEhkT_PaJbPcRrRV0e5hPaNPB64rZ2Y",
  authDomain: "portfolio-81faf.firebaseapp.com",
  projectId: "portfolio-81faf",
  storageBucket: "portfolio-81faf.appspot.com",
  messagingSenderId: "872208875019",
  appId: "1:872208875019:web:a1b35b2ccdd9a1ca78110e",
  measurementId: "G-C6ST37SEL5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);