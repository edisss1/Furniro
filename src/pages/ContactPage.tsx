import { lazy } from "react"
import Footer from "../components/utilityComponents/generalComponents/Footer"

import Guarantees from "../components/utilityComponents/Guarantees"
import GetInTouch from "../components/singleuseComponents/GetInTouch"
import Header from "../components/utilityComponents/Header"
import ContactInformation from "../components/singleuseComponents/ContactInformation"
const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)

const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <MobileNav />
      <Header pageTitle='Contact' logoTurned={true} />
      <GetInTouch />
      <ContactInformation />
      <Guarantees />

      <Footer />
    </>
  )
}
export default ContactPage
