import trashcan from "../../../assets/Trashcan.svg"

const Clear = () => {
  return (
    <div className='flex gap-2 items-center justify-center'>
      <img src={trashcan} alt='' />
      <p>Clear wishlist</p>
    </div>
  )
}
export default Clear
