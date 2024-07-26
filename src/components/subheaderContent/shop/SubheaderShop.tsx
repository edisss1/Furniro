import Filter from "./Filter"
import Options from "./Options"

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
      <Options
        handleItemsPerPage={handleItemsPerPage}
        handleSortChange={handleSortChange}
        itemsPerPage={itemsPerPage}
        itemsToShowValues={itemsToShowValues}
        options={options}
      />
    </>
  )
}
export default SubheaderShop
