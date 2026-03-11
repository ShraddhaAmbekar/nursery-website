import React from 'react'
import divider1 from '../../assets/line-divider.png'
import divider2 from '../../assets/line-divider2.png'
import section3 from '../../assets/section3.webp'

const Parallex = () => {
  return (
    <div>
        <div className="childern-box">
          <div className="childern-1">
            <img src="https://umang-react.vercel.app/assets/children2-CYE86c3y.png" alt="" />
          </div>
          <div className="childern-2">
            <img src="https://umang-react.vercel.app/assets/children1-lA9z2KbF.png" alt="" />
          </div>
        </div>
        <div className='section3' style={{ backgroundImage: `url(${section3}`, backgroundSize: "cover", }}>     
              <div className="section-divider" style={{ position: "relative", zIndex: 2 }}>
                <img src={divider1} alt="divider" />
              </div>   
              <div className="container py-md-5 py-sm-1">
                <div className="row py-5">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="section-head">
                      <h2 className="cold-heading">A Happy Beginning for Lifelong Learning</h2>
                      <p className="cold-subheading">At Humming Kitez, we inspire curiosity, creativity, and confidence through joyful, play-based learning in a safe and caring environment.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
                </div>
              </div>
      
              <div className="section-divider" style={{ position: "relative", zIndex: 2 }}>
                <img src={divider2} alt="divider" />
              </div>
      
            </div>
    </div>
  )
}

export default Parallex
