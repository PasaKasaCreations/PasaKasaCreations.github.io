import { useState } from "react";
import ExtendedNavbar from "./components/ExtendedNavbar";
import Navbar from "./components/Navbar";
import NavbarContext from "./context/NavbarContext";
import Home from "./pages/Home";

function App() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  function changeNavbarState(isNavbarActive) {
    setIsNavbarActive(isNavbarActive);
  }

  return (
    <div>
      <NavbarContext.Provider value={{ isNavbarActive, changeNavbarState }}>
        <Navbar />
        <ExtendedNavbar />
      </NavbarContext.Provider>
      <Home />
    </div>
  );
}

export default App;
