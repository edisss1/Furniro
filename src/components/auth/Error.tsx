import { useAuth } from "../../context/AuthContext"

const Error = () => {
  const { error } = useAuth()
  switch (error?.code) {
    case "auth/invalid-email":
      return "The email address is not valid."
    case "auth/user-disabled":
      return "The user account has been disabled"
    case "auth/user-not-found":
      return "No user found with this email address"
    case "auth/wrong-password":
      return "The password is incorrect"
    case "auth/email-already-in-use":
      return "An account already exists with this email address"
    case "auth/weak-password":
      return ""
    case "auth/invalid-credential":
      return "Account does not exist"
  }

  return (
    <div className=''>
      <span>:(</span>
      <p>{error?.message}</p>
    </div>
  )
}
export default Error
