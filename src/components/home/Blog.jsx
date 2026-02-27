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
              <h2 className="heading">From the Blog</h2>
              <p className="subheading text-center">We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
            </div>

            <div>
              <Slider {...settings} className="blog-slider">

  <div className="px-3">
    <div className="post-card p-4 ">
      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="Blog Post Image" />
    </div>
    <h4 className='post-title mt-3'>To Apply Knowledge in Life</h4>
    <p className="post-text">
      This is a sample blog post text to demonstrate the styling of the post content.
    </p>
    <a href="#" className='btn-link'>Read more</a>
  </div>

  <div className="px-3">
    <div className="post-card p-4">
      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />
    </div>
    <h4 className='post-title mt-3'>To Apply Knowledge in Life</h4>
    <p className="post-text">
      This is a sample blog post text to demonstrate the styling of the post content.
    </p>
    <a href="#" className='btn-link'>Read more</a>
  </div>

  <div className="px-3">
    <div className="post-card p-4">
      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />
    </div>
    <h4 className='post-title mt-3'>To Apply Knowledge in Life</h4>
    <p className="post-text">
      This is a sample blog post text to demonstrate the styling of the post content.
    </p>
    <a href="#" className='btn-link'>Read more</a>
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
