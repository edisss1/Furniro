import { lazy, useContext, useEffect } from "react"
const ProductDisplay = lazy(
  () => import("../components/producRelatedComponents/ProductDisplay")
)

import Loading from "../components/utilityComponents/Loading"
import NavBar from "../components/utilityComponents/generalComponents/NavBar"
import ProductInformationPageNavBar from "../components/producRelatedComponents/ProductInformationPageNavBar"
import MobileNav from "../components/utilityComponents/generalComponents/MobileNav"
import { SpecificProductContext } from "../context/SpecificProductContext"
import ProductFullInformation from "../components/producRelatedComponents/ProductFullInformation"
const RelatedProducts = lazy(
  () => import("../components/singleuseComponents/RelatedProducts")
)
import Footer from "../components/utilityComponents/generalComponents/Footer"
import { useDisplay } from "../context/ItemsDisplayContext"
import { useLocation } from "react-router-dom"

const ProductInformationPage = () => {
  let location = useLocation()
  const context = useContext(SpecificProductContext)
  const { specificProduct, loading } = context
  const { setDisplay } = useDisplay()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    setDisplay("grid")
  }, [])

  if (loading) return <Loading />
  if (!specificProduct)
    return <h1 className='absolute inset-0'>Item not found</h1>

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
        id={specificProduct?.id}
      />
      <ProductFullInformation />
      <RelatedProducts currentProduct={specificProduct} />
      <Footer />
    </>
  )
}
export default ProductInformationPage
