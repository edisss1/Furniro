import logo from "../assets/Meubel House_Logos-05.svg"
import profileUndefined from "../assets/Vector.svg"
import favoriteItems from "../assets/akar-icons_heart.svg"
import searchIcon from "../assets/akar-icons_search.svg"
import cartIcon from "../assets/ant-design_shopping-cart-outlined.svg"

const NavBar = () => {
  return (
    <nav className='px-[5%] py-[1%] flex justify-between items-center  flex-wrap sticky top-0 z-[10000] bg-white'>
      <div className='flex items-center justify-center'>
        <img src={logo} alt='logo' />
        <h1 className='text-4xl font-bold font-secondary'>Furniro</h1>
      </div>
      <div className='flex gap-[10%]'>
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className=' flex gap-[10%] '>
        <img src={profileUndefined} alt='profile is not defined' />
        <img src={searchIcon} alt='search' />
        <img src={favoriteItems} alt='favorite items' />
        <img src={cartIcon} alt='shopping cart' />
      </div>
    </nav>
  )
}
export default NavBar
