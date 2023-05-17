import React, { useContext } from "react";
import { ContextState } from "../context/States";

const Dialog = () => {
  const { dialog } = useContext(ContextState);
  if (!dialog) return;
  return (
    <dialog
      role="mega-dialogue"
      // className={`
      //   ${
      //     dialogeOpen
      //       ? "w-full h-full filter backdrop-blur-md flex flex-col justify-end items-center  bg-transparent absolute inset-0 animate-slidein"
      //       : "w-0 h-0 translate-x-full animate-dismiss"
      //   }
      //   isolate
      //   `}
    >
      <form
        className="
            w-fit
            h-fit
            border-1
            grid
            col-span-1
            row-span[auto_auto_auto]
            m-auto
            divide-gray-200
            rounded-2xl
            overflow-hidden
          "
      >
        <header
          className="
          col-span-full p-2 text-sm font-medium grid grid-cols-[auto_1fr_auto] px-4 py-2 items-center row-span-1 bg-slate-600
        "
        >
          <div className=" grid place-content-center">
            <button className="text-white font-black">
              <FiUserPlus width={"20px"} />
            </button>
          </div>
          <h2>heading for dialoge</h2>
          <div className="hover:w-12 hover:h-12 bg-zinc-600 grid place-content-center">
            <button className="animation-ping w-fit h-fit p-3 rounded-full rotate-45 bg-gray-100">
              <FiPlus width={"20px"} height={"20px"} />
            </button>
          </div>
        </header>
        <section
          className="
          col-span-full
          text-sm
          font-medium
          flex
          flex-col-reverse
          sm:flex-row
          gap-2
          items-start
          bg-slate-400
          px-4
          py-2
          sm:py-4
          min-w-[100px]
        "
        >
          <label htmlFor="input">chose you file</label>
          <input type="file" name="input" className="" />
          <p className="font-light text-xs text-red-500">
            max upload limit 10kb*
          </p>
        </section>
        <footer
          className="
          col-span-full
          p-2
          text-sm
          font-medium
          grid
          grid-cols-[auto_1fr_auto_auto]
          px-2
          py-4
          items-center
          row-span-1
          bg-slate-600

        "
        >
          <button>clear</button>
          <button>cancel</button>
          <button>submit</button>
        </footer>
      </form>
    </dialog>
  );
};

export default Dialog;
