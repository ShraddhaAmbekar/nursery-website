
import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "lightgallery/css/lightgallery.css";   
import MainNavbar from "./components/home/Navbar";
import HeroSlider from "./components/home/HeroSlider";
import TopBar from "./components/home/TopBar";

import KidsCenter from "./components/home/KidsCenter";
import Dream from "./components/home/Section2";
import Section3 from "./components/home/Section3";

import GallerySection from "./components/home/GallerySection";
import StaffSection from "./components/home/Staff";
// import TestmonialSection from "./components/home/Testmonial";
import Blog from "./components/home/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
   
    <TopBar />
      <MainNavbar />
      <HeroSlider />
<KidsCenter/> 
<Dream/>   
<Section3/> 
<GallerySection/> 
  <StaffSection/>  
  {/* <TestmonialSection/> */}
   <Blog/> 
  <Footer />

    </div>
  );
};

export default App;
