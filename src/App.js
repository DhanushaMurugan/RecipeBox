
import Homepage from "./component/Homepage";
import "./index.css"
import StartHerePage from './component/StartHerePage';
import './App.css';
import About from './component/About';
import Recipes from './component/Recipes';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/StartHerePage" element={<StartHerePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
