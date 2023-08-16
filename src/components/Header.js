import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center bg-black py-5  text-white ">
      <div className="flex flex-col text-white text-3xl font-bold">
        <p className="text-center">100 Thousand Songs, ad-free <br/>
        Over thousands podcast episodes</p>
      </div>
        <img
            className="h-[140px] w-[140px]"
            src="https://freepngimg.com/convert-png/2488-green-headphones-png-image"
        />
    </div>
  );
};

export default Header;
