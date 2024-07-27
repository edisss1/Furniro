import { useDisplay } from "../../context/ItemsDisplayContext"
import { itemsToShowValues, options } from "../../imports/imports"
import filter from "../../assets/ShopPageAssets/Filter.svg"
import showGrid from "../../assets/ShopPageAssets/ShowGrid.svg"
import showList from "../../assets/ShopPageAssets/ShowList.svg"
import Header from "../utilityComponents/Header"
import Subheader from "../utilityComponents/Subheader"
import SubheaderShop from "../subheaderContent/shop/SubheaderShop"

type ShopHeaderProps = {
  itemsPerPage: number
  setItemsPerPage: (value: number) => void
  onSortChange: (sortOption: string) => void
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const ShopHeader = ({
  itemsPerPage,
  setItemsPerPage,
  onSortChange,
  setSearch,
}: ShopHeaderProps) => {
  const { setDisplay } = useDisplay()

  const handleDisplayChangeToGrid = () => {
    setDisplay("grid")
  }
  const handleDisplayChangeToFlex = () => {
    setDisplay("flex")
  }
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value)
  }

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPageValue = Number(e.target.value)
    setItemsPerPage(newItemsPerPageValue)
  }

  return (
    <div className='flex flex-col w-full'>
      <Header pageTitle='Shop' />
      <Subheader>
        <SubheaderShop
          setSearch={setSearch}
          filter={filter}
          showGrid={showGrid}
          showList={showList}
          handleDisplayChangeToFlex={handleDisplayChangeToFlex}
          handleDisplayChangeToGrid={handleDisplayChangeToGrid}
          handleItemsPerPage={handleItemsPerPage}
          handleSortChange={handleSortChange}
          itemsPerPage={itemsPerPage}
          itemsToShowValues={itemsToShowValues}
          options={options}
        />
      </Subheader>
    </div>
  )
}
export default ShopHeader
