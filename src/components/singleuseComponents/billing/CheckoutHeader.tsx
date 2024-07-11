import logo from "../../../assets/Meubel House_Logos-05.svg"

const CheckoutHeader = () => {
  return (
    <div>
      <div className='flex flex-col bg-shopHeaderImage bg-center bg-cover bg-no-repeat justify-center items-center py-[5%]'>
        <img src={logo} alt='' />
        <h3 className='font-medium text-4xl'>Checkout</h3>
        <p>
          Home <span className='font-bold'> {">"} </span> Checkout
        </p>
      </div>
    </div>
  )
}
export default CheckoutHeader
