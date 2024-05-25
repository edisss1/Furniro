import logo from "../assets/Meubel House_Logos-05.svg"
import profileUndefined from "../assets/Vector.svg"
import favoriteItems from "../assets/akar-icons_heart.svg"
import searchIcon from "../assets/akar-icons_search.svg"
import cartIcon from "../assets/ant-design_shopping-cart-outlined.svg"

const NavBar = () => {
  return (
    <nav className='px-[5%] py-8 flex justify-between items-center    '>
      <div className='flex items-center'>
        <img src={logo} alt='logo' />
        <h1 className='text-4xl font-bold font-secondary'>Furniro</h1>
      </div>
      <div className=' flex gap-[25%]'>
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className=' flex gap-[15%] '>
        <img src={profileUndefined} alt='profile is not defined' />
        <img src={searchIcon} alt='search' />
        <img src={favoriteItems} alt='favorite items' />
        <img src={cartIcon} alt='shopping cart' />
      </div>
    </nav>
  )
}
export default NavBar
