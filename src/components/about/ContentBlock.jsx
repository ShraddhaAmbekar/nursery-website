import React from 'react'
import cloludDivider from "../../assets/cloud-divider.png"
import aboutTitle from "../../assets/about-title.jpg"
import aboutBg from "../../assets/about-bg.png"
import { Accordion } from 'react-bootstrap'
import about1Img from "../../assets/about1-img.jpg"
import aboutFrame from "../../assets/about-frame.png"
import divider1 from "../../assets/line-divider.png"
import divider2 from "../../assets/line-divider2.png"

const ContentBlock = () => {
  return (
    <div>
      <div className="page-content">
        <div className="dlab-bnr-inr" style={{ backgroundImage: `url(${aboutTitle})`, backgroundSize: "auto" }}><div className="container"><div className="dlab-bnr-inr-entry"><h1 className="text-white">About Us 1</h1>
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li className="me-2">
                <a href="/" data-discover="true"><i className="fa fa-home"></i> </a>
              </li>
              <li className="me-2">Home</li>
              <li>About Us 1</li></ul></div>
        </div>
        
        </div>
         <div className="section-divider" style={{ position: "relative",display:'flex', width: "100%", height: "200px", padding: "0", alignItems: "end", zIndex: 2 }}>
            <img src={cloludDivider} alt="divider" />
          </div>
        </div>

        <div className="content-block">
          <div className="section-full bg-white content-inner-2 about-area"
            style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 m-b15">
                  <div className="section-head">
                    <h2 className="heading">New Concept In Children’s Play</h2>
                    <p className='subheading'>The concept of school and pre-school education consists of 3 programs of development and training in our
                      academy.The concept of school and pre-school education consists of 3 programs of development.</p>
                  </div>
                  <Accordion className="faq-box accordion accordion-flush" flush>

                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        500 new items in the toy collection
                      </Accordion.Header>
                      <Accordion.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Throwing birthday parties is fun and easy
                      </Accordion.Header>
                      <Accordion.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Multiple benefits from buying a membership
                      </Accordion.Header>
                      <Accordion.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Fresh snacks and beverages for everyone
                      </Accordion.Header>
                      <Accordion.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Over 1 000 visitors for the last year
                      </Accordion.Header>
                      <Accordion.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 teacher-content">
                  <div className="split-box split-active">
                    <div className="about-media"><img src={about1Img} alt="yhg" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full bg-white content-inner-2 about-content bg-img-fix"
            style={{ backgroundImage: `url(${aboutFrame})` }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12  about-text"
                  style={{ visibility: "visible", animationDuration: "2s", animationDelay: "0.2s", animationName: "fadeIn" }}>
                  <div className="section-head text-center">
                    <div className="video-play"><button className="popup-youtube video border-0"><i className="fa fa-play"></i> </button>
                    </div>
                    <h2>Let Your Kids Have an Amazing<br />Time at the Park</h2><a className="btn btn-md radius-xl" href="/contact-us"
                      data-discover="true">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-divider" style={{ position: "relative", zIndex: 2 }}>
            <img src={divider1} alt="divider" />
          </div>
          <div className="section-full content-inner">
            <div className="container">
              <div className="section-head text-center">
                <h2 className="head-title text-secondry">Gallery of our classes</h2>
                <p>We provide three classes with nine to twenty children each aged twelve months to six years of age.</p>
              </div>
              <div className="clearfix" id="lightgallery">
                <div className="lg-react-element ">
                  <ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery row">
                    <li className="web design card-container col-lg-4 col-md-6 col-sm-6 wow zoomIn">
                      <div className="dlab-box frame-box m-b30">
                        <div className="dlab-thum dlab-img-overlay1"><img src="/assets/pic1-C5dqVgPR.jpg" alt="abc" />
                          <div className="overlay-bx">
                            <div className="overlay-icon"><span data-src="/assets/pic1-C5dqVgPR.jpg" className="check-km lightimg"
                              title="Title Come Here" data-lg-id="1b772c96-37a2-44f1-8c14-c270c3987679"><i
                                className="fa fa-search icon-bx-xs"></i><img src="/assets/pic1-C5dqVgPR.jpg" alt="xyz"
                                  className="d-none" /></span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="web design card-container col-lg-4 col-md-6 col-sm-6 wow zoomIn">
                      <div className="dlab-box frame-box m-b30">
                        <div className="dlab-thum dlab-img-overlay1"><img src="/assets/pic2-BtQTdJ8y.jpg" alt="abc" />
                          <div className="overlay-bx">
                            <div className="overlay-icon"><span data-src="/assets/pic2-BtQTdJ8y.jpg" className="check-km lightimg"
                              title="Title Come Here" data-lg-id="5e0d382e-d86e-4dd3-9f46-595364ecf66a"><i
                                className="fa fa-search icon-bx-xs"></i><img src="/assets/pic2-BtQTdJ8y.jpg" alt="xyz"
                                  className="d-none" /></span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="web design card-container col-lg-4 col-md-6 col-sm-6 wow zoomIn">
                      <div className="dlab-box frame-box m-b30">
                        <div className="dlab-thum dlab-img-overlay1"><img src="/assets/pic3-C0datZfN.jpg" alt="abc" />
                          <div className="overlay-bx">
                            <div className="overlay-icon"><span data-src="/assets/pic3-C0datZfN.jpg" className="check-km lightimg"
                              title="Title Come Here" data-lg-id="6cecca1f-3d91-40f2-b1bd-c2a1bfebedce"><i
                                className="fa fa-search icon-bx-xs"></i><img src="/assets/pic3-C0datZfN.jpg" alt="xyz"
                                  className="d-none" /></span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="web design card-container col-lg-4 col-md-6 col-sm-6 wow zoomIn">
                      <div className="dlab-box frame-box m-b30">
                        <div className="dlab-thum dlab-img-overlay1"><img src="/assets/pic4-BZ6CO95_.jpg" alt="abc" />
                          <div className="overlay-bx">
                            <div className="overlay-icon"><span data-src="/assets/pic4-BZ6CO95_.jpg" className="check-km lightimg"
                              title="Title Come Here" data-lg-id="2b8c4e77-b42e-42a2-9e0c-db526e058651"><i
                                className="fa fa-search icon-bx-xs"></i><img src="/assets/pic4-BZ6CO95_.jpg" alt="xyz"
                                  className="d-none" /></span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="web design card-container col-lg-4 col-md-6 col-sm-6 wow zoomIn">
                      <div className="dlab-box frame-box m-b30">
                        <div className="dlab-thum dlab-img-overlay1"><img src="/assets/pic5-Climy0-K.jpg" alt="abc" />
                          <div className="overlay-bx">
                            <div className="overlay-icon"><span data-src="/assets/pic5-Climy0-K.jpg" className="check-km lightimg"
                              title="Title Come Here" data-lg-id="8613a25c-34cd-4ad6-b8cc-e42b17fb91d1"><i
                                className="fa fa-search icon-bx-xs"></i><img src="/assets/pic5-Climy0-K.jpg" alt="xyz"
                                  className="d-none" /></span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="web design card-container col-lg-4 col-md-6 col-sm-6 wow zoomIn">
                      <div className="dlab-box frame-box m-b30">
                        <div className="dlab-thum dlab-img-overlay1"><img src="/assets/pic6-Bnfat-Il.jpg" alt="abc" />
                          <div className="overlay-bx">
                            <div className="overlay-icon"><span data-src="/assets/pic6-Bnfat-Il.jpg" className="check-km lightimg"
                              title="Title Come Here" data-lg-id="656a7abe-c621-4229-b0b5-6131a383b2e8"><i
                                className="fa fa-search icon-bx-xs"></i><img src="/assets/pic6-Bnfat-Il.jpg" alt="xyz"
                                  className="d-none" /></span></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider" style={{ position: "relative", zIndex: 2 }}>
            <img src={divider2} alt="divider" />
          </div>
          <div className="section-full bg-white content-inner-2 about-content bg-img-fix"
            style={{ backgroundImage: "url('/assets/bg6-BjSOE_4h.jpg')" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12  about-text"
                  style={{ visibility: "visible", animationDuration: "2s", animationDelay: "0.2s", animationName: "fadeIn" }}>
                  <div className="section-head text-center">
                    <h4 className="text-white">Join Our New Session</h4>
                    <h2>Call To Enrol Your Child <br /><span className="text-yellow">222 4444 000</span></h2><a
                      className="btn btn-md radius-xl" href="/contact-us" data-discover="true">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full bg-white content-inner-2"
            style={{ backgroundImage: "url('/assets/divider.jpg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="container">
              <div className="section-head text-center">
                <h2 className="head-title text-secondry">Testimonials about center</h2>
                <p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the
                  attention he or she needs</p>
              </div>
              <div className="sprite-nav client-carousel owl-theme">
                <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style={{ width: "1096px" }}>
                      <div className="item">
                        <div className="client-box">
                          <div className="testimonial-detail clearfix">
                            <div className="testimonial-pic radius"><img
                              src=""
                              width="100" height="100" alt="fghd" /></div>
                            <h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5><span>Client</span>
                          </div>
                          <div className="testimonial-text">
                            <p>My younger son returns very happy with all activities happening at your school every day. I am
                              glad that my son is being taught in your school. You have the motst qualified teachers in the
                              area! My daughter is very satisfied with lessons of English and Math – they give her additional
                              impact for development. Thank you!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style={{ width: "1096px" }}>
                      <div className="item">
                        <div className="client-box">
                          <div className="testimonial-detail clearfix">
                            <div className="testimonial-pic radius"><img
                              src=""
                              width="100" height="100" alt="fdgs" /></div>
                            <h5 className="testimonial-name m-t0 m-b5">Mr. Jone Deo</h5><span>Client</span>
                          </div>
                          <div className="testimonial-text">
                            <p>My younger son returns very happy with all activities happening at your school every day. I am
                              glad that my son is being taught in your school. You have the motst qualified teachers in the
                              area! My daughter is very satisfied with lessons of English and Math – they give her additional
                              impact for development. Thank you!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav" style={{ textAlign: "center" }}>
                  <div className="owl-prev"></div>
                  <div className="owl-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBlock
