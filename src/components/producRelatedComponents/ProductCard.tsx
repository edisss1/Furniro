import { lazy, Suspense } from "react"
import share from "../../assets/Share.svg"
import compare from "../../assets/Compare.svg"
import like from "../../assets/Like.svg"

import { Link } from "react-router-dom"
import { useDisplay } from "../../context/ItemsDisplayContext"

const ProductCardHover = lazy(() => import("../ui/ProductCardHover"))

interface ProductCardProps {
  imgURL: string | undefined
  title: string | undefined
  smallDescription: string | undefined
  price: number | undefined
  id: string | undefined
}

const ProductCard = ({
  imgURL,
  title,
  smallDescription,
  price,
  id,
}: ProductCardProps) => {
  const { display } = useDisplay()

  return (
    <div
      className={`rounded-md  ${
        display === "grid"
          ? ` flex flex-col w-[300px]  max-xl:w-[200px] max-md:w-[160px] bg-[#eeeeee] hover:shadow-2xl max-md:hover:shadow-none  relative z-[10] max-md:after:hidden after:rounded-md after:content['*'] after:bg-[#3A3A3A] after:bg-opacity-0 after:absolute after:inset-0 after:block after:z-[15] group hover:after:bg-opacity-80 after:transition-all after:ease-linear after:duration-200 `
          : `flex justify-between items-center w-[80%] self-center bg-[#F9F1E7] mt-4 `
      }   `}>
      <img
        className={`rounded-md ${
          display === "grid"
            ? "w-full  aspect-square object-cover z-[-1] rounded-md "
            : "max-w-24"
        }`}
        src={imgURL}
        alt={title}
        loading='lazy'
      />
      <div className={`${display === "flex" ? "w-full" : ""} flex flex-col`}>
        <div className='p-4 max-md:p-2'>
          {display === "grid" ? (
            <h4 className='text-[clamp(14px,3vw,16px)] font-semibold w-[calc(100%)] overflow-hidden whitespace-nowrap inline-block text-ellipsis '>
              {title}
            </h4>
          ) : (
            <Link
              className='text-[clamp(14px,3vw,16px)] font-bold inline-block whitespace-nowrap text-ellipsis w-[calc(100%)] overflow-hidden underline'
              to={`/product/${id}`}>
              {title}
            </Link>
          )}

          <p className='text-[clamp(12px,3vw,14px)] text-[#898989] inline-block text-ellipsis w-[calc(100%)] whitespace-nowrap overflow-hidden'>
            {smallDescription}
          </p>
          <p className='text-lg font-semibold'>${price}</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductCardHover
            id={id}
            share={share}
            compare={compare}
            like={like}
          />
        </Suspense>
        <div
          className={`md:hidden ${display === "flex" ? "hidden" : ""}  self-center border-2 border-black mb-4 px-4 rounded-lg z-50'`}>
          <Link to={`/product/${id}`}>More</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
