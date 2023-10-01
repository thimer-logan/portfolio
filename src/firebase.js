import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function fetchCollection(collectionName) {
  let data = JSON.parse(sessionStorage.getItem(collectionName));
  if (data) return data;

  const snapshot = await getDocs(collection(db, collectionName));
  data =
    collectionName === "about"
      ? snapshot.docs[0]?.data()
      : snapshot.docs
          .map((doc) => doc.data())
          .sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0));
  sessionStorage.setItem(collectionName, JSON.stringify(data));

  return data;
}
