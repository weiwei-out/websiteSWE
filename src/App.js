import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
// import Rain from "./Components/Rain";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <SideBar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
