import { useState, useRef, useEffect } from "react";
import { AddFileBtn, File } from "./components";
function App() {
  const [dialogeOpen, setDialogeOpen] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((visibleEntries) => {
      const visibles = visibleEntries[0];
      console.log("visible", visibles.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <main className="w-full h-[100vh] flex flex-col flex-wrap items-stretch justify-end col sm:items-center sm:justify-center pb-32 sm:w-fit sm:mx-auto gap-3">
      <File />
      <File />
      <File />
      <File />

      <AddFileBtn setDialogeOpen={setDialogeOpen} />
      <div
        role="dialoge"
        ref={myRef}
        className={`
          w-fit 
          h-fit 
          translate-x-0 
          absolute 
          top-2 
        `}
      >
        {/* ${
          dialogeOpen
            ? "w-[100%] h-[100%] translate-x-0"
            : "w-0 h-0 translate-x-full"
        } */}
        <form
          action=""
          className="
            grid
            col-span-1
            row-span[auto_auto_auto]
          "
        >
          <header
            className="
          col-span-full
        "
          >
            <h2>heading for dialoge</h2>
          </header>
          <section
            className="
          col-span-full
        "
          >
            <label htmlFor="input"></label>
            <input type="file" name="input" />
          </section>
          <footer
            className="
          col-span-full
        "
          >
            <button>submit</button>
          </footer>
        </form>
      </div>
    </main>
  );
}

export default App;
