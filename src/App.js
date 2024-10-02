import NavBar from './component/NavBar';
import "./index.css"
import StartHerePage from './component/StartHerePage';

import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/StartHerePage" element={<StartHerePage />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
