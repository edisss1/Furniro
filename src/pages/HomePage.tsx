import { lazy, useContext, useEffect } from "react"
const Products = lazy(
  () => import("../components/producRelatedComponents/Products")
)

import Info from "../components/singleuseComponents/Info"
const MainPageSlider = lazy(
  () => import("../components/singleuseComponents/MainPageSlider")
)
const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)
import Footer from "../components/utilityComponents/generalComponents/Footer"
const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)
const FurniroFurniture = lazy(
  () => import("../components/singleuseComponents/FurniroFurniture")
)
import { useDisplay } from "../context/ItemsDisplayContext"
import { ProductContext } from "../context/ProductsContext"
import Loading from "../components/utilityComponents/Loading"

const HomePage = () => {
  const { setDisplay } = useDisplay()

  useEffect(() => {
    setDisplay("grid")
  })

  useEffect(() => {
    document.title = "Furniro"
  }, [])

  const context = useContext(ProductContext)
  if (!context) return <Loading />
  const { products } = context

  return (
    <>
      <NavBar />
      <MobileNav />
      <Info />
      <Products products={products} />
      <MainPageSlider />
      <FurniroFurniture />
      <Footer />
    </>
  )
}
export default HomePage
