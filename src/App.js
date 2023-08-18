// import logo from './logo.svg';
import './App.css';
import {LandingPage} from './components/LandingPage';
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import { Songs } from './components/Songs';
function App() {

  return (
    <div className="h-[100%]">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/album/:name" element={<Songs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
