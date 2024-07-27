import search from "../../../assets/akar-icons_search.svg"

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ setSearch }: SearchProps) => {
  return (
    <div className='relative w-[50%] max-md:w-auto'>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className='px-4 py-2 w-full rounded-md focus:border-primary border-faint outline-none border-2 focus:placeholder:hidden '
        type='text'
        placeholder='Search for product'
      />
      <img
        className='absolute top-[50%] -translate-y-[50%] right-2'
        src={search}
        alt=''
      />
    </div>
  )
}
export default Search
