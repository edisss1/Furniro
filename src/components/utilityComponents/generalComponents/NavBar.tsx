import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/Meubel House_Logos-05.svg"
import profileUndefined from "../../../assets/Vector.svg"
import favoriteItems from "../../../assets/akar-icons_heart.svg"
import searchIcon from "../../../assets/akar-icons_search.svg"
import cartIcon from "../../../assets/ant-design_shopping-cart-outlined.svg"
import {
  activeLinkStyles,
  generalLinkStyles,
  paths,
} from "../../../imports/imports"
import { useRef, useState } from "react"
import Dialog from "../Dialog"
import CartContent from "../../modalContent/CartContent"
import AuthContent from "../../modalContent/AuthContent"
import { useAuth } from "../../../context/AuthContext"
import profileIdentified from "../../../assets/profileIdentified.svg"

const NavBar = () => {
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null)
  const cartModalRef = useRef<HTMLDialogElement | null>(null)
  const toggleDialog = () => {
    if (!cartModalRef.current) return

    cartModalRef.current.hasAttribute("open")
      ? cartModalRef.current.close()
      : cartModalRef.current.showModal()

    cartModalRef.current.hasAttribute("open")
  }

  const { user } = useAuth()
  console.log(user?.photoURL)

  return (
    <>
      <nav
        className={`  max-lg:hidden px-[5%] py-[1%] flex justify-between items-center  flex-wrap sticky top-0 z-[1000] bg-white/55 backdrop-blur-md`}>
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
          <button
            onClick={() => {
              setDialogContent(<AuthContent toggleDialog={toggleDialog} />)
              toggleDialog()
            }}
            className='w-8'>
            {user && user.photoURL ? (
              <img className='rounded-full' src={user.photoURL} alt='' />
            ) : user && !user.photoURL && !user.isAnonymous ? (
              <img src={profileIdentified} alt='/' />
            ) : (
              <img src={profileUndefined} alt='/' />
            )}
          </button>
          <Link to={"/search"} className='w-8'>
            <img src={searchIcon} alt='search' />
          </Link>
          <Link to={"/wishlist"} className='w-8'>
            <img src={favoriteItems} alt='favorite items' />
          </Link>
          <button
            onClick={() => {
              setDialogContent(<CartContent toggleDialog={toggleDialog} />)
              toggleDialog()
            }}
            className='w-8'>
            <img src={cartIcon} alt='shopping cart' />
          </button>
        </div>
        <Dialog
          children={dialogContent}
          ref={cartModalRef}
          toggleDialog={toggleDialog}
        />
      </nav>
    </>
  )
}
export default NavBar
