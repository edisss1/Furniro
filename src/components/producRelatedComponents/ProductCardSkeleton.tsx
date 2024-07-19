import { useDisplay } from "../../context/ItemsDisplayContext"

const SkeletonProductCard = () => {
  const { display } = useDisplay()

  return (
    <div
      className={`rounded-md  ${
        display === "grid"
          ? ` flex flex-col bg-[#eeeeee] w-[300px]  max-xl:w-[200px] max-md:w-[160px]  hover:shadow-2xl max-md:hover:shadow-none  relative z-[10] max-md:after:hidden after:rounded-md after:content['*'] after:bg-[#3A3A3A] after:bg-opacity-0 after:absolute after:inset-0 after:block after:z-[15] group hover:after:bg-opacity-80 after:transition-all after:ease-linear after:duration-200 `
          : `flex justify-between items-center w-[80%] self-center bg-[#F9F1E7] mt-4 `
      }   `}>
      <div
        className={`rounded-md bg-gray-300 ${
          display === "grid"
            ? "w-full aspect-square object-cover z-[-1] rounded-md"
            : "max-w-24"
        }`}
      />
      <div className={`${display === "flex" ? "w-full" : ""} flex flex-col`}>
        <div className='p-4 max-md:p-2'>
          <div className='h-4 bg-gray-300 rounded w-3/4 mb-2'></div>
          <div className='h-3 bg-gray-300 rounded w-1/2 mb-2'></div>
          <div className='h-5 bg-gray-300 rounded w-1/4'></div>
        </div>
        <div
          className={`md:hidden ${display === "flex" ? "hidden" : ""} self-center  mb-4 px-4 rounded-lg z-50`}>
          <div className='h-5 bg-gray-300 rounded w-16'></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonProductCard
