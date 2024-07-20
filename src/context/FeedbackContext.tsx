import { addDoc, collection } from "firebase/firestore"
import { createContext, useState } from "react"
import { db } from "../firebase/firebaseConfig"

export interface Feedback {
  name: string
  email: string
  subject: string
  message: string
}

interface FeedbackContextProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  sendFeedback: (
    contactInformation: Feedback,
    e: React.ChangeEvent<HTMLFormElement>
  ) => Promise<void>
  sent: boolean
  feedback: Feedback
}

export const FeedbackContext = createContext<FeedbackContextProps | null>(null)

export const FeedbackProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [contactInformation, setContactInformation] = useState<Feedback>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setContactInformation({
      ...contactInformation,
      [name]: value,
    })
  }

  const sendFeedback = async (
    contactInformation: Feedback,
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    setSent(false)
    e.preventDefault()
    try {
      await addDoc(collection(db, "feedback"), {
        contactInformation,
      })
    } catch (err) {
      console.error("Error sending feedback", err)
    }
    setSent(true)
  }

  return (
    <FeedbackContext.Provider
      value={{
        sent,
        feedback: contactInformation,
        sendFeedback,
        handleChange,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}
