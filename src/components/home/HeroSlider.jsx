import Slider from "react-slick";
import { Container } from "react-bootstrap";

const HeroSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1200,
    fade: true,
    autoplaySpeed: 5000,
  };


  return (
    <section className="hero-section  position-relative">
      <Slider {...settings} className="hero-slider">

        <div className="hero-slide slide1" >
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

              <div className="hero-right">
                {/* <img src={heroImg} alt="kids" /> */}
              </div>

            </div>
          </Container>

          {/* Floating Shapes
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div> */}

        </div>
        <div className="hero-slide slide2" >
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

              <div className="hero-right">
                {/* <img src={heroImg} alt="kids" /> */}
              </div>

            </div>
          </Container>

          {/* Floating Shapes
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div> */}

        </div>  <div className="hero-slide slide3" >
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

              <div className="hero-right">
                {/* <img src={heroImg} alt="kids" /> */}
              </div>

            </div>
          </Container>

          {/* Floating Shapes
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div> */}

        </div>





      </Slider>
    </section>
  );
};

export default HeroSlider;
