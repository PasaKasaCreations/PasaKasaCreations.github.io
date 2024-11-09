// import { useState } from "react";
// import ExtendedNavbar from "./components/ExtendedNavbar";
// import Navbar from "./components/Navbar";
// import NavbarContext from "./context/NavbarContext";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
// import TopButton from "./components/TopButton";
// import { BrowserRouter, useLocation } from "react-router-dom";

import CountdownTimer from "./components/CountDownTimer";

// function App() {
//   const [isNavbarActive, setIsNavbarActive] = useState(false);
//   const [activeNavElementId, setActiveNavElementId] = useState(1);

//   function changeNavbarState(isNavbarActive) {
//     setIsNavbarActive(isNavbarActive);
//   }

//   function changeNavbarActiveElementId(activeElement) {
//     setActiveNavElementId(activeElement);
//   }

//   return (
//     <div>
//       <NavbarContext.Provider
//         value={{
//           isNavbarActive,
//           changeNavbarState,
//           activeNavElementId,
//           changeNavbarActiveElementId,
//         }}
//       >
//         <Navbar />
//         <BrowserRouter>
//           <ExtendedNavbar />
//         </BrowserRouter>
//       </NavbarContext.Provider>
//       <Home />
//       <AboutUs />
//       <Services />
//       <Portfolio />
//       <Team />
//       <Contact />
//       <TopButton />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <CountdownTimer />
    </div>
  );
}

export default App;
