import { Container } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  return (
    <section className="hero-section position-relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        slidesPerView={1}
        loop={true}
        speed={1200}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="hero-slider"
      >
        {/* Slide 1 */}
        <SwiperSlide className="hero-slide slide1">
          <Container>
            <div className="hero-wrapper">
              <div className="hero-left">
                <h2>
                  Building Bright Futures
                  One Step at a Time
                </h2>

                <p className="dark-text">
                  A safe and inspiring place for children to grow and shine.
                </p>

                <div className="hero-buttons">
                  <a href="/contact" className="button-join">
                    Enquire Now
                  </a>
                </div>
              </div>

              <div className="hero-right"></div>
            </div>
          </Container>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="hero-slide slide2">
          <Container>
            <div className="hero-wrapper">
              <div className="hero-left">
                <h2>
                  Building Bright Futures
                  One Step at a Time
                </h2>

                <p className="dark-text">
                  A safe and inspiring place for children to grow and shine.
                </p>

                <div className="hero-buttons">
                  <a href="/contact" className="button-join">
                    Enquire Now
                  </a>
                </div>
              </div>

              <div className="hero-right"></div>
            </div>
          </Container>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="hero-slide slide3">
          <Container>
            <div className="hero-wrapper">
              <div className="hero-left">
                <h2>
                  Building Bright Futures
                  One Step at a Time
                </h2>

                <p className="dark-text">
                  A safe and inspiring place for children to grow and shine.
                </p>

                <div className="hero-buttons">
                  <a href="/contact" className="button-join">
                    Enquire Now
                  </a>
                </div>
              </div>

              <div className="hero-right"></div>
            </div>
          </Container>
        </SwiperSlide>
        

        
      </Swiper>
    </section>
  );
};

export default HeroSlider;
