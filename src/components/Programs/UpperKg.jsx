import aboutTitle from "../../assets/about-title.jpg";
import aboutbg1 from "../../assets/about-bg1.png"
import about1 from "../../assets/about1-img.jpg"
import Parallex from "../about/Parallex";
import Staff from "../home/Staff";
import Joinus from "../about/Joinus";
import Program from "../about/Program";

const UpperKg = () => {
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
                      <a href="/" data-discover="true"><i className="fa fa-home"></i> </a>
                    </li>
                    <li className="me-2">Home &gt;</li>
                    <li>Programs  &gt;</li> 
                    <li>Upper Kindergarten (UKG)</li></ul></div>
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
                  <h2 className="heading">Upper Kindergarten (UKG)</h2>
                  <p className='subheading'>The UKG program helps children develop stronger academic and thinking skills as they prepare for primary school. Learning becomes more structured while still maintaining creativity and excitement.</p></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-pink">
                    <a className="icon-cell" href="/about-2" data-discover="true"><i className="flaticon-bricks"></i></a> </div><div className="icon-content">
                    <h5 className="dlab-tilte">Reading Confidence</h5>
                    <p>Children begin reading simple words and sentences independently.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-blue">
                    <a className="icon-cell" href="/about-2" data-discover="true">
                      <i className="flaticon-boy"></i></a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Writing Skills</h5>
                    <p>Practice with letters and words helps children express their thoughts on paper.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 m-b30 d-md-none d-lg-block d-sm-none " >
                <img src="/images/icon23.png" alt="about1" className='about1img' />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-bx-wraper left m-b30 about-iconbx">
                  <div className="icon-bx-sm bg-green radius">
                    <a className="icon-cell" href="/about-2" data-discover="true">
                      <i className="flaticon-bus"></i></a> </div>
                  <div className="icon-content"><h5 className="dlab-tilte">Logical Thinking</h5>
                    <p>Activities encourage children to solve problems and think independently.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper left m-b30 about-iconbx">
                  <div className="icon-bx-sm bg-orange radius">
                    <a className="icon-cell" href="/about-2" data-discover="true"><i className="flaticon-ice-cream"></i></a>
                  </div>
                  <div className="icon-content"><h5 className="dlab-tilte">Concept Understanding</h5>
                    <p>Children explore topics like shapes, patterns, seasons, and everyday knowledge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
     <Parallex hero='Building confident learners for the next big step.'/>
       <Staff/>
   <Joinus/>
      <Program/>
    </div>
  )
}

export default UpperKg
