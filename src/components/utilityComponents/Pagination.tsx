type PaginationProps = {
  itemsPerPage: number
  length: number
  currentPage: number
  totalPages: number
  handlePagination: (pageNumber: number) => void
  handleNextPage: (currentPage: number) => void
}

const Pagination = ({
  handlePagination,
  handleNextPage,
  currentPage,
  totalPages,
}: PaginationProps) => {
  const paginationNumbers: (number | string)[] = []

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      paginationNumbers.push(i)
    }
  } else {
    const startPages = [1, 2]
    const endPages = [totalPages - 1, totalPages]
    const aroundCurrent = [
      currentPage - 1 > 2 ? currentPage - 1 : null,
      currentPage,
      currentPage + 1 < totalPages - 1 ? currentPage + 1 : null,
    ].filter((page): page is number => page !== null)

    const allPages = new Set([...startPages, ...aroundCurrent, ...endPages])

    let lastPage: number | null = null
    allPages.forEach((page) => {
      if (lastPage !== null && page - lastPage > 1) {
        paginationNumbers.push("...")
      }
      paginationNumbers.push(page)
      lastPage = page
    })
  }

  return (
    <div className='flex flex-wrap gap-12 max-xl:gap-8 max-lg:gap-5 max-md:gap-3 max-sm:gap-1 m-auto justify-center mt-14'>
      {paginationNumbers.map((pageNumber, index) => (
        <button
          className={`w-12 aspect-square rounded flex justify-center items-center ${
            pageNumber === currentPage ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
          }`}
          onClick={() =>
            typeof pageNumber === "number" && handlePagination(pageNumber)
          }
          key={index}>
          {pageNumber}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          className='bg-[#F9F1E7] px-4 rounded-sm'
          onClick={() => handleNextPage(currentPage + 1)}>
          Next
        </button>
      )}
    </div>
  )
}
export default Pagination
