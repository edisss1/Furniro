import { initializeApp, FirebaseOptions } from "firebase/app"

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { fetchFirebaseConfig } from "./config"

const firebaseOptions = (await fetchFirebaseConfig()) as FirebaseOptions

const firebaseConfig = {
  ...firebaseOptions,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage()
