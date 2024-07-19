import logo from "../../assets/Meubel House_Logos-05.svg"

interface HeaderProps {
  logoTurned?: boolean
  pageTitle: string
}

const Header = ({ logoTurned, pageTitle }: HeaderProps) => {
  return (
    <div>
      <div className='flex flex-col bg-shopHeaderImage bg-center bg-cover bg-no-repeat justify-center items-center py-[5%]'>
        <img src={logoTurned ? logo : ""} alt='' />
        <h3 className='font-medium text-4xl'>{pageTitle}</h3>
        <p>
          Home <span className='font-bold'> {">"} </span> {pageTitle}
        </p>
      </div>
    </div>
  )
}
export default Header
