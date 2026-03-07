import Slider from "react-slick";
import { Container } from "react-bootstrap";
import arrowImg from "../../assets/arrow.png";
import imageFrame from "../../assets/image-frame.png";


const GallerySection = () => {
  const NextArrow = ({ onClick }) => {
    return <div className="sprite-arrow next" style={{ backgroundImage: `url(${arrowImg})` }} onClick={onClick}></div>;
  };

  const PrevArrow = ({ onClick }) => {
    return <div className="sprite-arrow prev" style={{ backgroundImage: `url(${arrowImg})` }} onClick={onClick}></div>;
  };

  const settings = {
    dots: false,
    initialSlide: 0,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (

    <>
      <section className="section2 mt-5">
        <Container fluid>
          <div className="section2-wrapper">
            <div className="section-head text-center mb-5">
              <h2 className="heading">Gallery of our Classes</h2>
              <p className="subheading text-center">We provide three classes with nine to twenty children each aged twelve <br />months to six years of age.</p>
            </div>

            <div>
              <section className="gallery-section">

                <div className="slider-container">
                  <Slider {...settings} className="gallery-slider">
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
                          src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg"
                          alt="gallery"
                        />


                      </div>
                    </div>
                    <div className="gallery-col">
                      <div className="gallery-card">
                        <div className="frame" style={{
                          background: `url(${imageFrame} ) no-repeat center center`,
                          backgroundSize: 'contain',
                        }}><div className="overlay">
                          <i className="fa fa-search"></i>
                        </div>
                          <img
                            src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg"
                            alt="gallery"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="gallery-col">
                      <div className="gallery-card">
                        <div className="frame" style={{
                          background: `url(${imageFrame} ) no-repeat center center`,
                          backgroundSize: 'contain',
                        }}><div className="overlay">
                          <i className="fa fa-search"></i>
                        </div>
                          <img
                            src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg"
                            alt="gallery"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="gallery-col">
                      <div className="gallery-card">
                        <div className="frame" style={{
                          background: `url(${imageFrame} ) no-repeat center center`,
                          backgroundSize: 'contain',
                        }}>
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
