import React,{useState} from 'react'
import {BsSearch} from 'react-icons/bs'
const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  function handleSearch(event) {
    setShowSearchResults(true)
    if (event.target.value === '') {
      setShowSearchResults(false);
    }
    setInputValue(event.target.value)
  }
  return (
    <div className="w-[30%] flex relative flex-col">
      <div className="relative flex w-[100%] px-4 pt-4 ">
        <input
          value={inputValue}
          onChange={handleSearch}
          className="flex justify-between p-2 h-[40px] w-[100%] bg-white border-2 border-zinc-950 rounded-lg"
          placeholder="Search a album of your choice"
        />
        <span className="h-[55.5%] border-l-2 border-black absolute right-[4rem]"></span>
        <span className="absolute right-[2rem] top-[1.7rem]">
          <BsSearch />
        </span>
      </div>
      {showSearchResults && (
        <div className="border-2 absolute rounded-lg border-green-900 bg-black h-[20rem] w-[93%] top-[3.4rem] left-[1rem]"></div>
      )}
    </div>
  );
}

export default SearchBar