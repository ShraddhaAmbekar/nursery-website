// components/Gallery.jsx

import { useState } from "react";
import "./Gallery.css";

const images = [
  "https://tse1.mm.bing.net/th/id/OIP.yXvflNd8eN_KD_8D2Xo1GgHaE8?pid=Api",
  "https://tse1.mm.bing.net/th/id/OIP.yXvflNd8eN_KD_8D2Xo1GgHaE8?pid=Api",
  "https://tse1.mm.bing.net/th/id/OIP.yXvflNd8eN_KD_8D2Xo1GgHaE8?pid=Api",
  "https://tse1.mm.bing.net/th/id/OIP.yXvflNd8eN_KD_8D2Xo1GgHaE8?pid=Api",
  "https://tse1.mm.bing.net/th/id/OIP.yXvflNd8eN_KD_8D2Xo1GgHaE8?pid=Api",
  "https://tse1.mm.bing.net/th/id/OIP.yXvflNd8eN_KD_8D2Xo1GgHaE8?pid=Api",
  "https://tse1.mm.bing.net/th/id/OIP.yXvflNd8eN_KD_8D2Xo1GgHaE8?pid=Api",
  "/images/g8.jpg",
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery-page">

      <h1 className="gallery-heading">Our Gallery</h1>
      <p className="gallery-text">
        Beautiful moments from our school
      </p>

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
