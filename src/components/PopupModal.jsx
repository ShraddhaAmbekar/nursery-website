// components/PopupModal.jsx

import Modal from "react-modal";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

Modal.setAppElement("#root");

const PopupModal = ({ delay = 5000 }) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    admission: ""
  });

  const [errors, setErrors] = useState({});

useEffect(() => {
  
  if (location.pathname.includes("contact")) return;

  const timer = setTimeout(() => {
    console.log("Modal should open now"); // debug
    setShowModal(true);
  }, delay);

  return () => clearTimeout(timer);
}, [location.pathname, delay]);
  // ✏️ Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Enter name";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit phone";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter valid email";
    if (!formData.admission)
      newErrors.admission = "Select class";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");
      setShowModal(false);

      setFormData({
        name: "",
        phone: "",
        email: "",
        admission: ""
      });
    }
  };

  return (
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
        <p className="modal-subtitle">
          Fill & Join Our Happy School 😊
        </p>

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
          {errors.admission && (
            <span className="error">{errors.admission}</span>
          )}

          <button className="cute-btn">🚀 Submit</button>
        </form>
      </div>
    </Modal>
  );
};

export default PopupModal;
