import Info from "../components/Info"
import Loading from "../components/Loading"
import NavBar from "../components/NavBar"
import Products from "../components/Products"
import Range from "../components/Range"
import { useLoading } from "../context/LoadingContext"

const HomePage = () => {
  const { loading } = useLoading()
  return (
    <div>
      {loading && (
        <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-100  z-50'>
          <Loading />
        </div>
      )}
      <>
        <NavBar />
        <Info />
        <Range />
        <Products />
      </>
    </div>
  )
}
export default HomePage
