import logo from "../assets/Meubel House_Logos-05.svg"

const CartHeader = () => {
  return (
    <div>
      <div className='flex flex-col bg-shopHeaderImage bg-center bg-cover bg-no-repeat justify-center items-center py-[5%]'>
        <img src={logo} alt='' />
        <h3 className='font-medium text-4xl'>Cart</h3>
        <p>
          Home <span className='font-bold'> {">"} </span> Cart
        </p>
      </div>
    </div>
  )
}
export default CartHeader
