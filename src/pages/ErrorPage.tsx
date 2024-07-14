import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className='w-full font-bold text-4xl h-[100vh] overflow-hidden flex flex-col gap-[10%] justify-center items-center'>
      <h1 className='text-red-500'>404 not found!</h1>
      <Link
        className='text-xl hover:px-12  transition-all   font-normal border-2 px-4 py-2 rounded-2xl border-black'
        to={"/"}>
        Return to home page
      </Link>
    </div>
  )
}
export default ErrorPage
