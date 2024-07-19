import { useDisplay } from "../../context/ItemsDisplayContext"
import { itemsToShowValues, options } from "../../imports/imports"
import Filter from "../../assets/ShopPageAssets/Filter.svg"
import ShowGrid from "../../assets/ShopPageAssets/ShowGrid.svg"
import ShowList from "../../assets/ShopPageAssets/ShowList.svg"
import Header from "../utilityComponents/Header"

type ShopHeaderProps = {
  itemsPerPage: number
  setItemsPerPage: (value: number) => void
  onSortChange: (sortOption: string) => void
}

const ShopHeader = ({
  itemsPerPage,
  setItemsPerPage,
  onSortChange,
}: ShopHeaderProps) => {
  const { setDisplay } = useDisplay()

  const handleDisplayChangeToGrid = () => {
    setDisplay("grid")
    console.log("grid")
  }
  const handleDisplayChangeToFlex = () => {
    setDisplay("flex")
    console.log("display changed")
  }
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value)
  }

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPageValue = Number(e.target.value)
    console.log("Items per page changed to: ", newItemsPerPageValue)
    setItemsPerPage(newItemsPerPageValue)
  }

  return (
    <div className='flex flex-col w-full'>
      <Header pageTitle='Shop' />
      <div className='bg-[#F9F1E7] py-4 px-[2%] '>
        <div className='flex justify-between flex-wrap max-md:justify-center max-md:gap-3'>
          <div className='flex gap-6 max-md:justify-between'>
            <button>
              <div className='flex gap-2'>
                <img src={Filter} alt='' />
                <p>Filter</p>
              </div>
            </button>
            <button onClick={handleDisplayChangeToGrid}>
              <img src={ShowGrid} alt='' />
            </button>
            <button onClick={handleDisplayChangeToFlex}>
              <img src={ShowList} alt='' />
            </button>
          </div>
          <div>
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
                <p className='inline-block whitespace-nowrap text-ellipsis overflow-hidden w-[calc(100%)]'>
                  Sort by
                </p>
                <select onChange={handleSortChange} className='p-2 bg-white'>
                  {options.map((option) => (
                    <option key={option.sortBy} value={option.sortBy}>
                      {option.optionText}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShopHeader
