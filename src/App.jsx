import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import MainNavbar from "./components/home/Navbar";
import TopBar from "./components/home/TopBar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ContactUs from "./components/Contact";

import Nursery from "./components/Programs/Nursery";
import LowerKg from "./components/Programs/LowerKg";
import UpperKg from "./components/Programs/UpperKg";
import DayCare from "./components/Programs/DayCare";

import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import FooterSocial from "./components/FoterIcons";

import PopupModal from "./components/PopupModal";

const App = () => {
  return (
    <div>

      <TopBar />
      <MainNavbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/programs/nursery" element={<Nursery />} />
        <Route path="/programs/lkg" element={<LowerKg />} />
        <Route path="/programs/ukg" element={<UpperKg />} />
        <Route path="/programs/day-care" element={<DayCare />} />
      </Routes>

      <Footer />

      {/* GLOBAL MODAL */}
      <PopupModal delay={5000} />

      <FooterSocial />
    </div>
  );
};

export default App;
