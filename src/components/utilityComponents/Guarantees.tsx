import { guaranteesContent } from "../../imports/imports"

const Guarantees = () => {
  return (
    <div className='bg-[#FAF3EA] flex justify-evenly items-center mt-20 py-28 max-lg:hidden'>
      {guaranteesContent.map((guarantee) => (
        <div key={guarantee.header} className='flex gap-3'>
          <img src={guarantee.img} alt='' />
          <div className='w-max'>
            <h4 className='font-semibold'>{guarantee.header}</h4>
            <p className='text-[#898989] whitespace-nowrap'>{guarantee.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Guarantees
