import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";

import arrowImg from "../../assets/arrow.png";
import imageFrame from "../../assets/image-frame.png";

const GallerySection = () => {

  const swiperRef = useRef(null);

  const NextArrow = () => {
    return (
      <div
        className="sprite-arrow next"
        style={{ backgroundImage: `url(${arrowImg})` }}
        onClick={() => swiperRef.current?.slideNext()}
      ></div>
    );
  };

  const PrevArrow = () => {
    return (
      <div
        className="sprite-arrow prev"
        style={{ backgroundImage: `url(${arrowImg})` }}
        onClick={() => swiperRef.current?.slidePrev()}
      ></div>
    );
  };

  return (
    <section className="section2 mt-5">
      <Container fluid>
 
   <div className="section-head text-center">
              <h2 className="heading">Gallery of Our classes</h2>
              <p className="subheading text-center"> Our activities encourage exploration, creativity, and problem-solving while making learning fun.</p>
            </div>

        <div className="slider-container position-relative">

          {/* arrows */}
          <PrevArrow />
          <NextArrow />

          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            speed={800}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}

            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
          >

            <SwiperSlide>
              <div className="gallery-card">
                <div
                  className="frame"
                  style={{
                    background: `url(${imageFrame}) no-repeat center center`,
                    backgroundSize: "contain",
                  }}
                >
                  <div className="overlay">
                    <i className="fa fa-search"></i>
                  </div>

                  <img
                    src="/images/Gallery-01-r.webp"
                    alt="gallery"
                  />
                </div>
              </div>
            </SwiperSlide>
   <SwiperSlide>
              <div className="gallery-card">
                <div
                  className="frame"
                  style={{
                    background: `url(${imageFrame}) no-repeat center center`,
                    backgroundSize: "contain",
                  }}
                >
                  <div className="overlay">
                    <i className="fa fa-search"></i>
                  </div>

                  <img
                    src="/images/Gallery-08-r.webp"
                    alt="gallery"
                  />
                </div>
              </div>
            </SwiperSlide>
   <SwiperSlide>
              <div className="gallery-card">
                <div
                  className="frame"
                  style={{
                    background: `url(${imageFrame}) no-repeat center center`,
                    backgroundSize: "contain",
                  }}
                >
                  <div className="overlay">
                    <i className="fa fa-search"></i>
                  </div>

                  <img
                    src="/images/Gallery-04-r.webp"
                    alt="gallery"
                  />
                </div>
              </div>
            </SwiperSlide>

    
          </Swiper>

        </div>

      </Container>
    </section>
  );
};

export default GallerySection;
