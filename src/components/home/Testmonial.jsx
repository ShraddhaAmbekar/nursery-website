import React from "react";
import { Container } from "react-bootstrap";
const TestmonialSection = () => {

  return (
    <>
      <section className="section2 mt-5">
        <Container>
          <div className="section2-wrapper">
            <div className="section-head text-center mb-5">
              <h2 className="heading">Testimonials about center</h2>
              <p className="subheading text-center">We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
            </div>

            <div>
              <section className="gallery-section">
                <div className="row">

                  <div className="col">
                    <div className="gallery-card">
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />

                    </div>
                  </div>

                  <div className="col">
                    <div className="gallery-card">
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />

                    </div>
                  </div>

                  <div className="col">
                    <div className="gallery-card">
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

export default TestmonialSection;


