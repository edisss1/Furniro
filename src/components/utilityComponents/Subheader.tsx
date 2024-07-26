interface SubheaderProps {
  children: React.ReactNode
}

const Subheader = ({ children }: SubheaderProps) => {
  return (
    <div className='bg-secondary py-4 px-[2%]  flex justify-between items-center flex-wrap max-md:justify-center max-md:gap-3'>
      {children}
    </div>
  )
}
export default Subheader
