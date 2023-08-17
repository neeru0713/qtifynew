import React from 'react'
import albumpic from './album.png'
import { useState } from 'react';
import { Carousel } from './Carousel';
import { Link } from "react-router-dom";
const MainSection = ({ data, name,showTabs,showButton }) => {
const [isCollapse, setIsCollapse] = useState(true);
const [gridHeight, setGridHeight] = useState('10rem');


  function isCollapseHandler() {
      if (isCollapse) {
          setGridHeight("10rem");
      } else {
          setGridHeight("40rem");
      }
      setIsCollapse(!isCollapse);
  }

  return (
    <div className="bg-black w-[100%] border-b-2 border-lime-900 text-white">
      <div className="flex flex-col p-2">
        <div className="flex justify-between p-2">
          <p className="text-white font-semibold">{name}</p>

          {showButton === true ? (
            <button
              onClick={isCollapseHandler}
              className="text-green-800 font-semibold"
            >
              {isCollapse ? "Show all" : "Collapse"}
            </button>
          ) : null}
        </div>

        {showTabs === true ? (
          <div className="flex text-white font-bold text-xs w-[20%] justify-between">
            <p>All</p>
            <p>Rock</p>
            <p>Pop</p>
            <p>Jazz</p>
            <p>Blues</p>
          </div>
        ) : null}
      </div>
      {isCollapse ? (
        <Carousel cards={data} />
      ) : (
        <div className="grid grid-cols-7 h-[20rem] overflow-y-scroll">
          {data.map((card, index) => (
            <Link key={index} to="/album" className="hover:cursor-pointer">
              <div
                key={index}
                className="bg-white p-4 shadow-md rounded-md h-[85%] w-[80%]"
              >
                <img src={albumpic} className="h-[100%] w-[100%]" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainSection;