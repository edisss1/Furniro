import { NavLink } from "react-router-dom"
import logo from "../assets/Meubel House_Logos-05.svg"
import profileUndefined from "../assets/Vector.svg"
import favoriteItems from "../assets/akar-icons_heart.svg"
import searchIcon from "../assets/akar-icons_search.svg"
import cartIcon from "../assets/ant-design_shopping-cart-outlined.svg"

const NavBar = () => {
  const activeLinkStyles = "text-[#B88E2F]"
  const paths = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/shop",
      text: "Shop",
    },
    {
      path: "/about",
      text: "About",
    },
    {
      path: "/contact",
      text: "Contact",
    },
  ]

  return (
    <nav className='max-md:hidden px-[5%] py-[1%] flex justify-between items-center  flex-wrap sticky top-0 z-[10000] bg-white/55 backdrop-blur-md'>
      <div className='flex items-center justify-center'>
        <img src={logo} alt='logo' />
        <h1 className='text-4xl font-bold font-secondary'>Furniro</h1>
      </div>
      <div className='flex gap-[10%]'>
        {paths?.map((path) => (
          <NavLink
            className={({ isActive }) => (isActive ? activeLinkStyles : "")}
            to={path.path}>
            {path.text}
          </NavLink>
        ))}
      </div>
      <div className=' flex gap-[10%] '>
        <button>
          <img src={profileUndefined} alt='profile is not defined' />
        </button>
        <button>
          <img src={searchIcon} alt='search' />
        </button>
        <button>
          <img src={favoriteItems} alt='favorite items' />
        </button>
        <button>
          <img src={cartIcon} alt='shopping cart' />
        </button>
      </div>
    </nav>
  )
}
export default NavBar
