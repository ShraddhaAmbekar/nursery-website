import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "lightgallery/css/lightgallery.css";
import MainNavbar from "./components/home/Navbar";
import TopBar from "./components/home/TopBar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
    
        <TopBar />
      <MainNavbar />
<Routes>
  <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/programs/nursery" element={<h1>Nursery</h1>} />
        <Route path="/programs/lkg" element={<h1>Lower KG</h1>} />
        <Route path="/programs/ukg" element={<h1>Upper KG</h1>} />
        <Route path="/programs/day-care" element={<h1>Day Care</h1>} />
</Routes>
     

      <Footer />
    </div>
  );
};

export default App;
