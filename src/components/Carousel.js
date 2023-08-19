import React, { useState } from "react";
import albumpic from './album.png'
import { Link } from "react-router-dom";
import Card from './Card'
export const Carousel = ({ cards }) => {
    
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(6);

    const handleLeftClick = () => {
        setStartIndex((prev) => {
            return prev === 0 ? 0 : prev - 1;
        })
        setEndIndex((prev) => {
            return prev === 0 ? 0 : prev - 1;
        })
    };

  const handleRightClick = () => {
    setStartIndex((prev) => {
      return prev === cards.length - 1 ? cards.length - 1 : prev + 1;
    });
    setEndIndex((prev) => {
      return prev === cards.length - 1 ? cards.length - 1 : prev + 1;
    });
  };

  return (
    <div
      className="c
    arousel flex items-center"
    >
      <button onClick={handleLeftClick} className="arrow left text-[50px] mr-8">
        &#8249;
      </button>

      <div className="grid grid-cols-7 ">
        {cards.slice(startIndex, endIndex + 1).map((card, index) => (
          <Card card={card} index={index} data={cards} />
        ))}
      </div>

      <button onClick={handleRightClick} className="arrow right text-[50px]">
        &#8250;
      </button>
    </div>
  );
};

