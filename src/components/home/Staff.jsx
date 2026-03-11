import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import staffImg1 from "../../assets/staff.jpg";

const StaffSection = () => {
  return (
    <section className="section2 mt-5">
      <Container>
        <div className="section2-wrapper">

          <div className="section-head text-center mb-5">
            <h2 className="heading">Meet Our Amazing Teachers.</h2>
            <p className="subheading text-center">
              A passionate team dedicated to ensure every child gets the care and guidance they deserve.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="staff-slider"
          >

            {/* Slide 1 */}
            <SwiperSlide>
              <div className="team-box">
                <div className="staff-card">
                  <div className="dlab-thum">
                    <img src={staffImg1} alt="" />

                    <div className="overlay-bx">
                      <h5 className="team-title">
                        <a href="/teachers-details">Jone Doe</a>
                      </h5>

                      <span className="team-info">Teachers</span>

                      <ul className="list-inline">
                        <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="team-box">
                <div className="staff-card">
                  <div className="dlab-thum">
                    <img src={staffImg1} alt="" />

                    <div className="overlay-bx">
                      <h5 className="team-title">
                        <a href="/teachers-details">Jone Doe</a>
                      </h5>

                      <span className="team-info">Teachers</span>

                      <ul className="list-inline">
                        <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="team-box">
                <div className="staff-card">
                  <div className="dlab-thum">
                    <img src={staffImg1} alt="" />

                    <div className="overlay-bx">
                      <h5 className="team-title">
                        <a href="/teachers-details">Jone Doe</a>
                      </h5>

                      <span className="team-info">Teachers</span>

                      <ul className="list-inline">
                        <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="team-box">
                <div className="staff-card">
                  <div className="dlab-thum">
                    <img src={staffImg1} alt="" />

                    <div className="overlay-bx">
                      <h5 className="team-title">
                        <a href="/teachers-details">Jone Doe</a>
                      </h5>

                      <span className="team-info">Teachers</span>

                      <ul className="list-inline">
                        <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>

        </div>
      </Container>
    </section>
  );
};

export default StaffSection;
