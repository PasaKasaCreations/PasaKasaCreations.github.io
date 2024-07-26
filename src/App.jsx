import { useState } from "react";
import ExtendedNavbar from "./components/ExtendedNavbar";
import Navbar from "./components/Navbar";
import NavbarContext from "./context/NavbarContext";

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
    </div>
  );
}

export default App;
