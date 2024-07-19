import { lazy, useContext } from "react"
const ShopPageProductsList = lazy(
  () => import("../components/singleuseComponents/ShopPageProductsList")
)

const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)
import Footer from "../components/utilityComponents/generalComponents/Footer"

import NavBar from "../components/utilityComponents/generalComponents/NavBar"
import Guarantees from "../components/utilityComponents/Guarantees"
import Loading from "../components/utilityComponents/Loading"
import { ProductContext } from "../context/ProductsContext"

const ShopPage = () => {
  const context = useContext(ProductContext)
  if (!context) return <Loading />
  const { products } = context
  return (
    <>
      <NavBar />
      <MobileNav />
      <ShopPageProductsList products={products} />
      <Guarantees />
      <Footer />
    </>
  )
}
export default ShopPage
