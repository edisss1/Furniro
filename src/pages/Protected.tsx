import PleaseSignIn from "../components/auth/PleaseSignIn"
import { useAuth } from "../context/AuthContext"

interface ProtectedProps {
  children: React.ReactNode
  title: string
}

const Protected = ({ children, title }: ProtectedProps) => {
  const { user } = useAuth()

  if (!user || user.isAnonymous) {
    return <PleaseSignIn title={title} />
  } else {
    return children
  }
}
export default Protected
