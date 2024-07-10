import { lazyLoad } from "../functions/lazyLoad"
import CartHeader from "../components/singleuseComponents/CartHeader"

import Footer from "../components/utilityComponents/generalComponents/Footer"
import Guarantees from "../components/singleuseComponents/Guarantees"
import CartDisplay from "../components/singleuseComponents/CartDisplay"
const NavBar = lazyLoad("../components/generalComponents/NavBar")
const MobileNav = lazyLoad("../components/generalComponents/MobileNav")

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
