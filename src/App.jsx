import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Service";
import Info from "./pages/Info";
// import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <div className="w-full bg-[#080c18] flex justify-center items-center h-full">
        <div className="w-full sm:w-[80%] md:w-[70%] border-l border-r border-gray-800">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Services />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
