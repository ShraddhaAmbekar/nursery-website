import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import frame from "../../assets/image-frame2.png";


const StaffSection = () => {

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
              <section className="staff-section">
                <div className="row">
                  <div className="col">
                    <div className="staff-card">
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col">
                    <div className="staff-card">
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />

                    </div>
                  </div>

                  <div className="col">
                    <div className="staff-card">
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />

                    </div>
                  </div>

                  <div className="col">
                    <div className="staff-card">
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />

                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>


  );
};

export default StaffSection;
