import { BillingContent } from "../components/singleuseComponents/billing/BillingContent"
import CheckoutHeader from "../components/singleuseComponents/billing/CheckoutHeader"
import Footer from "../components/utilityComponents/generalComponents/Footer"
import MobileNav from "../components/utilityComponents/generalComponents/MobileNav"
import NavBar from "../components/utilityComponents/generalComponents/NavBar"
import Guarantees from "../components/utilityComponents/Guarantees"

const CheckoutPage = () => {
  return (
    <>
      <NavBar />
      <MobileNav />
      <CheckoutHeader />
      <BillingContent />
      <Guarantees />
      <Footer />
    </>
  )
}
export default CheckoutPage
