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
      if (!hasShown && window.scrollY > 200) {
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
      <ScrollToTop />
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
  className="custom-modal"
  overlayClassName="custom-overlay"
>
  <div className="modal-content-wrapper">
    
    <button
      onClick={() => setShowModal(false)}
      className="close-btn"
    >
      ✖
    </button>

    <h2 className="modal-title">🎈 Admission Form</h2>
    <p className="modal-subtitle">Fill & Join Our Happy School 😊</p>

    <form onSubmit={handleSubmit} className="modal-form">

      <input
        name="name"
        value={formData.name}
        placeholder="👦 Student Name"
        onChange={handleChange}
        className="cute-input"
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        name="phone"
        value={formData.phone}
        placeholder="📱 Phone Number"
        onChange={handleChange}
        className="cute-input"
      />
      {errors.phone && <span className="error">{errors.phone}</span>}

      <input
        name="email"
        value={formData.email}
        placeholder="📧 Email"
        onChange={handleChange}
        className="cute-input"
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <select
        name="admission"
        value={formData.admission}
        onChange={handleChange}
        className="cute-input"
      >
        <option value="">🎓 Select Program</option>
        <option>Nursery</option>
        <option>LKG</option>
        <option>UKG</option>
        <option>Day Care</option>
      </select>
      {errors.admission && <span className="error">{errors.admission}</span>}

      <button className="cute-btn">🚀 Submit</button>
    </form>

  </div>
</Modal>
      <FooterSocial />
    </div>
  );
};

export default App;
