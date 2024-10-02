import './App.css';
import About from './component/About';
import Recipes from './component/Recipes';
import "./index.css"
import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
