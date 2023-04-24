import { FiPlus } from "react-icons/fi";

const AddFileBtn = () => {
  return (
    <button className="text-white font-bold text-3xl p-5 rounded-full drop-shadow-lg shadow-orange-950 bg-black hover:-translate-y-1 transition absolute left-[5%] bottom-[5%]">
      <FiPlus width={"30px"} />
    </button>
  );
};

export default AddFileBtn;
