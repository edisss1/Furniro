import Footer from "../components/utilityComponents/generalComponents/Footer"
import Guarantees from "../components/utilityComponents/Guarantees"
import CartDisplay from "../components/singleuseComponents/cart/CartDisplay"
import { lazy, useEffect } from "react"
import Header from "../components/utilityComponents/Header"
const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)
const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)

const CartPage = () => {
  useEffect(() => {
    document.title = "Cart"
  }, [])
  return (
    <>
      <NavBar />
      <MobileNav />
      <Header pageTitle='Cart' logoTurned={true} />
      <CartDisplay />
      <Guarantees />
      <Footer />
    </>
  )
}
export default CartPage
