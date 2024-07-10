import { lazyLoad } from "../functions/lazyLoad"
import CartHeader from "../components/CartHeader"
import Guarantees from "../components/Guarantees"
import Footer from "../components/generalComponents/Footer"
import CartDisplay from "../components/CartDisplay"
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
