import search from "../../../assets/akar-icons_search.svg"

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ setSearch }: SearchProps) => {
  return (
    <div className='relative'>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className='px-4 py-2 w-full '
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
