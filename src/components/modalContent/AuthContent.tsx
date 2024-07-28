import { useState } from "react"
import { ModalHeader } from "../singleuseComponents/ModalHeader"
import Signup from "../auth/Signup"
import { useAuth } from "../../context/AuthContext"
import Login from "../auth/Login"
import UserLoggedIn from "../auth/UserLoggedIn"

interface AuthContentProps {
  toggleDialog?: () => void | null
}

const AuthContent = ({ toggleDialog }: AuthContentProps) => {
  const [isLogin, setIsLogin] = useState(true)

  const { user } = useAuth()

  return (
    <div className="flex flex-col gap-4">
      <ModalHeader
        modalTitle={
          user && !user.isAnonymous ? "Profile" : isLogin ? "Login" : "Sign Up"
        }
        toggleDialog={toggleDialog ? toggleDialog : undefined}
      />
      {user && !user.isAnonymous ? (
        <UserLoggedIn />
      ) : isLogin ? (
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <Signup isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </div>
  )
}
export default AuthContent
