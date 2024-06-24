import Footer from "../components/generalComponents/Footer"
import MobileNav from "../components/generalComponents/MobileNav"
import NavBar from "../components/generalComponents/NavBar"
import ShopHeader from "../components/ShopHeader"
import ShopPageProductsList from "../components/ShopPageProductsList"
import { ItemsDisplayProvider } from "../context/ItemsDisplayContext"

const ShopPage = () => {
  return (
    <>
      <ItemsDisplayProvider>
        <NavBar />
        <MobileNav />
        <ShopHeader />
        <ShopPageProductsList />
        <Footer />
      </ItemsDisplayProvider>
    </>
  )
}
export default ShopPage
