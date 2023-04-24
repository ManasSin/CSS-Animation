import { FiPlus } from "react-icons/fi";

const File = () => {
  return (
    <div className="p-6 bg-black w-fit mx-auto sm:rounded-2xl rounded-full h-fit sm:w-fit relative">
      <button className="animation-ping p-1 rounded-full bg-gray-600 rotate-45 absolute -top-1 -right-1 hover:scale-110 duration-100 ">
        <FiPlus width={"10px"} />
      </button>
    </div>
  );
};

export default File;
