import LoadingIcon from "../../assets/Meubel House_Logos-05.svg"

const Loading = () => {
  return (
    <div className='absolute top-[50%] bg-white z-[9999] left-[50%] -translate-x-[50%] flex flex-col items-center justify-center '>
      <img className='animate-bounce' src={LoadingIcon} />
      <p>
        Wait a second <span className='animate-bounce'>.</span>
        <span className='animate-bounce'>.</span>
        <span className='animate-bounce'>.</span>
      </p>
    </div>
  )
}
export default Loading
