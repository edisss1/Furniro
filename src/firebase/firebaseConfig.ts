import { initializeApp, FirebaseOptions, FirebaseApp } from "firebase/app"
import { getAnalytics, Analytics } from "firebase/analytics"
import { getFirestore, Firestore } from "firebase/firestore"
import { getStorage, FirebaseStorage } from "firebase/storage"
import { fetchFirebaseConfig } from "./config"

let app: FirebaseApp
let analytics: Analytics
let db: Firestore
let storage: FirebaseStorage

export async function initFirebase() {
  const firebaseConfig: FirebaseOptions = await fetchFirebaseConfig()
  app = initializeApp(firebaseConfig)
  analytics = getAnalytics(app)
  db = getFirestore(app)
  storage = getStorage(app)
  console.log("Firebase initialized:", { app, analytics, db, storage })
}

export { app, analytics, db, storage }
