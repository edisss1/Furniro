import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getRedirectResult,
  linkWithCredential,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  User,
} from "firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"
import { auth, provider } from "../firebase/firebaseConfig"
import { FirebaseError } from "firebase/app"

interface AuthContextProps {
  onLogin: (e: React.ChangeEvent<HTMLFormElement>) => void
  onSignUp: (e: React.ChangeEvent<HTMLFormElement>) => void
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  signOut: () => Promise<void>
  signInWithGoogle: () => Promise<void>
  linkEmailAndPassword: (email: string, password: string) => Promise<void>
  signInWithGoogleMobile: () => Promise<void>
  user: User | null
  error: FirebaseError | null
  email: string
  password: string
  setError: (value: React.SetStateAction<FirebaseError | null>) => void
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<FirebaseError | null>(null)
  const [user, setUser] = useState<User | null>(null)

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onAnonymousSignIn = async () => {
    try {
      return new Promise<void>((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            setUser(user)
            setError(null)
            resolve()
          } else {
            try {
              const userCredential = await signInAnonymously(auth)
              const newUser = userCredential.user
              setUser(newUser)
              setError(null)
              resolve()
            } catch (err) {
              setError(err as FirebaseError)
              reject(err)
            }
          }

          unsubscribe()
        })
      })
    } catch (err) {
      setError(err as FirebaseError)
    }
  }

  useEffect(() => {
    onAnonymousSignIn()
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  const linkEmailAndPassword = async (email: string, password: string) => {
    if (user) {
      try {
        const credential = EmailAuthProvider.credential(email, password)
        const result = await linkWithCredential(user, credential)
        setUser(result.user)
      } catch (err) {
        console.error("linkEmailAndPassword - error:", err)
        setError(err as FirebaseError)
      }
    }
  }

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      setUser(result.user)
      setError(null)
    } catch (err) {
      console.error("signInWithGoogle - error:", (err as FirebaseError).message)
      setError(err as FirebaseError)
    }
  }

  const signInWithGoogleMobile = async () => {
    try {
      // Сохраняем email и пароль в sessionStorage, если они есть
      if (email) sessionStorage.setItem("email", email)
      if (password) sessionStorage.setItem("password", password)

      // Запускаем процесс авторизации через редирект
      await signInWithRedirect(auth, provider)
    } catch (err) {
      console.error(
        "signInWithGoogleMobile - error:",
        (err as FirebaseError).message
      )
      setError(err as FirebaseError)
    }
  }

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth)
        if (result) {
          setUser(result.user)
          setError(null)

          sessionStorage.removeItem("email")
          sessionStorage.removeItem("password")
        } else {
          const savedEmail = sessionStorage.getItem("email")
          const savedPassword = sessionStorage.getItem("password")

          if (savedEmail) setEmail(savedEmail)
          if (savedPassword) setPassword(savedPassword)
        }
      } catch (err) {
        console.error("Error handling redirect result:", err as FirebaseError)
        setError(err as FirebaseError)
      }
    }

    handleRedirectResult()
  }, [])

  const signOut = async () => {
    try {
      await auth.signOut()
      setUser(null)
      setError(null)
    } catch (err) {
      console.error("signOut - error:", err)
      setError(err as FirebaseError)
    }
  }

  const onLogin = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        setError(null)
      })
      .catch((err) => {
        setError(err as FirebaseError)
      })
  }

  const onSignUp = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
        setError(null)
      })
      .catch((error) => {
        setError(error as FirebaseError)
        console.error(error)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        error,
        setError,
        user,
        signOut,
        signInWithGoogle,
        signInWithGoogleMobile,
        onLogin,
        onSignUp,
        handleEmail,
        handlePassword,
        linkEmailAndPassword,
        email,
        password,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
