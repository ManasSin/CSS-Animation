import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousal from "./ui/Carousel";
import HeaderPage from "./components/HeaderPage";
import Email from "./ui/Email";
import MultiStep from "./ui/MultiStep";

function App() {
  return (
    <div className="mx-auto flex w-full overflow-hidden text-slate-600">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Carousal />} />
          <Route path="/HeaderPage" exact element={<HeaderPage />} />
          <Route path="/Email" exact element={<Email />} />
          <Route path="/MultiStep" exact element={<MultiStep />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
