import { Link } from "react-router-dom"

const Footer = () => {
  const date = new Date()

  return (
    <footer className='ps-24 lg:ps-10 md:ps-6 sm:ps-2 flex flex-col grid-cols-6 grid-rows-2 mt-[5%] gap-10'>
      <div className='flex gap-20 lg:gap-16 md:gap-8: sm:gap-4 '>
        <div className='col-span-2'>
          <h3 className='font-bold text-2xl '>Furniro.</h3>
          <div className='flex flex-col'>
            <span>400 University Drive Suite 200 Coral </span>
            <span>Gables,</span> <span>FL 33134 USA</span>
          </div>
        </div>
        <div className='col-start-3 grid grid-cols-3 col-span-4 max-md:grid-flow-col'>
          <div className='flex flex-col gap-10'>
            <p className='text-[#9F9F9F]'>Links</p>
            <Link to='/'>Home</Link>
            <Link to='/'>Shop</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
          </div>
          <div className='flex flex-col gap-10'>
            <p className='text-[#9F9F9F]'>Help</p>
            <Link to={"/"}>Payment Options</Link>
            <Link to={"/"}>Returns</Link>
            <Link to={"/"}>Privacy Policies</Link>
          </div>
          <form className='flex flex-col gap-10 w-fit'>
            <p className='text-[#9F9F9F]'>Newsletter</p>
            <div className='flex gap-5'>
              <div className='relative group '>
                <input
                  id='email'
                  className='underline decoration-black underline-offset-4  outline-none border-b-2 border-black'
                  type='email'
                />
                <label
                  htmlFor='email'
                  className='w-fit absolute  top-0 left-0 group-focus-within:-top-4 group-focus-within:text-sm  transition-all duration-150 ease-linear'>
                  Enter Your Email Address...
                </label>
              </div>
              <button
                onClick={(e) => e.preventDefault()}
                className='font-semibold border-b-2 border-black'>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <p>{date.getFullYear()} furniro. All rights reserved</p>
    </footer>
  )
}
export default Footer
