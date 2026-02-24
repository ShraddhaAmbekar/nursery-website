import React from 'react'

const Section3 = () => {
  return (
    <>
   
    <div className='section3' style={{backgroundImage: "url('/src/assets/bg1.jpg')", backgroundSize: "cover", backgroundPosition: "center center", backgroundAttachment: "fixed"}}>
   
       <div className="section-divider" style={{position:"relative", zIndex:2}}>
  <img src="/src/assets/line-divider.png" alt="divider" />
</div>


      <div className="container py-5">
  <div className="row py-5">
    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
      <div className="section-head">
        <h2 className="cold-heading">Education from birth<br/>begins with us</h2>
        <p className="cold-subheading">Our children's academy, together with one of the oldest private schools, created a joint
          school preparation project. The goal of the project is the harmonious development, socializationfor admission
          to the best educational institutions of our city.</p>
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
  </div>
</div>

 <div className="section-divider" style={{position:"relative", zIndex:2}}>
  <img src="/src/assets/line-divider2.png" alt="divider" />
</div>

</div>
    </>
  )
}

export default Section3
