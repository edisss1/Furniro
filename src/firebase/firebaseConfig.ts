import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCeaag9oqU6VfHvtAEsiEBJbE_IYYgGJXU",
  authDomain: "furniro-69e84.firebaseapp.com",
  projectId: "furniro-69e84",
  storageBucket: "furniro-69e84.appspot.com",
  messagingSenderId: "591367852311",
  appId: "1:591367852311:web:9c1088bcd0fdc7141ce752",
  measurementId: "G-0EEY8S1ZDT",
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
