import { useState, useRef, useEffect } from "react";
import { AddFileBtn, File } from "./components";
import { FiPlus, FiUserPlus } from "react-icons/fi";
function App() {
  const [dialogeOpen, setDialogeOpen] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((visibleEntries) => {
      const visibles = visibleEntries[0];
      console.log("visible", visibles);
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <main className="w-full h-[100vh] overflow-hidden">
      <section className="h-full flex flex-col flex-wrap items-stretch justify-end col sm:items-center sm:justify-center pb-32 sm:w-fit sm:mx-auto gap-3">
        <File />
        <File />
        <File />
        <File />

        <AddFileBtn setDialogeOpen={setDialogeOpen} />
      </section>
      <dialog
        role="mega-dialogue"
        open={dialogeOpen}
        ref={myRef}
        className={`
        ${
          dialogeOpen
            ? "w-full h-full filter backdrop-blur-md grid items-center bg-transparent absolute inset-0 animate-slidein"
            : "w-0 h-0 translate-x-full animate-dismiss"
        }
        isolate
        `}
      >
        <form
          action=""
          className="
            w-[80%]
            sm:w-[500px]
            h-fit
            border-1
            grid
            col-span-1
            row-span[auto_auto_auto]
            m-auto
            divide-y
            divide-gray-200
            rounded-2xl
            overflow-hidden
          "
        >
          <header
            className="
          col-span-full
          p-2
          text-sm
          font-medium
          grid
          grid-cols-[10%_1fr_10%]
          px-2
          py-4
          items-center
          row-span-1
          bg-slate-600
        "
          >
            <button>
              <FiUserPlus width={"20px"} />
            </button>
            <h2>heading for dialoge</h2>
            <button className="animation-ping w-fit p-3 rounded-full rotate-45 bg-gray-100">
              <FiPlus width={"20px"} height={"20px"} />
            </button>
          </header>
          <section
            className="
          col-span-full
          px-2
          text-sm
          font-medium
          flex
          items-center
          bg-slate-400
          py-4
        "
          >
            <label htmlFor="input"></label>
            <input type="file" name="input" />
          </section>
          <footer
            className="
          col-span-full
          p-2
          text-sm
          font-medium
          grid
          grid-cols-[10%_1fr_10%]
          px-2
          py-4
          items-center
          row-span-1
          bg-slate-600

        "
          >
            <button>submit</button>
          </footer>
        </form>
      </dialog>
    </main>
  );
}

export default App;
