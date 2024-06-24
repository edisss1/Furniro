import { useState } from "react"
import Filter from "../assets/ShopPageAssets/Filter.svg"
import ShowGrid from "../assets/ShopPageAssets/ShowGrid.svg"
import ShowList from "../assets/ShopPageAssets/ShowList.svg"
import { itemsToShowValues } from "../imports/paths"
import { useDisplay } from "../context/ItemsDisplayContext"

const ShopHeader = () => {
  const { setDisplay } = useDisplay()

  const handleDisplayChangeToGrid = () => {
    setDisplay("grid")
    console.log("grid")
  }
  const handleDisplayChangeToFlex = () => {
    setDisplay("flex")
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col bg-shopHeaderImage justify-center items-center py-[5%]'>
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
                <select className='flex justify-center items-center w-8 aspect-square bg-white p-1'>
                  {itemsToShowValues.map((value) => (
                    <option key={value.value} value={value.value}>
                      {value.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex justify-center items-center gap-4  '>
                <p>Sort by</p>
                <select name='' id='' className='p-1 bg-white'>
                  <option value='default'>Default</option>
                  <option value='cheap-first'>Cheap first</option>
                  <option value='expensive-first'>Expensive first</option>
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
