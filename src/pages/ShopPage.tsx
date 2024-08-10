import { lazy, useEffect } from "react"
const ShopPageProductsList = lazy(
  () => import("../components/singleuseComponents/ShopPageProductsList")
)

const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)
import Footer from "../components/utilityComponents/generalComponents/Footer"

import NavBar from "../components/utilityComponents/generalComponents/NavBar"
import Guarantees from "../components/utilityComponents/Guarantees"

import { useFilter } from "../context/FilterContext"

const ShopPage = () => {
  useEffect(() => {
    document.title = "Shop"
  }, [])

  const { filteredProducts } = useFilter()
  return (
    <>
      <NavBar />
      <MobileNav />
      <ShopPageProductsList products={filteredProducts} />
      <Guarantees />
      <Footer />
    </>
  )
}
export default ShopPage
