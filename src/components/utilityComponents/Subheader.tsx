interface SubheaderProps {
  children: React.ReactNode
}

const Subheader = ({ children }: SubheaderProps) => {
  return (
    <div className='bg-secondary py-4 px-[5%]  flex justify-between items-center flex-wrap max-lg:items-center max-lg:justify-center max-lg:gap-3'>
      {children}
    </div>
  )
}
export default Subheader
