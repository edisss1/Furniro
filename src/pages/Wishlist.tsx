import { lazy, useEffect } from "react"
import Footer from "../components/utilityComponents/generalComponents/Footer"
const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)
const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)

const Wishlist = () => {
  useEffect(() => {
    document.title = "Search"
  }, [])
  return (
    <>
      <NavBar />
      <MobileNav />

      <Footer />
    </>
  )
}
export default Wishlist
