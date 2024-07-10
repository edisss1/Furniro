import image1 from "../assets/FurniroFurnitureComponentImages/image1.png"
import image2 from "../assets/FurniroFurnitureComponentImages/image2.png"
import image3 from "../assets/FurniroFurnitureComponentImages/image3.png"
import image4 from "../assets/FurniroFurnitureComponentImages/image4.png"
import image5 from "../assets/FurniroFurnitureComponentImages/image5.png"
import image6 from "../assets/FurniroFurnitureComponentImages/image6.png"
import image7 from "../assets/FurniroFurnitureComponentImages/image7.png"
import image8 from "../assets/FurniroFurnitureComponentImages/image8.png"
import image9 from "../assets/FurniroFurnitureComponentImages/image9.png"

const FurniroFurniture = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-8 w-full max-md:hidden overflow-x-hidden'>
      <div className='text-center row-start-1'>
        <span className='text-[#616161]'>Share your setup with</span>
        <h3 className='font-bold text-4xl'>#FurniroFurniture</h3>
      </div>
      <div className='grid grid-rows-9 grid-cols-[12] gap-5 w-full'>
        <img
          className='col-start-1 row-start-1 row-end-6 col-end-2 '
          src={image1}
          alt=''
        />
        <img
          className='col-start-2 row-start-2 col-end-6 row-end-6'
          src={image2}
          alt=''
        />
        <img
          className='row-start-4 col-start-6 col-end-8 row-end-8 '
          src={image3}
          alt=''
        />
        <img
          className='row-start-3 col-start-9 row-end-7 col-end-12'
          src={image4}
          alt=''
        />
        <img
          className='col-start-13 row-start-1 row-end-7 col-end-13'
          src={image5}
          alt=''
        />
        <img
          className='row-start-6 col-start-1 col-end-3 row-end-10'
          src={image6}
          alt=''
        />
        <img
          className='col-start-3 row-start-6 col-end-6 row-end-9'
          src={image7}
          alt=''
        />
        <img
          className='col-start-8 row-start-7 row-end-10 col-end-10'
          src={image8}
          alt=''
        />
        <img
          className='col-start-12 row-start-7  col-end-13 row-end-9'
          src={image9}
          alt=''
        />
      </div>
    </div>
  )
}
export default FurniroFurniture
