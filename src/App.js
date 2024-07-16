import Navbar from "../src/components/Navbar";
import Home from "./pages/Home";
import Fighter from "./pages/Fighter";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col items-center tracking-wider font-Poppins">
      <Navbar />
      <Home />
      <Fighter />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
