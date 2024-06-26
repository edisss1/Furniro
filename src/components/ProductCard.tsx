import { useLoading } from "../context/LoadingContext"
import Share from "../assets/Share.svg"
import Compare from "../assets/Compare.svg"
import Like from "../assets/Like.svg"
import { useDisplay } from "../context/ItemsDisplayContext"

interface ProductCardProps {
  imgURL: string
  title: string
  smallDescription: string
  price: number
}

const ProductCard = ({
  imgURL,
  title,
  smallDescription,
  price,
}: ProductCardProps) => {
  const { loading } = useLoading()
  const { display } = useDisplay()

  return (
    <div
      className={`${
        display === "grid"
          ? ` w-fit max-w-[300px] max-h-[500px] bg-[#F4F5F7] ${
              loading && "animate-pulse"
            } relative z-[10] after:content['*'] after:bg-[#3A3A3A] after:bg-opacity-0 after:absolute after:inset-0 after:z-[15] group hover:after:bg-opacity-55 transition-all `
          : `flex justify-between items-center w-[50%] self-center bg-[#F9F1E7] mt-4 rounded-sm`
      }   `}>
      <img
        className={`${
          display === "grid"
            ? "w-full aspect-square object-cover z-[-1]"
            : "max-w-24"
        }`}
        src={imgURL}
        alt={title}
        loading='lazy'
      />
      <div className='p-4'>
        <h4 className='text-lg font-bold break-words '>{title}</h4>
        <p className='text-sm text-[#898989] opa'>{smallDescription}</p>
        <p className='text-lg font-semibold'>USD {price}</p>
      </div>
      <div className='absolute inset-0  hidden flex-col items-center justify-center opacity-0 transition-all group-hover:flex group-hover:opacity-100 ease-in duration-500'>
        <div className='z-20 flex flex-col justify-center items-center  '>
          <button className='bg-white px-14 py-3 text-[#B88E2F] max-md:text-sm max-md:px-6 '>
            Add to cart
          </button>
          <div className='text-white text-sm flex gap-4 mt-6 max-sm:flex-col '>
            <div className='flex gap-1 justify-center items-center  '>
              <img src={Share} alt='share' />
              <p>Share</p>
            </div>
            <div className='flex gap-1 justify-center items-center'>
              <img src={Compare} alt='compare' />
              <p>Compare</p>
            </div>
            <div className='flex gap-1 justify-center items-center'>
              <img src={Like} alt='like' />
              <p>Like</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
