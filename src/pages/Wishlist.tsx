import { lazy, useEffect, useMemo, useState } from "react"
import Footer from "../components/utilityComponents/generalComponents/Footer"
import Header from "../components/utilityComponents/Header"
import WishlistBody from "../components/singleuseComponents/WishlistBody"
import Subheader from "../components/utilityComponents/Subheader"
import SubheaderWishlist from "../components/subheaderContent/wishlist/SubheaderWishlist"
import { useWishlist } from "../context/WishlistContext"
import { options } from "../imports/imports"
import { quickSort } from "../functions/quickSort"
const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)
const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)

const Wishlist = () => {
  const { wishlistItems } = useWishlist()
  const [sortValue, setSortValue] = useState("default")

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value)
  }

  const sortedProducts = useMemo(() => {
    switch (sortValue) {
      case "cheap-first":
        return quickSort(wishlistItems, (a, b) => a?.price - b?.price)
      case "expensive-first":
        return quickSort(wishlistItems, (a, b) => b.price - a.price)
      case "aToZ":
        return quickSort(wishlistItems, (a, b) => a.name.localeCompare(b.name))
      case "zToA":
        return quickSort(wishlistItems, (a, b) => b.name.localeCompare(a.name))
      default:
        return wishlistItems
    }
  }, [wishlistItems, sortValue])

  useEffect(() => {
    document.title = "Wishlist"
  }, [])
  return (
    <>
      <NavBar />
      <MobileNav />
      <Header pageTitle="Wishlist" logoTurned />
      <Subheader>
        <SubheaderWishlist
          options={options}
          handleSortChange={handleSortChange}
        />
      </Subheader>
      <WishlistBody sortedProducts={sortedProducts} />
      <Footer />
    </>
  )
}
export default Wishlist
