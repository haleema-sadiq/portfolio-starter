import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import './App.css';
import Experince from "./Components/Experince/Experince";
import Work from "./Components/Work/Work";
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Intro/>
  <Services/>
  <Experince/>
  <Work/>
    </div>
  );
}

export default App;
