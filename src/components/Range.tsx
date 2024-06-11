import diningRoom from "../assets/dining.png"
import livingRoom from "../assets/Image-living room.png"
import bedroom from "../assets/image 106.png"

const Range = () => {
  return (
    <main className='w-full  flex flex-col items-center justify-center mt-[4rem] text-center'>
      <div>
        <h3 className='font-bold text-2xl'>Browse The Range</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='capitalize grid grid-cols-3 gap-[1.25rem] mt-[2rem] font-medium'>
        <div className='gap-[1.75rem] grid'>
          <img
            className='rounded-sm'
            src={diningRoom}
            alt='Link to dining room sets'
            loading='lazy'
          />
          <p>Dining</p>
        </div>
        <div className='gap-[1.75rem] grid'>
          <img
            className='rounded-sm'
            src={livingRoom}
            alt='Link to living room sets'
            loading='lazy'
          />
          <p>Living</p>
        </div>
        <div className='gap-[1.75rem] grid'>
          <img
            className='rounded-sm'
            src={bedroom}
            alt='Link to bedroom sets'
            loading='lazy'
          />
          <p>Bedroom</p>
        </div>
      </div>
    </main>
  )
}
export default Range
