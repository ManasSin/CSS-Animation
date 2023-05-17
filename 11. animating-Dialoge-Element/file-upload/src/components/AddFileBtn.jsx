import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { ContextState } from "../context/States";

const AddFileBtn = () => {
  const { setState, dialog } = useContext(ContextState);
  // console.log(dialog, setState);
  return (
    <button
      className="text-white font-bold text-3xl p-10 rounded-full shadow-2xl shadow-gray-700  bg-gray-800 hover:-translate-y-1 transition absolute right-[5%] bottom-[5%]"
      onClick={() => handleClick}
    >
      <FiPlus width={"30px"} />
    </button>
  );
};

export default AddFileBtn;
