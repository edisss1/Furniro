import Loading from "../components/Loading"
import NavBar from "../components/generalComponents/NavBar"
import ProductInformationPageNavBar from "../components/ProductInformationPageNavBar"
import ProductDisplay from "../components/ProductDisplay"
import MobileNav from "../components/generalComponents/MobileNav"
import { useContext } from "react"
import { SpecificProductContext } from "../context/SpecificProductContext"

const ProductInformationPage = () => {
  const context = useContext(SpecificProductContext)
  const { specificProduct, loading } = context

  loading && <Loading />
  !specificProduct && <h1 className='absolute inset-0 '>Item not found</h1>

  return (
    <>
      <NavBar />
      <MobileNav />
      <ProductInformationPageNavBar currentProduct={specificProduct?.name} />
      <ProductDisplay
        loading={loading}
        img={specificProduct?.imageURL}
        price={specificProduct?.price}
        name={specificProduct?.name}
        reviews={specificProduct?.reviews}
        category={specificProduct?.category}
      />
    </>
  )
}
export default ProductInformationPage
