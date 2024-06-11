import LoadingIcon from "../assets/Meubel House_Logos-05.svg"

const Loading = () => {
  return (
    <div className='grid place-items-center'>
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
