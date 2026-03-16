import React from "react";
import './Contact.css';
import aboutTitle from "../assets/about-title.jpg";



const ContactUs = () => {

  const handleSubmit = () => {
    alert('Your form is submited')
  }
  return (
    <div className="page-content">

      <div className="dlab-bnr-inr" style={{
        backgroundImage: `url(${aboutTitle})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}><div className="container"><div className="dlab-bnr-inr-entry"><h1 className="text-white">Contact Us</h1>
        <div className="breadcrumb-row">
          <ul className="list-inline">
            <li className="me-2">
              <a href="/" data-discover="true"><i className="fa fa-home"></i> </a>
            </li>
            <li className="me-2">Home</li>
            <li>contact us</li></ul></div>
      </div>

        </div>

      </div>




      {/* Content */}
      <div className="content-block">
        <div className="section-full bg-white">
          <div className="container">

            {/* Contact Info */}
            <div className="row align-items-center content-inner">

              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md m-b20 m-t5">
                    <a className="icon-cell text-blue" href="/contact-us">
                      <i className="ti-headphone-alt"></i>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-tilte m-b5">Call Us</h4>
                    <p className="ptag">
                      +91 9911255302
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md m-b20 m-t5">
                    <a className="icon-cell text-green" href="/contact-us">
                      <i className="ti-location-pin"></i>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-tilte m-b5">Our Location</h4>
                    <p className="ptag">
                      Humming Kitez Preschool
                      Near Gate No. 1, Emaar Palm Gardens
                      Sector 83, Gurgaon, Haryana
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="icon-bx-wraper m-b30 left">
                  <div className="icon-md m-b20 m-t5">
                    <a className="icon-cell text-orange" href="/contact-us">
                      <i className="ti-email"></i>
                    </a>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-tilte m-b5">Email Us</h4>
                    <p className="ptag">
                      hummingkitez@gmail.com
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Map */}
            <div className="row content-inner-4">
              <div className="banner-map col-md-12">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.833813380808!2d76.97325287494797!3d28.394086994869728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d285ba06507%3A0x7cf52e8651554b8a!2sHumming%20Kitez!5e0!3m2!1sen!2sin!4v1773649481762!5m2!1sen!2sin"
                  className="align-self-stretch rounded-sm border-0"
                  style={{ width: "100%", height: "600px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
               
              </div>
            </div>

            {/* Contact Form */}
          
              <div className="row contact-box content-inner-5">

                <div className="section-head text-center col-md-12">
                  <h2 className="heading">
                    Get in Touch with Humming kitez </h2>
                  <p className="m-b0 subheading">
                    Have questions about admissions, programs, or school visits.
                    <br />
                    Our team at Humming Kitez is happy to assist you.<br /> Send us a message and we will get back to you soon.
                  </p>
                </div>

                <div className="dzFormMsg"></div>

                <form method="post" className="dzForm col-md-12" onClick={handleSubmit}>
                  <input type="hidden" name="dzToDo" value="Contact" />

                  <div className="row">

                    <div className="col-md-4 col-sm-4">
                      <div className="form-group">
                        <input
                          name="dzName"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="form-group">
                        <input
                          name="dzEmail"
                          type="email"
                          required
                          className="form-control"
                          placeholder="Your Email Address"
                        />
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="form-group">
                        <input
                          name="dzOther[Phone]"
                          type="number"
                          required
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <textarea
                          name="dzMessage"
                          rows="4"
                          className="form-control"
                          required
                          placeholder="Your message here"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 text-center">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn main-btn"

                      >
                        Send Message <span></span>
                      </button>
                    </div>

                  </div>
                </form>

              </div>
          
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
