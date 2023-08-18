// AlbumDetailsPage.js
import React from 'react';
import albumpic from "./album.png"; 
import { BsArrowLeftCircle } from 'react-icons/bs';
import { PiShuffleAngularThin } from "react-icons/pi";
import { TbCameraX } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import SongSection from "./SongSection";
import { MdSlowMotionVideo } from "react-icons/md";
export const Songs = ({ album }) => {

    let loc = useLocation();
    console.log(loc.state.songs);

//  album.songs.map
  return (
    <div className="flex flex-col">
      <Link to="/" className="hover:cursor-pointer">
        <div className="p-4 ">
          <BsArrowLeftCircle className="fill-white h-[2%] w-[2%]" />
        </div>
      </Link>
      <div className="flex h-[30%] p-10 w-[60%] justify-between ml-8">
        <img src={albumpic} className="h-[30%] w-[30%] rounded-lg" />
        <div className="flex flex-col text-white pt-8">
          <h1 className="font-bold text-3xl">Best of Punjabi Bae in 2022</h1>
          <h4 className="font-semibold text-base pt-2">
            Catch the most romantic punjabi tracks of 2022 #SportifyWrapped
          </h4>
          <p className="font-medium text-lg pt-2">2022</p>
          <p className="font-medium text-lg pt-2">
            75 songs . 3 hr 45 min . 100 Follows
          </p>

          <div className="flex p-3 w-[72%] justify-between">
            <div className=" flex justify-between items-center p-4 h-[2.5rem] w-[7rem] rounded-lg bg-green-600 text-white">
              <PiShuffleAngularThin className="h-[25px] w-[25px]" />
              <button>Shuffle</button>
            </div>
            <div className=" flex h-[2.5rem] w-[12rem] bg-black rounded-lg border justify-evenly border-double border-green-900 p-2">
              <TbCameraX className="decoration-green-500 h-[1.5rem] w-[1.5rem]" />
              <p className="text-green-600 text-auto">Add to liabrary</p>
            </div>
          </div>
        </div>
      </div>
      <SongSection data={loc.state.songs} />
      <div className="flex fixed bottom-0 text-white bg-black w-[100%] h-[12%] border-t-2 pt-3">
        <div className="flex w-[40%] justify-start ml-8">
          <img src={albumpic} className="h-[60px] w-[60px] rounded mr-3" />
          <div className="flex-col pt-2 ">
            <div className="text-sm">Song name</div>
            <div className="text-xs">Album name</div>
          </div>
        </div>
        <div className="flex flex-col  items-center">
          <MdSlowMotionVideo className="h-[32px] w-[32px] mb-3" />
          <div className='flex'>
          <span className='-ml-6'>2:10</span>
          <div className="h-[5px] w-[20rem] bg-white rounded "></div>
            <span>4:07</span>
            </div>

          <div className="h-[5px] w-[5rem] bg-green-400 rounded absolute top-[3.5rem] left-[42.1%]"></div>
        </div>
      </div>
    </div>
  );
};


