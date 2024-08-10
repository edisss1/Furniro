import { useFilter } from "../../../context/FilterContext"

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
  const { openFilters } = useFilter()
  return (
    <div className="flex gap-6 max-md:justify-between ">
      <button onClick={openFilters} className="relative">
        <div className="flex gap-2">
          <img src={filter} alt="" />
          <p>Filter</p>
        </div>
      </button>
      <button onClick={handleDisplayChangeToGrid}>
        <img src={showGrid} alt="" />
      </button>
      <button onClick={handleDisplayChangeToFlex}>
        <img src={showList} alt="" />
      </button>
    </div>
  )
}
export default Filter
