import { lazyLoad } from "../functions/lazyLoad"
const ShopPageProductsList = lazyLoad("../components/ShopPageProductsList")

import Footer from "../components/generalComponents/Footer"
import MobileNav from "../components/generalComponents/MobileNav"
import NavBar from "../components/generalComponents/NavBar"
import Guarantees from "../components/Guarantees"

const ShopPage = () => {
  return (
    <>
      <NavBar />
      <MobileNav />
      <ShopPageProductsList />
      <Guarantees />
      <Footer />
    </>
  )
}
export default ShopPage
