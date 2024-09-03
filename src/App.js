import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantSection from "./components/Plant";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Fruits from "./components/Fruits";
import Flowers from "./components/Flowers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<><PlantSection /><Content /></>} />
          <Route path="/details" element={<Details />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/flowers" element={<Flowers />} />
        <Route path="/explore" element={<Content />} />
        <Route path="/about" element={<Content />} />
        <Route path="/contact" element={<Content />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
