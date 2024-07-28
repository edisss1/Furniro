import { useState } from "react"
import MobileLogin from "../components/auth/mobile/MobileLogin"
import MobileSignup from "../components/auth/mobile/MobileSignup"
import MobileNav from "../components/utilityComponents/generalComponents/MobileNav"
import { useAuth } from "../context/AuthContext"
import MobileUserLoggedIn from "../components/auth/mobile/MobileUserLoggedIn"

const MobileLoginPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const { user } = useAuth()

  return (
    <>
      <MobileNav />

      {user && !user.isAnonymous ? (
        <MobileUserLoggedIn />
      ) : isLogin ? (
        <MobileLogin isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <MobileSignup isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </>
  )
}
export default MobileLoginPage
