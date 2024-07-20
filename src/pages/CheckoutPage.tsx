import { useEffect } from "react"
import { BillingContent } from "../components/singleuseComponents/billing/BillingContent"
import Footer from "../components/utilityComponents/generalComponents/Footer"
import MobileNav from "../components/utilityComponents/generalComponents/MobileNav"
import NavBar from "../components/utilityComponents/generalComponents/NavBar"
import Guarantees from "../components/utilityComponents/Guarantees"
import Header from "../components/utilityComponents/Header"

const CheckoutPage = () => {
  useEffect(() => {
    document.title = "Checkout"
  }, [])
  return (
    <>
      <NavBar />
      <MobileNav />
      <Header pageTitle='Checkout' logoTurned={true} />
      <BillingContent />
      <Guarantees />
      <Footer />
    </>
  )
}
export default CheckoutPage
