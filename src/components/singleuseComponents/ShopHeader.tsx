import { useDisplay } from "../../context/ItemsDisplayContext"
import { itemsToShowValues, options } from "../../imports/imports"
import Filter from "../assets/ShopPageAssets/Filter.svg"
import ShowGrid from "../assets/ShopPageAssets/ShowGrid.svg"
import ShowList from "../assets/ShopPageAssets/ShowList.svg"

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
  }
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value)
  }

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value))
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col bg-shopHeaderImage bg-center bg-cover bg-no-repeat justify-center items-center py-[5%]'>
        <h3 className='font-bold text-4xl'>Shop</h3>
        <p>
          Home <span className='font-bold'> {">"} </span> Shop
        </p>
      </div>
      <div className='bg-[#F9F1E7] py-4 px-[5%]'>
        <div className='flex justify-between'>
          <div className='flex gap-6'>
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
                <p>Sort by</p>
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
