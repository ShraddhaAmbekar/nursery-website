// components/Gallery.jsx

import { useState } from "react";
import "./Gallery.css";
import aboutTitle from "../assets/about-title.jpg";
import { Link } from "react-router";

const images = [
"/images/Gallery-01-r.webp",
"/images/Gallery-02-r.webp",
"/images/Gallery-03-r.webp",
"/images/Gallery-04-r.webp",
"/images/Gallery-05-r.webp",
"/images/Gallery-06-r.webp",
"/images/Gallery-08-r.webp",
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery-page">

         <div className="page-content">
              <div className="dlab-bnr-inr" style={{
                backgroundImage: `url(${aboutTitle})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
                <div className="container"><div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Gallery</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li className="me-2">
                      <Link to="/" data-discover="true"><i className="fa fa-home"></i> </Link>
                    </li>
                    <li className="me-2">Home &gt;</li>
                    <li>Gallery</li></ul></div>
              </div>
      
                </div>
      
              </div></div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-card">
            <img src={img} alt="gallery" onClick={() => setSelectedImg(img)} />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="preview" />
        </div>
      )}

    </div>
  );
};

export default Gallery;
