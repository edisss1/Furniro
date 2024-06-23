import { lazy } from "react"
import Info from "../components/Info"
import Loading from "../components/Loading"
import MainPageSlider from "../components/MainPageSlider"
import NavBar from "../components/NavBar"
const Products = lazy(() => import("../components/Products"))
import Range from "../components/Range"
import { useLoading } from "../context/LoadingContext"
import Footer from "../components/Footer"
import MobileNav from "../components/MobileNav"

const HomePage = () => {
  const { loading } = useLoading()
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

        <Footer />
      </>
    </>
  )
}
export default HomePage
