import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"
import { FirebaseApp } from "firebase/app"
import { Analytics } from "firebase/analytics"
import { Firestore } from "firebase/firestore"
import { FirebaseStorage } from "firebase/storage"
import {
  initFirebase,
  app,
  analytics,
  db,
  storage,
} from "../firebase/firebaseConfig"
import Loading from "../components/utilityComponents/Loading"

interface FirebaseContextProps {
  app: FirebaseApp | null
  analytics: Analytics | null
  db: Firestore | null
  storage: FirebaseStorage | null
}

const FirebaseContext = createContext<FirebaseContextProps>({
  app: null,
  analytics: null,
  db: null,
  storage: null,
})

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const [firebaseState, setFirebaseState] = useState<FirebaseContextProps>({
    app: null,
    analytics: null,
    db: null,
    storage: null,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeFirebase = async () => {
      await initFirebase()
      setFirebaseState({ app, analytics, db, storage })
      setLoading(false)
    }

    initializeFirebase()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <FirebaseContext.Provider value={firebaseState}>
      {children}
    </FirebaseContext.Provider>
  )
}
