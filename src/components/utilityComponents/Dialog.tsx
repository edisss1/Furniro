import { forwardRef } from "react"
import { useAuth } from "../../context/AuthContext"

interface CartModalProps {
  toggleDialog?: () => void
  children: React.ReactNode
}

const Dialog = forwardRef<HTMLDialogElement, CartModalProps>(
  ({ toggleDialog, children }, ref) => {
    const { setError } = useAuth()
    return (
      <>
        <dialog
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              toggleDialog ? toggleDialog() : null
              setError(null)
            }
          }}
          ref={ref}
          className={`transform max-lg:hidden transition-all duration-1000 ease-linear backdrop:bg-black backdrop:bg-opacity-50 fixed top-0 right-0 mr-0 mt-0 w-[25%] min-h-[60%]   px-4 bg-white rounded`}>
          {children}
        </dialog>
      </>
    )
  }
)

export default Dialog
