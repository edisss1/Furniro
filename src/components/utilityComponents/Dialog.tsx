import { forwardRef } from "react"

interface CartModalProps {
  toggleDialog: () => void
  children: React.ReactNode
}

const Dialog = forwardRef<HTMLDialogElement, CartModalProps>(
  ({ toggleDialog, children }, ref) => {
    return (
      <>
        <dialog
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              toggleDialog()
            }
          }}
          ref={ref}
          className={`transform transition-all duration-1000 ease-linear backdrop:bg-black backdrop:bg-opacity-50 fixed top-0 right-0 mr-0 mt-0 w-[25%] min-h-[60%]   px-4 bg-white rounded`}>
          {children}
        </dialog>
      </>
    )
  }
)

export default Dialog
