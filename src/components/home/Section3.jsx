import React from 'react'
import divider1 from '../../assets/line-divider.png'
import divider2 from '../../assets/line-divider2.png'
import section3 from '../../assets/section3.webp'

const Section3 = () => {
  return (
    <>

      <div className='section3' style={{ backgroundImage: `url(${section3}`, backgroundSize: "cover", }}>

        <div className="section-divider" style={{ position: "relative", zIndex: 2 }}>
          <img src={divider1} alt="divider" />
        </div>


        <div className="container py-md-5 py-sm-1">
          <div className="row py-5">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="section-head">
                <h2 className="cold-heading">The First Step in Your Child’s Learning Journey</h2>
                <p className="cold-subheading">At Humming Kitez, we believe early childhood is the foundation of lifelong learning. Through guided play, nurturing care, and a holistic smart curriculum, we help children grow socially, emotionally, and intellectually.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
          </div>
        </div>

        <div className="section-divider" style={{ position: "relative", zIndex: 2 }}>
          <img src={divider2} alt="divider" />
        </div>

      </div>
    </>
  )
}

export default Section3
