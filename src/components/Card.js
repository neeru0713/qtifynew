import React from 'react'
import { Link } from "react-router-dom";
import albumpic from "./album.png";
const Card = ({data,card,index}) => {
  return (
    <div>
      <Link
        key={index}
        to={`/album/${card.name}`}
        state={data[index]}
        className="hover:cursor-pointer"
      >
        <div
          key={index}
          className="bg-white shadow-md rounded-md h-[85%] w-[80%] flex flex-col"
        >
          <img src={albumpic} className="h-[80%] w-[100%] rounded-md" />
          <button className='text-white bg-black rounded-lg w-[60%] text-xs text-center p-1 mt-1 ml-2'>100M Follows</button>
        </div>
              <p>{ card.name}</p>
      </Link>
    </div>
  );
}

export default Card