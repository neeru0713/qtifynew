import React from 'react'
import {Song} from './Song.js'

const SongSection = ({data}) => {
   
  return (
    <div className="w-[100%] mb-[10rem]">
      <table className="w-[88%] p-4 m-auto text-white">
        <thead>
          <tr>
            <td className="p-4">Title</td>
            <td className="text-center p-4">Artist</td>
            <td className="text-right p-4">Duration</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Song song={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongSection