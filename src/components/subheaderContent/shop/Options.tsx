interface OptionsProps {
  itemsPerPage: number
  handleItemsPerPage: (e: React.ChangeEvent<HTMLSelectElement>) => void
  itemsToShowValues: {
    value: string
    title: number
  }[]
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: {
    sortBy: string
    optionText: string
  }[]
}

const Options = ({
  itemsPerPage,
  handleItemsPerPage,
  itemsToShowValues,
  handleSortChange,
  options,
}: OptionsProps) => {
  return (
    <div className='flex gap-4 justify-center items-center'>
      <div className='flex gap-1 justify-center items-center'>
        <p>Show</p>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          className='flex justify-center items-center w-10 aspect-square bg-white p-1'>
          {itemsToShowValues.map((value) => (
            <option key={value.value} value={value.value}>
              {value.title}
            </option>
          ))}
        </select>
      </div>
      <div className='flex justify-center items-center gap-4  '>
        <p className='text-overflow-ellipsis w-[calc(100%)]'>Sort by</p>
        <select onChange={handleSortChange} className='p-2 bg-white'>
          {options.map((option) => (
            <option key={option.sortBy} value={option.sortBy}>
              {option.optionText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default Options
