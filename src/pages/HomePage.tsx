import { useEffect } from "react"
const Products = lazyLoad("../components/Products")
import { lazyLoad } from "../functions/lazyLoad"
import Info from "../components/singleuseComponents/Info"
import Loading from "../components/utilityComponents/Loading"
const MainPageSlider = lazyLoad("../components/MainPageSlider")
const NavBar = lazyLoad("../components/generalComponents/NavBar")
import Range from "../components/singleuseComponents/Range"
import { useLoading } from "../context/LoadingContext"
import Footer from "../components/utilityComponents/generalComponents/Footer"
const MobileNav = lazyLoad("../components/generalComponents/MobileNav")
const FurniroFurniture = lazyLoad("../components/FurniroFurniture")
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
