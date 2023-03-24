import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import "./index.css";
import NavBar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { Footer } from './components/Footer';
import FAQ from "./pages/FAQ";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
