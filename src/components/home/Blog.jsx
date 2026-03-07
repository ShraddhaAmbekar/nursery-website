import React from 'react'

import { Container } from "react-bootstrap";
import Slider from 'react-slick';
import imageFrame from "../../assets/image-frame.png"

const Blog = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div>
      <section className="section2 mt-5">
        <Container>
          <div className="section2-wrapper">
            <div className="section-head text-center mb-5">
              <h2 className="heading">Early Learning Programs</h2>
              <p className="subheading text-center">We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
            </div>

            <div>
              <Slider {...settings} className="blog-slider">

                <div className="px-3">
                  <div className="post-card ">
                    <div className="frame" style={{
                      background: `url(${imageFrame} ) no-repeat center center`,
                      backgroundSize: 'contain',
                    }}>
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="Blog Post Image" />
                    </div>
                    <h4 className='post-title mt-3'>
                      Playgroup</h4>
                    <p className="post-text">
                      Where curiosity begins through play and discovery
                    </p>
                    <a href="#" className='btn-link'>Read more</a>
                  </div></div>

                <div className="px-3">
                  <div className="post-card ">
                    <div className="frame" style={{
                      background: `url(${imageFrame} ) no-repeat center center`,
                      backgroundSize: 'contain',
                    }}>
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" /></div>

                    <h4 className='post-title mt-3'>Kindergarten</h4>
                    <p className="post-text">
                      Building confidence, creativity, and early academic skills.
                    </p>
                    <a href="#" className='btn-link'>Read more</a>
                  </div>    </div>

                <div className="px-3">
                  <div className="post-card">
                    <div className="frame" style={{
                      background: `url(${imageFrame} ) no-repeat center center`,
                      backgroundSize: 'contain',
                    }}>
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" /></div>

                    <h4 className='post-title mt-3'>Day Care</h4>
                    <p className="post-text">
                      A safe and loving environment for children while parents are at work.
                    </p>
                    <a href="#" className='btn-link'>Read more</a>
                  </div>
                </div>
                   <div className="px-3">
                  <div className="post-card">
                    <div className="frame" style={{
                      background: `url(${imageFrame} ) no-repeat center center`,
                      backgroundSize: 'contain',
                    }}>
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" /></div>

                    <h4 className='post-title mt-3'>Nursery</h4>
                    <p className="post-text">
                 Nurturing independence and joyful learning.
                    </p>
                    <a href="#" className='btn-link'>Read more</a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Blog
