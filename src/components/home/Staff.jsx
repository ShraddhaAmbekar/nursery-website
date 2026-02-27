import Slider from "react-slick";
import { Container } from "react-bootstrap";
import staffImg1 from "../../assets/staff.jpg"

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
                  <div className="team-box">
                    <div className="staff-card">
                      <div className="dlab-thum">
                        <img
                           src={staffImg1}
                          alt=""
                        />

                        <div className="overlay-bx">
                          <h5 className="team-title">
                            <a href="/teachers-details">Jone Doe</a>
                          </h5>
                             <span className="team-info">Teachers</span>
                          <ul className="list-inline">
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-facebook"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-google-plus"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-linkedin"></i></a></li>
                            <li><a href="/" data-discover="true"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-twitter"></i></a></li>
                          </ul>
                       
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                 <div>
                  <div className="team-box">
                    <div className="staff-card">
                      <div className="dlab-thum">
                        <img
                          src={staffImg1}
                          alt=""
                        />

                        <div className="overlay-bx">
                          <h5 className="team-title">
                            <a href="/teachers-details">Jone Doe</a>
                          </h5>
                             <span className="team-info">Teachers</span>
                          <ul className="list-inline">
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-facebook"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-google-plus"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-linkedin"></i></a></li>
                            <li><a href="/" data-discover="true"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-twitter"></i></a></li>
                          </ul>
                       
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                 <div>
                  <div className="team-box">
                    <div className="staff-card">
                      <div className="dlab-thum">
                        <img
                            src={staffImg1}
                          alt=""
                        />

                        <div className="overlay-bx">
                          <h5 className="team-title">
                            <a href="/teachers-details">Jone Doe</a>
                          </h5>
                             <span className="team-info">Teachers</span>
                          <ul className="list-inline">
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-facebook"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-google-plus"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-linkedin"></i></a></li>
                            <li><a href="/" data-discover="true"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-twitter"></i></a></li>
                          </ul>
                       
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                  <div>
                  <div className="team-box">
                    <div className="staff-card">
                      <div className="dlab-thum">
                        <img
                          src={staffImg1}
                          alt=""
                        />

                        <div className="overlay-bx">
                          <h5 className="team-title">
                            <a href="/teachers-details">Jone Doe</a>
                          </h5>
                             <span className="team-info">Teachers</span>
                          <ul className="list-inline">
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-facebook"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-google-plus"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-linkedin"></i></a></li>
                            <li><a href="/" data-discover="true"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="/" data-discover="true">
                              <i className="fa fa-twitter"></i></a></li>
                          </ul>
                       
                        </div>

                      </div>
                    </div>
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
