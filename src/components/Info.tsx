import infoImage from "../assets/infoImage.svg"

const Info = () => {
  return (
    <div className={`info-image w-full relative `}>
      <img src={infoImage} className='w-full h-full -z-10' alt='Info image' />
      <div className='rounded-sm max-w-[30%]  gap-[1rem] p-10 bg-[#FFF3E3] flex flex-col justify-start items-start absolute bottom-[15%] right-[5%]'>
        <p className='font-medium tracking-[3px] max-lg:text-sm'>
          New Arrival!
        </p>
        <h2 className='text-3xl font-bold text-[#B88E2F]  max-lg:text-base'>
          Discover Our <br /> New Collection
        </h2>
        <p className='max-lg:text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className='uppercase py-[5%] px-[15%] bg-[#B88E2F] max-lg:py-[.5rem] max-lg:px-4rem'>
          Buy Now
        </button>
      </div>
    </div>
  )
}
export default Info
