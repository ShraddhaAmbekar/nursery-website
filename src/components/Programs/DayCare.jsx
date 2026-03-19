import aboutTitle from "../../assets/about-title.jpg";
import aboutbg1 from "../../assets/about-bg1.png"

import Parallex from "../about/Parallex";
import Staff from "../home/Staff";
import Joinus from "../about/Joinus";
import Program from "../about/Program";


const DayCare = () => {
  return (
    <div>
      <div className="page-content">
        <div className="dlab-bnr-inr" style={{
          backgroundImage: `url(${aboutTitle})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}><div className="container"><div className="dlab-bnr-inr-entry"><h1 className="text-white">Program</h1>
        </div>
          </div>
        </div>

        <div className="section-full bg-white content-inner-1 about-kids" style={{
          backgroundImage: `url(${aboutbg1})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}>
          <div className="container">
            <div className="row p-5">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head text-center">
                  <h2 className="heading">Day Care</h2>
                  <p className='subheading'>The Day Care program at Humming Kitez provides children with a balanced routine of play, relaxation, and engaging activities throughout the day.
                    Children spend their time participating in creative games, story sessions, and group activities that keep them happy and active while parents are at work.</p></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-pink">
                    <a className="icon-cell" href="/about-2" data-discover="true"><i className="flaticon-bricks"></i></a> </div><div className="icon-content">
                    <h5 className="dlab-tilte">Creative Playtime</h5>
                    <p>Drawing, crafts, and building activities encourage imagination.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-blue">
                    <a className="icon-cell" href="/about-2" data-discover="true">
                      <i className="flaticon-boy"></i></a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte"> Interactive Story Sessions</h5>
                    <p>Stories and rhymes stimulate listening and imagination.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 m-b30 d-md-none d-lg-block d-sm-none " >
                  <img src="/images/icon24.png" alt="about1" className='about1img' />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-bx-wraper left m-b30 about-iconbx">
                  <div className="icon-bx-sm bg-green radius">
                    <a className="icon-cell" href="/about-2" data-discover="true">
                      <i className="flaticon-bus"></i></a> </div>
                  <div className="icon-content"><h5 className="dlab-tilte"> Indoor & Outdoor Play</h5>
                    <p>Children stay active through safe physical play activities.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper left m-b30 about-iconbx">
                  <div className="icon-bx-sm bg-orange radius">
                    <a className="icon-cell" href="/about-2" data-discover="true"><i className="flaticon-ice-cream"></i></a>
                  </div>
                  <div className="icon-content"><h5 className="dlab-tilte">Relaxation & Quiet Time</h5>
                    <p>A calm routine allows children to rest and recharge during the day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Parallex hero="A joyful place where every day is full of fun and care."/>
       <Staff/>
   <Joinus/>
      <Program/>
    </div>
  )
}

export default DayCare
