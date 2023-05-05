import { AddFileBtn, File } from "./components";
import Dialog from "./components/Dialog";
import { StateProvider } from "./context/States.jsx";

function App() {
  return (
    <StateProvider>
      <section className="h-full flex flex-col sm:flex-row flex-wrap items-stretch justify-end col sm:items-center sm:justify-center pb-32 sm:w-fit sm:mx-auto gap-9">
        <File />
        <File />
        <Dialog />

        <AddFileBtn />
      </section>
    </StateProvider>
  );
}

export default App;
