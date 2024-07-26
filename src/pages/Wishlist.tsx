import { lazy, useEffect } from "react"
import Footer from "../components/utilityComponents/generalComponents/Footer"
import Header from "../components/utilityComponents/Header"
import WishlistBody from "../components/singleuseComponents/WishlistBody"
import Subheader from "../components/utilityComponents/Subheader"
import SubheaderWishlist from "../components/subheaderContent/wishlist/SubheaderWishlist"
const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)
const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)

const Wishlist = () => {
  useEffect(() => {
    document.title = "Wishlist"
  }, [])
  return (
    <>
      <NavBar />
      <MobileNav />
      <Header pageTitle='Wishlist' logoTurned />
      <Subheader>
        <SubheaderWishlist />
      </Subheader>
      <WishlistBody />
      <Footer />
    </>
  )
}
export default Wishlist
