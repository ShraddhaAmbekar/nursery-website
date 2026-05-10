import React from 'react'
import divider1 from '../../assets/line-divider.png'
import divider2 from '../../assets/line-divider2.png'
import joinus from '../../assets/joinus.webp'
import { Link } from 'react-router-dom'

const Joinus = () => {
  return (
    <div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{ backgroundImage: `url(${joinus}`, backgroundSize: "cover", }}>
      <div className="section-divider" style={{ position: "relative", zIndex: 2 }}>
        <img src={divider1} alt="divider" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 wow fadeIn about-text" >
            <div className='section-content'>
          <div className="section-head text-center">  
            <h4 className="text-white">Admission open 2026-2027</h4>
            <h2 className='section-h2'>Call To Enroll Today <br />
              <span className="text-yellow"></span></h2><Link className="btn btn-md radius-xl main-btn" to="/contact" data-discover="true" aria-label="Learn more about enrollment">
              Read More
              </Link></div>
          </div>
        </div></div>
      </div>
      <div className="section-divider" style={{ position: "relative", zIndex: 2 }}>
        <img src={divider2} alt="divider" />
      </div>
    </div>

  )
}

export default Joinus
