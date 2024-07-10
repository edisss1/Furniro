import Footer from "../components/utilityComponents/generalComponents/Footer"
const MobileNav = lazyLoad("../components/generalComponents/MobileNav")

const NavBar = lazyLoad("../components/generalComponents/NavBar")

import { lazyLoad } from "../functions/lazyLoad"

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <MobileNav />
      <Footer />
    </>
  )
}
export default ContactPage
