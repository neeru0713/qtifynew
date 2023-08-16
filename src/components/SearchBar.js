import React,{useState} from 'react'
import { BsSearch } from 'react-icons/bs'
import defaultimg from './album.png'
const SearchBar = ({data}) => {
  const [inputValue, setInputValue] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResult, setSearchResult] = useState([])

  function handleSearch(event) {
    let val = event.target.value;
    setShowSearchResults(true)
    if (val === '') {
      setShowSearchResults(false);
    }
    // let res = []
    // for (let i = 0; i < data.length; i++){
    //   let val = data[i];
    //   for (let j = 0; j < val.length; j++){    ----->  data[i].includes(event.target.value) -> Boolean
    //     if (val[j] === substr) {
    //       res.push(val)                        -------> data.filter method  -> Array
    //     }
    //   }
    // }
    // serach term se related data filter krna hai data se
    let searchResults = data.filter((ele) => { return ele.name.toLowerCase().includes(val.toLowerCase()) });
    setSearchResult(searchResults);

    
    setInputValue(val)
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
        <span className="h-[69%] border-l-2 border-black absolute right-[4rem] "></span>
        <span className="absolute right-[2rem] top-[1.7rem]">
          <BsSearch />
        </span>
      </div>
      {showSearchResults && (
        <div className="border-2 absolute rounded-lg border-green-900 bg-black h-[20rem] w-[93%] top-[3.4rem] left-[1rem]">
          <ul className="overflow-y-scroll h-[100%]">
            {searchResult.map((item) => (
              <li>
                <div className="flex text-white items-center pb-2">
                  <img src={defaultimg} className="h-[20%] w-[20%] pr-4" />
                  <div className="flex flex-col w-[50%]">
                    <h4>{item.name}</h4>

                    <p>
                      {
                        item.songs[
                          Math.floor(Math.random() * item.songs.length)
                        ].artist
                      }{" "}
                      ,{" "}
                      {
                        item.songs[
                          Math.floor(Math.random() * item.songs.length)
                        ].artist
                      }
                    </p>
                  </div>
                  <p className='w-[30%]'>{item.followers} Follows</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar