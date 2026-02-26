import Slider from "react-slick";
import { Container } from "react-bootstrap";

const StaffSection = () => {
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
              <h2 className="heading">About the Teachers</h2>
              <p className="subheading text-center">We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
            </div>

            <div>
            <Slider {...settings} className="staff-slider">
  <div>
    <div className="staff-card">
      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />
    </div>
  </div>

  <div>
    <div className="staff-card">
      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />
    </div>
  </div>

  <div>
    <div className="staff-card">
      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />
    </div>
  </div>

  <div>
    <div className="staff-card">
      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />
    </div>
  </div>
</Slider>
            </div>
          </div>
        </Container>
      </section>
    </>


  );
};

export default StaffSection;
