import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Notification from "./pages/Notification";
import Location from "./pages/Location";
import Settings from "./pages/Settings";
import Menu from "./pages/Menu";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex dark:bg-dark-200">
      <Navbar />
      <div className="bg-gray-2 w-full h-full min-h-screen lg:pl-[6.25rem]">
        <div className="bg-gray-2 dark:bg-dark-300 lg:h-[8.125rem] w-full sticky top-0 z-50 border-b ">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
