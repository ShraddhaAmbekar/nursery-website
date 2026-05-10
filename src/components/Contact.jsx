import React from "react";
import "./Contact.css";
import aboutTitle from "../assets/about-title.jpg";
import { Link } from "react-router-dom";

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your form is submitted");
  };

  return (
    <div className="page-content">

      <div
        className="dlab-bnr-inr"
        style={{
          backgroundImage: `url(${aboutTitle})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">

            <h1 className="text-white">Contact Us</h1>

            <div className="breadcrumb-row">
              <ul className="list-inline">

                {/* Home Link */}
                <li className="me-2">
                  <Link to="/">
                    <i className="fa fa-home"></i>
                  </Link>
                </li>

                <li className="me-2">Home &gt;</li>
                <li>Contact Us</li>

              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content-block">
        <div className="section-full bg-white">
          <div className="container">

            {/* Contact Info */}
            <div className="row align-items-center content-inner">

              {/* Phone */}
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="icon-bx-wraper m-b30 left">

                  <div className="icon-md m-b20 m-t5">
                    <a className="icon-cell text-blue" href="tel:+919911255302">
                      <i className="ti-headphone-alt"></i>
                    </a>
                  </div>

                  <div className="icon-content">
                    <h4 className="dlab-tilte m-b5">Call Us</h4>
                    <p className="ptag">+91 9911255302</p>
                  </div>

                </div>
              </div>

              {/* Location */}
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="icon-bx-wraper m-b30 left">

                  <div className="icon-md m-b20 m-t5">
                    <a className="icon-cell text-green" href="tel:9911255302">
                      <i className="ti-location-pin"></i>
                    </a>
                  </div>

                  <div className="icon-content">
                    <h4 className="dlab-tilte m-b5">Our Location</h4>
                    <p className="ptag">
                      Humming Kitez Preschool, Near Gate No. 1, Emaar Palm Gardens,
                      Sector 83, Gurgaon, Haryana
                    </p>
                  </div>

                </div>
              </div>

              {/* Email */}
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="icon-bx-wraper m-b30 left">

                  <div className="icon-md m-b20 m-t5">
                    <a
                      className="icon-cell text-orange"
                      href="mailto:hummingkitez@gmail.com"
                    >
                      <i className="ti-email"></i>
                    </a>
                  </div>

                  <div className="icon-content">
                    <h4 className="dlab-tilte m-b5">Email Us</h4>
                    <p className="ptag">hummingkitez@gmail.com</p>
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
                  loading="lazy"
                ></iframe>

              </div>
            </div>

            {/* Contact Form */}
            <div className="row contact-box content-inner-5">

              <div className="section-head text-center col-md-12">
                <h2 className="heading">
                  Get in Touch with Humming Kitez
                </h2>

                <p className="m-b0 subheading">
                  Have questions about admissions, programs, or school visits?
                  <br />
                  Send us a message and we will get back to you soon.
                </p>
              </div>

              <form className="dzForm col-md-12" onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                      required
                    />
                  </div>

                  <div className="col-md-12 mt-3">
                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center mt-3">
                    <button type="submit" className="btn main-btn">
                      Send Message
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
