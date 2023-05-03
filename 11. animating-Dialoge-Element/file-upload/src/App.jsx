import { useState, useRef, useEffect } from "react";
import { AddFileBtn, File } from "./components";
import { FiPlus, FiUserPlus } from "react-icons/fi";
import { StateProvider } from "./context/States.jsx";

function App() {
  // const [dialogeOpen, setDialogeOpen] = useState(false);
  // const myRef = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((visibleEntries) => {
  //     const visibles = visibleEntries[0];
  //     console.log("visible", visibles);
  //   });
  //   observer.observe(myRef.current);
  // }, []);
  return (
    <StateProvider>
      <main className="w-full h-[100vh] overflow-hidden">
        <section className="h-full flex flex-col flex-wrap items-stretch justify-end col sm:items-center sm:justify-center pb-32 sm:w-fit sm:mx-auto gap-3">
          <File />
          <File />
          <File />
          <File />

          {/* <AddFileBtn setDialogeOpen={setDialogeOpen} /> */}
        </section>
      </main>
    </StateProvider>
  );
}

export default App;
