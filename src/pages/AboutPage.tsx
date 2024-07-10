import { lazy } from "react"
import Footer from "../components/utilityComponents/generalComponents/Footer"
const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)
const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <MobileNav />
      <Footer />
    </>
  )
}
export default AboutPage
