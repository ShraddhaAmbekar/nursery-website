import aboutTitle from "../../assets/about-title.jpg";
import aboutbg1 from "../../assets/about-bg1.png"
import about1 from "../../assets/about1-img.jpg"
import Parallex from "../about/Parallex";
import Staff from "../home/Staff";
import Joinus from "../about/Joinus";
import Program from "../about/Program";

const LowerKg = () => {
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
                  <h2 className="heading">Lower Kindergarten (LKG)</h2>
                  <p className='subheading'>The LKG program introduces children to structured concepts while keeping learning playful and engaging. At this stage, children start connecting ideas, asking questions, and understanding the basics of language and numbers.</p></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-pink">
                    <a className="icon-cell" href="/about-2" data-discover="true"><i className="flaticon-bricks"></i></a> </div><div className="icon-content">
                    <h5 className="dlab-tilte">Letter & Sound Recognition</h5>
                    <p>Children start identifying alphabets and their sounds through games and activities.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-blue">
                    <a className="icon-cell" href="/about-2" data-discover="true">
                      <i className="flaticon-boy"></i></a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Number Awareness</h5>
                    <p>Fun exercises introduce counting, number patterns, and basic comparisons.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 m-b30 d-md-none d-lg-block d-sm-none " >
                <img src={about1} alt="about1" className='about1img' />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-bx-wraper left m-b30 about-iconbx">
                  <div className="icon-bx-sm bg-green radius">
                    <a className="icon-cell" href="/about-2" data-discover="true">
                      <i className="flaticon-bus"></i></a> </div>
                  <div className="icon-content"><h5 className="dlab-tilte">Creative Expression</h5>
                    <p>Art, craft, music, and storytelling allow children to express ideas freely.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper left m-b30 about-iconbx">
                  <div className="icon-bx-sm bg-orange radius">
                    <a className="icon-cell" href="/about-2" data-discover="true"><i className="flaticon-ice-cream"></i></a>
                  </div>
                  <div className="icon-content"><h5 className="dlab-tilte">Exploration-Based Learning</h5>
                    <p>Children participate in theme-based activities that connect learning to the real world.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
     <Parallex hero="Where curiosity grows into understanding."/>
       <Staff/>
   <Joinus/>
      <Program/>
    </div>
  )
}

export default LowerKg
