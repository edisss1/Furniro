import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/Meubel House_Logos-05.svg"
import profileUndefined from "../../assets/Vector.svg"
import favoriteItems from "../../assets/akar-icons_heart.svg"
import searchIcon from "../../assets/akar-icons_search.svg"
import cartIcon from "../../assets/ant-design_shopping-cart-outlined.svg"
import {
  activeLinkStyles,
  generalLinkStyles,
  paths,
} from "../../imports/imports"

const NavBar = () => {
  return (
    <nav className='max-md:hidden px-[5%] py-[1%] flex justify-between items-center  flex-wrap sticky top-0 z-[10000] bg-white/55 backdrop-blur-md'>
      <Link to={"/"} className='flex items-center justify-center'>
        <img src={logo} alt='logo' />
        <h1 className='text-4xl font-bold font-secondary'>Furniro</h1>
      </Link>
      <div className='flex gap-[10%]'>
        {paths?.map((path) => (
          <NavLink
            key={path.path}
            className={({ isActive }) =>
              isActive ? activeLinkStyles : generalLinkStyles
            }
            to={path.path}>
            {path.text}
          </NavLink>
        ))}
      </div>
      <div className=' flex gap-[10%] '>
        <button className='w-8'>
          <img src={profileUndefined} alt='profile is not defined' />
        </button>
        <button className='w-8'>
          <img src={searchIcon} alt='search' />
        </button>
        <button className='w-8'>
          <img src={favoriteItems} alt='favorite items' />
        </button>
        <button className='w-8'>
          <img src={cartIcon} alt='shopping cart' />
        </button>
      </div>
    </nav>
  )
}
export default NavBar
