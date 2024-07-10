import { lazyLoad } from "../functions/lazyLoad"
const ShopPageProductsList = lazyLoad("../components/ShopPageProductsList")

const MobileNav = lazyLoad("../components/generalComponents/MobileNav")
import Footer from "../components/utilityComponents/generalComponents/Footer"

import NavBar from "../components/utilityComponents/generalComponents/NavBar"
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
