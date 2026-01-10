import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <div className="w-full bg-[#080c18] flex justify-center items-center h-full">
        <div className="w-[70%] border-l border-r border-gray-800">
          <Header />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
