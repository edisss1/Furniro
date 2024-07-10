import { lazy } from "react"
const ShopPageProductsList = lazy(
  () => import("../components/singleuseComponents/ShopPageProductsList")
)

const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)
import Footer from "../components/utilityComponents/generalComponents/Footer"

import NavBar from "../components/utilityComponents/generalComponents/NavBar"
import Guarantees from "../components/utilityComponents/Guarantees"

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
