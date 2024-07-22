import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import React, { createContext, useContext, useState } from "react"
import { auth } from "../firebase/firebaseConfig"

interface AuthContextProps {
  onLogin: (e: React.ChangeEvent<HTMLFormElement>) => void
  onSignUp: (e: React.ChangeEvent<HTMLFormElement>) => void
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
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

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onLogin = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
  const onSignUp = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user

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
      value={{ onLogin, onSignUp, handleEmail, handlePassword }}>
      {children}
    </AuthContext.Provider>
  )
}
