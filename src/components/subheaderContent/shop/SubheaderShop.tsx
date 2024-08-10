import ProductFilter from "../../singleuseComponents/ProductFilter"
import Filter from "./Filter"
import Options from "./Options"
import Search from "./Search"

interface SubheaderShopProps {
  filter: string
  showGrid: string
  showList: string
  handleDisplayChangeToGrid: () => void
  handleDisplayChangeToFlex: () => void
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
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SubheaderShop = ({
  filter,
  showGrid,
  showList,
  handleDisplayChangeToFlex,
  handleDisplayChangeToGrid,
  handleItemsPerPage,
  handleSortChange,
  itemsPerPage,
  itemsToShowValues,
  options,
  setSearch,
}: SubheaderShopProps) => {
  return (
    <>
      <Filter
        filter={filter}
        showGrid={showGrid}
        showList={showList}
        handleDisplayChangeToFlex={handleDisplayChangeToFlex}
        handleDisplayChangeToGrid={handleDisplayChangeToGrid}
      />
      <Search setSearch={setSearch} />
      <Options
        handleItemsPerPage={handleItemsPerPage}
        handleSortChange={handleSortChange}
        itemsPerPage={itemsPerPage}
        itemsToShowValues={itemsToShowValues}
        options={options}
      />
      <ProductFilter />
    </>
  )
}
export default SubheaderShop
