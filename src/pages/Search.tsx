import { lazy, useEffect } from "react"
import Footer from "../components/utilityComponents/generalComponents/Footer"
import Header from "../components/utilityComponents/Header"

const MobileNav = lazy(
  () => import("../components/utilityComponents/generalComponents/MobileNav")
)
const NavBar = lazy(
  () => import("../components/utilityComponents/generalComponents/NavBar")
)

const Search = () => {
  useEffect(() => {
    document.title = "Search"
  }, [])

  return (
    <>
      <NavBar />
      <MobileNav />
      <Header pageTitle='Search' logoTurned />

      <Footer />
    </>
  )
}
export default Search
