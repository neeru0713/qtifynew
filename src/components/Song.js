import React from 'react'
import albumpic from "./album.png"

export const Song = ({song}) => {
  return (
    <tr className="border-b border-white">
      <td className="text-left flex py-2 ">
        <img src={albumpic} className="h-[40px] mr-2" />
        <h5>{song.name}</h5>
      </td>

      <td className="text-center py-2">{song.artist}</td>
      <td className="text-right py-2">{song.duration}</td>
      </tr>
      
  );
    
    //  <div className="w-[100%]">
    //   <tbody className="w-[100%] justify-evenly">
    //     <td className="p-6">
    //       <p className="text-white font-semibold">Title</p>
    //       <div className="flex pt-2 items-center">
    //         <img
    //           src={albumpic}
    //           className="h-10 w-10 rounded-lg mr-2"
    //           alt="Album"
    //         />
    //         <p className="text-sm text-white">Song name</p>
    //       </div>
    //     </td>
    //     <td>
    //       <p className="text-white pb-4 font-semibold">Artist</p>
    //       <p className="text-white">Artist name</p>
    //     </td>
    //     <td>
    //       <p className="text-white pb-4 font-semibold">Duration</p>
    //       <p className="text-white">1:59</p>
    //     </td>
    //   </tbody>
    // </div>
}
