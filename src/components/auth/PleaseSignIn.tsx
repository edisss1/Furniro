import MobileNav from "../utilityComponents/generalComponents/MobileNav"
import NavBar from "../utilityComponents/generalComponents/NavBar"

interface PleaseSignInProps {
  title: string
}

const PleaseSignIn = ({ title }: PleaseSignInProps) => {
  return (
    <>
      <NavBar />
      <MobileNav />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] text-center">
        <p className="">Please sign in to use {title}</p>
      </div>
    </>
  )
}
export default PleaseSignIn
