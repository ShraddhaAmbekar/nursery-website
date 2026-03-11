import React from 'react'
import divider1 from '../../assets/line-divider.png'
import divider2 from '../../assets/line-divider2.png'
import joinus from '../../assets/joinus.jpg'

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
            <h4 className="text-white">Join Our New Session</h4>
            <h2 className='section-h2'>Call To EnrolL Your Child <br />
              <span className="text-yellow">222 4444 000</span></h2><a className="btn btn-md radius-xl main-btn" href="/about-1" data-discover="true">Read More</a></div>
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
