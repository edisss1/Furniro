import { lazy, useContext, useEffect } from "react"
const Products = lazy(
  () => import("../components/producRelatedComponents/Products")
)

import Info from "../components/singleuseComponents/Info"
// import Loading from "../components/utilityComponents/Loading"
const MainPageSlider = lazy(
  () => import("../components/singleuseComponents/MainPageSlider")
)
const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)
import Range from "../components/singleuseComponents/Range"
// import { useLoading } from "../context/LoadingContext"
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
  const context = useContext(ProductContext)
  if (!context) return <Loading />
  const { products } = context

  // const { loading } = useLoading()
  const { setDisplay } = useDisplay()

  useEffect(() => {
    setDisplay("grid")
  })

  useEffect(() => {
    document.title = "Furniro"
  }, [])
  return (
    <>
      <NavBar />
      <MobileNav />
      <Info />
      <Range />
      <Products products={products} />
      <MainPageSlider />
      <FurniroFurniture />
      <Footer />
    </>
  )
}
export default HomePage
