import { AddFileBtn, File } from "./components";
function App() {
  const [dialogeOpen, setDialogeOpen] = useState(false);
  const handleMegaDialoge = () => {
    setDialogeOpen((Open) => !Open);
  };
  return (
    <main className="w-full h-[100vh] flex flex-col flex-wrap items-stretch justify-end col sm:items-center sm:justify-center pb-32 sm:w-fit sm:mx-auto gap-3">
      <File />
      <File />
      <File />
      <File />

      <AddFileBtn />
      {dialogeOpen ? (
        <dialog>
          <form action="">
            <label htmlFor="">kuchbhi</label>
          </form>
        </dialog>
      ) : null}
    </main>
  );
}

export default App;
