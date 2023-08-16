import React,{useState} from "react";
import { RxCross2 } from 'react-icons/rx';

const Modal = ({ closeHandler }) => {

  function closeHandlerModal() {
   closeHandler()
  }

  return (
    <div className="">
      <div className="border border-green-500 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/80 flex flex-col h-[380px] w-[380px] text-center p-5 bg-black m-5">
        <h1 className="text-base font-extrabold text-green-600 ">Feedback</h1>
        <RxCross2
          onClick={closeHandlerModal}
          className="text-white ml-[20rem] cursor-pointer"
        />

        <input
          className=" h-10 text-sm text-black border border-green-500 rounded-lg  pl-4 mb-4"
          type="text"
          placeholder="Full name"
        />
        <input
          className="h-10 text-sm text-black border border-green-500 rounded-lg pl-4 mb-4"
          type="text"
          placeholder="Email ID"
        />
        <input
          className="h-10 text-sm  text-black border border-green-500 rounded-lg pl-4 mb-4"
          type="text"
          placeholder="Subject"
        />
        <input
          className="h-20 text-sm border text-black border-green-500 rounded-lg pl-4 pb-8"
          type="text"
          placeholder="Describtion"
        />

        <div className="h-[10%] w-[42%] bg-green-600 rounded-lg text-white pl-1 mt-7 ml-[6rem]">
          Submit Feedback
        </div>
      </div>
    </div>
  );
};

export default Modal;
