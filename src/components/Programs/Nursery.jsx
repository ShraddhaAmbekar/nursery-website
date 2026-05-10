import aboutTitle from "../../assets/about-title.jpg";
import aboutbg1 from "../../assets/about-bg1.png"
import about1 from "../../assets/about1-img.jpg"
import Parallex from "../about/Parallex";
import Staff from "../home/Staff";
import Joinus from "../about/Joinus";
import Program from "../about/Program";
import { Link } from "react-router";


const Nursery = () => {
  return (
    <div>
      <div className="page-content">
        <div className="dlab-bnr-inr" style={{
          backgroundImage: `url(${aboutTitle})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
            <div className="container"><div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Programs</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li className="me-2">
                      <Link to="/" data-discover="true"><i className="fa fa-home"></i> </Link>
                    </li>
                    <li className="me-2">Home &gt;</li>
                    <li>Programs  &gt;</li> 
                    <li>Nursery</li></ul></div>
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
            <div className="row p-1">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head text-center">
                  <h2 className="heading">Nursery</h2>
                  <p className='subheading'>The Nursery program at Humming Kitez introduces children to structured learning in a fun and engaging way. At this stage, curiosity is at its peak, and children begin exploring the world through play, discovery, and guided activities.
                    Our program focuses on building early habits of learning while encouraging imagination, expression, and joyful participation.</p></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-pink">
                    <Link to="/about" className="icon-cell" data-discover="true"><i className="flaticon-bricks"></i></Link> </div><div className="icon-content">
                    <h5 className="dlab-tilte">Language Exploration</h5>
                    <p>Children begin recognizing sounds, words, and simple expressions through rhymes and storytelling.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-blue">
                    <a className="icon-cell" href="/about-2" data-discover="true">
                      <i className="flaticon-boy"></i></a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Sensory Activities</h5>
                    <p>Hands-on experiences with colors, textures, shapes, and objects stimulate curiosity and brain development.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 m-b30 d-md-none d-lg-block d-sm-none " >
                <img src="/images/icon21.png" alt="about1" className='about1img' />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-bx-wraper left m-b30 about-iconbx">
                  <div className="icon-bx-sm bg-green radius">
                    <Link to="/about" className="icon-cell" data-discover="true">
                      <i className="flaticon-bus"></i></Link> </div>
                  <div className="icon-content"><h5 className="dlab-tilte">Movement & Coordination</h5>
                    <p>Fun physical activities help develop balance, coordination, and motor skills.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper left m-b30 about-iconbx">
                  <div className="icon-bx-sm bg-orange radius">
                    <Link to="/about" className="icon-cell" data-discover="true"><i className="flaticon-ice-cream"></i></Link>
                  </div>
                  <div className="icon-content"><h5 className="dlab-tilte">Imaginative Play</h5>
                    <p>Pretend play and creative storytelling help children explore ideas and emotions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
     <Parallex hero="Where learning begins with curiosity and wonder."/>
       <Staff/>
   <Joinus/>
      <Program/>
    </div>
  )
}

export default Nursery
