import { FiPlus } from "react-icons/fi";

const File = () => {
  return (
    <div className="p-1 bg-gray-300 w-fit mx-auto rounded-full h-fit sm:w-fit relative shadow-xl shadow-gray-600 ">
      <button
        className="animation-ping p-1 rounded-full bg-stone-100 border-gray-200 border-2 rotate-45 absolute -top-1 right-1 hover:scale-110 duration-100 after:content-[''] after:w-0 after:h-0 after:hover:w-3 after:hover:h-3 after:bg-zinc-500 after:hover:transition-all"
        onClick={() => {}}
      >
        <FiPlus width={"10px"} />
      </button>
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
        <img src="" alt="" className="w-fit h-fit object-contain" />
      </div>
    </div>
  );
};

export default File;
