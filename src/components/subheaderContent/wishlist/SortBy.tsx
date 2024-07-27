interface SortByProps {
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: {
    sortBy: string
    optionText: string
  }[]
}

const SortBy = ({ handleSortChange, options }: SortByProps) => {
  return (
    <div className='flex justify-center items-center gap-4  '>
      <p className='text-overflow-ellipsis w-[calc(100%)]'>Sort by</p>
      <select onChange={handleSortChange} className='p-2 bg-white text-faint'>
        {options.map((option) => (
          <option key={option.sortBy} value={option.sortBy}>
            {option.optionText}
          </option>
        ))}
      </select>
    </div>
  )
}
export default SortBy
