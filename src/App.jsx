import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainNavbar from "./components/home/Navbar";
import TopBar from "./components/home/TopBar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { Route, Routes } from "react-router-dom";
import Nursery from "./components/Programs/Nursery";
import LowerKg from "./components/Programs/LowerKg";
import UpperKg from "./components/Programs/UpperKg";
import DayCare from "./components/Programs/DayCare";
import ContactUs from "./components/Contact";

const App = () => {
  
  return (
    <div>

      <TopBar />
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<h1><ContactUs/></h1>} />
        <Route path="/programs/nursery" element={<h1><Nursery/></h1>} />
        <Route path="/programs/lkg" element={<LowerKg/>} />
        <Route path="/programs/ukg" element={<h1><UpperKg/></h1>} />
        <Route path="/programs/day-care" element={<h1><DayCare/></h1>} />
      </Routes>


      <Footer />
    </div>
  );
};

export default App;
