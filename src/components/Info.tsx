const Info = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full relative py-[100px] top-0 right-0 left-0 z-0 !bg-cover bg-no-repeat bg-infoImage bg-fixed bg-center `}>
      <div className='w-full flex justify-center lg:justify-end'>
        <div className='rounded-sm mx-[10rem] max-sm:mx-1 flex-wrap   gap-[1rem] p-10 bg-[#FFF3E3] flex flex-col lg:justify-end items-start max-w-[650px]'>
          <p className='font-medium tracking-[3px] max-lg:text-sm'>
            New Arrival!
          </p>
          <h2 className='text-3xl font-bold text-[#B88E2F]  max-lg:text-base'>
            Discover Our <br /> New Collection
          </h2>
          <p className='max-sm:text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className='uppercase py-[5%] px-[15%] bg-[#B88E2F] max-lg:py-[.5rem] max-lg:px-4rem text-white font-bold'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
export default Info
