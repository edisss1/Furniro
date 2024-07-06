import { useEffect } from "react"
const Products = lazyLoad("../components/Products")
import { lazyLoad } from "../functions/lazyLoad"
import Info from "../components/Info"
import Loading from "../components/Loading"
import MainPageSlider from "../components/MainPageSlider"
import NavBar from "../components/generalComponents/NavBar"
import Range from "../components/Range"
import { useLoading } from "../context/LoadingContext"
import Footer from "../components/generalComponents/Footer"
import MobileNav from "../components/generalComponents/MobileNav"
import FurniroFurniture from "../components/FurniroFurniture"
import { useDisplay } from "../context/ItemsDisplayContext"

const HomePage = () => {
  const { loading } = useLoading()
  const { setDisplay } = useDisplay()

  useEffect(() => {
    setDisplay("grid")
  })

  useEffect(() => {
    document.title = "Furniro"
  }, [])
  return (
    <>
      {loading && (
        <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-100  z-50'>
          <Loading />
        </div>
      )}
      <>
        <NavBar />
        <MobileNav />
        <Info />
        <Range />
        <Products />
        <MainPageSlider />
        <FurniroFurniture />
        <Footer />
      </>
    </>
  )
}
export default HomePage
