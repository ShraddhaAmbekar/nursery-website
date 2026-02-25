import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { useEffect } from "react";


const GallerySection = () => {
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="section2 mt-5">
        <Container>
          <div className="section2-wrapper">
            <div className="section-head text-center mb-5">
              <h2 className="heading">Gallery of our Classes</h2>
              <p className="subheading text-center">We provide three classes with nine to twenty children each aged twelve <br/>months to six years of age.</p>
            </div>
            
            <div>
     

    <section className="gallery-section">
      
      <div className="slider-container">
<Slider {...settings} className="gallery-slider">
        <div className="gallery-col">
          <div className="gallery-card">
            <div className="frame">
              <img
                src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg"
                alt="gallery"
              />
            </div>
          </div>
        </div>
  <div className="gallery-col">
          <div className="gallery-card">
            <div className="frame">
              <img
                src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg"
                alt="gallery"
              />
            </div>
          </div>
        </div>
       
        <div className="gallery-col">
          <div className="gallery-card">
            <div className="frame">
              <img
                src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg"
                alt="gallery"
              />
            </div>
          </div>
        </div>
          <div className="gallery-col">
          <div className="gallery-card">
            <div className="frame">
              <img
                src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg"
                alt="gallery"
              />
            </div>
          </div>
        </div>
</Slider>
      </div>
    </section>

            </div>
          </div>
        </Container>
        </section>
      </>


      );
};

      export default GallerySection;
