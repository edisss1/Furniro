import { useState } from "react"
import Login from "../auth/Login"
import { ModalHeader } from "../singleuseComponents/ModalHeader"
import Signup from "../auth/Signup"

interface AuthContentProps {
  toggleDialog: () => void
}

const AuthContent = ({ toggleDialog }: AuthContentProps) => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className='flex flex-col gap-4'>
      <ModalHeader
        modalTitle={isLogin ? "Login" : "Sign Up"}
        toggleDialog={toggleDialog}
      />
      {isLogin ? (
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <Signup isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </div>
  )
}
export default AuthContent
