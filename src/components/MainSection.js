import React from 'react'
import albumpic from './album.png'
import { useState } from 'react';

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
              className="text-lime-500 font-semibold"
            >
              {isCollapse ? "Show all" : "Collapse"}
            </button>
          ) : null}
        </div>

        {showTabs === true ? (
          <div className="flex">
            <p>All</p>
            <p>Rock</p>
            <p>Pop</p>
            <p>Jazz</p>
            <p>Blues</p>
          </div>
        ) : null}
      </div>
      <div
        className="grid grid-cols-7 gap-4 overflow-y-scroll"
        style={{ height: gridHeight }}
      >
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-md h-[85%] w-[80%]"
          >
            <img src={albumpic} className="h-[100%] w-[100%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;