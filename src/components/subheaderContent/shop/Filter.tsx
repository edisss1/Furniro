interface FilterProps {
  filter: string
  showGrid: string
  showList: string
  handleDisplayChangeToGrid: () => void
  handleDisplayChangeToFlex: () => void
}

const Filter = ({
  filter,
  showGrid,
  showList,
  handleDisplayChangeToFlex,
  handleDisplayChangeToGrid,
}: FilterProps) => {
  return (
    <div className='flex gap-6 max-md:justify-between '>
      <button>
        <div className='flex gap-2'>
          <img src={filter} alt='' />
          <p>Filter</p>
        </div>
      </button>
      <button onClick={handleDisplayChangeToGrid}>
        <img src={showGrid} alt='' />
      </button>
      <button onClick={handleDisplayChangeToFlex}>
        <img src={showList} alt='' />
      </button>
    </div>
  )
}
export default Filter
