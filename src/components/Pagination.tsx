type PaginationProps = {
  itemsPerPage: number
  length: number
  currentPage: number
  totalPages: number
  handlePagination: (pageNumber: number) => void
  handleNextPage: (currentPage: number) => void
}

const Pagination = ({
  itemsPerPage,
  length,
  handlePagination,
  handleNextPage,
  currentPage,
  totalPages,
}: PaginationProps) => {
  const paginationNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(length / itemsPerPage); i++) {
    paginationNumbers.push(i)
  }

  return (
    <div className='flex flex-wrap gap-12 max-xl:gap-8 max-lg:gap-5 max-md:gap-3 max-sm:gap-1 m-auto justify-center mt-14'>
      {paginationNumbers.map((pageNumber) => (
        <button
          className={`w-12 aspect-square rounded flex justify-center items-center ${
            pageNumber === currentPage ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
          }`}
          onClick={() => handlePagination(pageNumber)}
          key={pageNumber}>
          {pageNumber}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          className='bg-[#F9F1E7]'
          onClick={() => handleNextPage(currentPage + 1)}>
          Next
        </button>
      )}
    </div>
  )
}
export default Pagination
