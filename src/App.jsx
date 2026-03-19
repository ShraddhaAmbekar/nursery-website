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
import Modal from "react-modal";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import FooterSocial from "./components/FoterIcons";

Modal.setAppElement("#root");

const App = () => {

  // 🔹 Popup control
  const [showModal, setShowModal] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // 🔹 Form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    admission: ""
  });

  const [errors, setErrors] = useState({});

  // ✅ Scroll trigger
useEffect(() => {
  const handleScroll = () => {
    if (!hasShown && window.scrollY > 500) {
      setShowModal(true);
      setHasShown(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [hasShown]);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Enter name";

    if (!formData.phone || formData.phone.length < 10)
      newErrors.phone = "Enter valid phone";

    if (!formData.email.includes("@"))
      newErrors.email = "Enter valid email";

    if (!formData.admission)
      newErrors.admission = "Select class";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");
      setShowModal(false);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        admission: ""
      });
    }
  };

  return (
    <div>

      {/*  HEADER */}
      <TopBar />
      <MainNavbar />

      {/*  ROUTES */}
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/programs/nursery" element={<Nursery />} />
        <Route path="/programs/lkg" element={<LowerKg />} />
        <Route path="/programs/ukg" element={<UpperKg />} />
        <Route path="/programs/day-care" element={<DayCare />} />
      </Routes>

      {/* 🔹 FOOTER */}
      <Footer />

      {/*  CUTE POPUP MODAL */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
    overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
    content: {
      top: "55%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "450px",
     height:"50vh",
      maxHeight: "80vh",  
      overflowY: "auto", 
      borderRadius: "20px",
      padding: "25px",
      border: "4px solid #F9A82F",
      background: "linear-gradient(135deg, #fff7e6, #e6f7ff)",
      position:"relative",
      zIndex:9999
    }
  }}
      >
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setShowModal(false)}
            style={{
              float: "right",
              border: "none",
              background: "none",
              fontSize: "18px"
            }}
          >
            ✖
          </button>

          <h2 style={{ color: "#2F7F9D" }}>🎈 Admission Form</h2>
          <p>Fill & Join Our Happy School 😊</p>

          <form onSubmit={handleSubmit}>

            <input
              name="name"
              value={formData.name}
              placeholder="👦 Student Name"
              onChange={handleChange}
              className="cute-input"
            />
            {errors.name && <span>{errors.name}</span>}

            <input
              name="phone"
              value={formData.phone}
              placeholder="📱 Phone Number"
              onChange={handleChange}
              className="cute-input"
            />
            {errors.phone && <span>{errors.phone}</span>}

            <input
              name="email"
              value={formData.email}
              placeholder="📧 Email"
              onChange={handleChange}
              className="cute-input"
            />
            {errors.email && <span>{errors.email}</span>}

            <select
              name="admission"
              value={formData.admission}
              onChange={handleChange}
              className="cute-input"
            >
              <option value="">🎓 Select Class</option>
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Day Care</option>
            </select>
            {errors.admission && <span>{errors.admission}</span>}

            <button className="cute-btn">🚀 Submit</button>
          </form>
        </div>
      </Modal>
<FooterSocial/>
    </div>
  );
};

export default App;
