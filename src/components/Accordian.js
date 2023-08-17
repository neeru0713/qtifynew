import React, { useState } from "react";
import { BiChevronUp, BiSolidChevronDown } from "react-icons/bi";
const Accordian = ({ item }) => {
    const [showAnswer, setShowAnswer] = useState(false)
    

    function clickHandler() {
      setShowAnswer(!showAnswer);  
    }

  return (
    <div className="w-[40%]">
      <div
        onClick={clickHandler}
        className=" rounded bg-black border border-white text-white flex items-center justify-between"
      >
        <div className="p-2">{item.q}</div>
        {showAnswer ? (
          <BiChevronUp className="h-[30px] w-[30px]" />
        ) : (
          <BiSolidChevronDown className="h-[30px] w-[30px]" />
        )}
      </div>
      {showAnswer && (
        <div className=" rounded bg-white border border-black text-black flex items-center  justify-between p-2">
          {item.a}
        </div>
      )}
    </div>
  );
};

export default Accordian;
