import React from 'react'

import { Container } from "react-bootstrap";
const Blog = () => {
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
              <section className="blog-section">
                <div className="row">

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="post-card p-4">
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="Blog Post Image" />

                    </div>
                    <h4 className='post-title p-4'>To Apply Knowledge in Life</h4>
                    <p className="post-text">This is a sample blog post text to demonstrate the styling of the post content.</p>
                                <a href="" className='btn-link'>Read more</a>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="post-card p-4">
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />

                    </div>
                    <h4 className='post-title'>To Apply Knowledge in Life</h4>
                    <p className="post-text">This is a sample blog post text to demonstrate the styling of the post content.</p>
                    <a href="" className='btn-link'>Read more</a>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="post-card p-4">
                      <img src="https://umang-react.vercel.app/assets/pic2-BtQTdJ8y.jpg" alt="" />

                    </div>
                    <h4 className='post-title'>To Apply Knowledge in Life</h4>
                    <p className="post-text">This is a sample blog post text to demonstrate the styling of the post content.</p>

                    <a href="" className='btn-link'>Read more</a>
                  </div>

                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Blog
