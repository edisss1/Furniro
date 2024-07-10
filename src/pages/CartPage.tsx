import CartHeader from "../components/singleuseComponents/cart/CartHeader"

import Footer from "../components/utilityComponents/generalComponents/Footer"
import Guarantees from "../components/utilityComponents/Guarantees"
import CartDisplay from "../components/singleuseComponents/cart/CartDisplay"
import { lazy } from "react"
const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)
const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)

const CartPage = () => {
  return (
    <>
      <NavBar />
      <MobileNav />
      <CartHeader />
      <CartDisplay />
      <Guarantees />
      <Footer />
    </>
  )
}
export default CartPage
