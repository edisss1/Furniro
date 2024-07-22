import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  linkWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"
import { auth, provider } from "../firebase/firebaseConfig"

interface AuthContextProps {
  onLogin: (e: React.ChangeEvent<HTMLFormElement>) => void
  onSignUp: (e: React.ChangeEvent<HTMLFormElement>) => void
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  signOut: () => Promise<void>
  signInWithGoogle: () => Promise<void>
  user: User | null
  error: string | null
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
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const signInWithGoogle = async () => {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          setUser(user)
        })
        .catch((err) => {
          const errorCode = err.code
          const errorMessage = err.message
          console.error(errorCode, errorMessage)
        })

      if (
        user?.providerData.some(
          (provider) => provider.providerId === "password"
        )
      ) {
        return
      }

      if (email && password && user) {
        const credential = EmailAuthProvider.credential(email, password)
        await linkWithCredential(user, credential)
      }
    } catch (err) {
      console.error((err as any).message)
    }
  }

  const signOut = async () => {
    try {
      await auth.signOut()
      setUser(null)
    } catch (err) {
      console.error(err)
    }
  }

  const onLogin = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUser(user)
        setError(null)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        setError(error)
      })
  }
  const onSignUp = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUser(user)
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        error,
        user,
        signOut,
        signInWithGoogle,
        onLogin,
        onSignUp,
        handleEmail,
        handlePassword,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
