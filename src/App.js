import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zac Sirna Portfolio</h1>
      </header>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
