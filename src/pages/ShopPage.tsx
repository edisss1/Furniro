import { lazyLoad } from "../functions/lazyLoad"
const ShopPageProductsList = lazyLoad("../components/ShopPageProductsList")

const MobileNav = lazyLoad("../components/generalComponents/MobileNav")
import Footer from "../components/generalComponents/Footer"

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
