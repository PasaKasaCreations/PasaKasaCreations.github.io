import { useState } from "react";
import ExtendedNavbar from "./components/ExtendedNavbar";
import Navbar from "./components/Navbar";
import NavbarContext from "./context/NavbarContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [activeNavElementId, setActiveNavElementId] = useState(1);

  function changeNavbarState(isNavbarActive) {
    setIsNavbarActive(isNavbarActive);
  }

  function changeNavbarActiveElementId(activeElement) {
    setActiveNavElementId(activeElement);
  }

  return (
    <div>
      <NavbarContext.Provider
        value={{
          isNavbarActive,
          changeNavbarState,
          activeNavElementId,
          changeNavbarActiveElementId,
        }}
      >
        <Navbar />
        <ExtendedNavbar />
      </NavbarContext.Provider>
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
