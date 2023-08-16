import React,{useState} from 'react'
import { BsHeadphones } from "react-icons/bs";
import SearchBar from './SearchBar';
import Modal from './Modal';

const NavBar = ({data}) => {
  const [showModal, setShowModal] = useState(false);


  function feedbackHandler() {
    setShowModal(true);
  }

  function closeHandler() {
    setShowModal(false);
  }
    
  return (
    <div className=" flex justify-between h-[10%] w-[100%] bg-green-500 ">
      <div className="flex p-3">
        <BsHeadphones className="h-[30px] w-[30px] absolute" />
        <p className="text-white ml-2 text-xl pt-2 font-semibold">Q tify</p>
      </div>

      <SearchBar data={data} />

      <div className="flex flex-col">
        <div
          onClick={feedbackHandler}
          className="flex items-center p-2 bg-black rounded-lg text-green-500 m-4 font-semibold cursor-pointer"
        >
          Give Feedback
        </div>
        {showModal && <Modal closeHandler={closeHandler} />}
      </div>
    </div>
  );
}

export default NavBar