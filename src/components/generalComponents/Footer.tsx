import { Link } from "react-router-dom"
import { paths } from "../../imports/imports"

const Footer = () => {
  const date = new Date()

  return (
    <footer className='ps-24 max-lg:ps-2 max-sm:ps-0  flex flex-col mt-[5%] gap-10 max-lg:grid'>
      <div className='flex gap-20 lg:gap-16 md:gap-8: sm:gap-4 max-lg:flex-col max-lg:items-center'>
        <div className='col-span-2 flex flex-col gap-10 max-lg:col-span-3 max-lg:row-start-1'>
          <h3 className='font-bold text-2xl max-sm:text-center '>Furniro.</h3>
          <div className='flex flex-col flex-wrap max-sm:text-center'>
            <span>400 University Drive Suite 200 Coral </span>
            <span>Gables,</span>
            <span>FL 33134 USA</span>
          </div>
        </div>
        <div className='col-start-3 grid grid-cols-3 col-span-4 max-lg:gap-6 max-sm:px-1 max-sm:justify-center'>
          <div className='flex flex-col gap-10 max-lg:col-start-2 max-sm:col-start-1 '>
            <p className='text-[#9F9F9F]'>Links</p>
            {paths?.map((path) => (
              <Link key={path.path} to={path.path}>
                {path.text}
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-10 max-lg:col-start-3 max-sm:col-start-3 '>
            <p className='text-[#9F9F9F]'>Help</p>
            <Link to={"/"}>Payment Options</Link>
            <Link to={"/"}>Returns</Link>
            <Link to={"/"}>Privacy Policies</Link>
          </div>
          <form className='flex flex-col  gap-10 w-fit max-lg:row-start-2  max-lg:col-start-2 max-sm:col-start-1'>
            <p className='text-[#9F9F9F]'>Newsletter</p>
            <div className='flex gap-5 flex-wrap'>
              <div className='relative group '>
                <input
                  id='email'
                  className='underline decoration-black underline-offset-4  outline-none border-b-2 border-black'
                  type='email'
                />
                <label
                  htmlFor='email'
                  className='w-fit absolute pointer-events-none  top-0 left-0 group-focus-within:-top-4 group-focus-within:text-sm  transition-all duration-150 ease-linear'>
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
      <p className='max-lg:mx-auto'>
        {date.getFullYear()} furniro. All rights reserved
      </p>
    </footer>
  )
}
export default Footer
