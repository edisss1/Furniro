import CloseModal from "../../assets/CloseModal.svg"

interface ModalHeaderProps {
  modalTitle: string
  toggleDialog: () => void
}

export const ModalHeader = ({ modalTitle, toggleDialog }: ModalHeaderProps) => {
  return (
    <div className="flex relative justify-between items-center mt-4 z-[1000] mb-12 after:content['*'] after:absolute after:w-[60%]  after:h-[1px] after:bg-[#D9D9D9] after:-bottom-6">
      <h2 className='font-semibold text-lg'>{modalTitle}</h2>
      <button onClick={toggleDialog} className=''>
        <img src={CloseModal} alt='Close modal' />
      </button>
    </div>
  )
}
