import React,{useState} from "react";
import { RxCross2 } from 'react-icons/rx';

const Modal = ({ closeHandler }) => {

  function closeHandlerModal() {
   closeHandler()
  }

  return (
    <div className="fixed inset-0 absolute left-[35%] top-[10%] z-50">
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="border border-green-500 shadow-lg shadow-green-500/40 hover:shadow-green-500/80 flex flex-col h-[25rem] w-[24rem] text-center p-5 bg-black m-5 relative">
        <h1 className="text-base font-extrabold text-green-600 mb-5">
          Feedback
        </h1>
        <RxCross2
          onClick={closeHandlerModal}
          className="text-white ml-[20rem] cursor-pointer absolute"
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
        <textarea
          className="h-20 text-sm border text-black border-green-500 rounded-lg pl-4 pt-1"
          type="text"
          placeholder="Describtion"
        />

        <button className="bg-green-600 rounded-lg text-white w-[40%] p-[6px] m-auto">
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Modal;
