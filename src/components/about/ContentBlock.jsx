
import aboutTitle from "../../assets/about-title.jpg";
import aboutbg1 from "../../assets/about-bg1.png"
import about1 from "../../assets/about1-img.jpg"


const ContentBlock = () => {
  return (
    <div>
      <div className="page-content">
        <div className="dlab-bnr-inr" style={{
          backgroundImage: `url(${aboutTitle})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}><div className="container"><div className="dlab-bnr-inr-entry"><h1 className="text-white">About Us</h1>
          <div className="breadcrumb-row">
            <ul className="list-inline">
              <li className="me-2">
                <a href="/" data-discover="true"><i className="fa fa-home"></i> </a>
              </li>
              <li className="me-2">Home &gt; </li>
              <li>About Us</li></ul></div>
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
                  <h2 className="heading">Building Strong Foundations for Your Child’s Future</h2>
                  <p className='subheading'>At Humming Kitez, we focus on developing confidence, creativity, and essential life skills <br /> through engaging learning experiences.</p></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-pink">
                    <a className="icon-cell" href="/about-2" data-discover="true"><i className="flaticon-bricks"></i></a> </div><div className="icon-content">
                    <h5 className="dlab-tilte">Play-Based Learning</h5>
                    <p>Children learn best through play. Our activities encourage exploration, creativity, and problem-solving while making learning fun.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper right m-b30 about-iconbx">
                  <div className="icon-bx-sm radius bg-blue">
                    <a className="icon-cell" href="/about-2" data-discover="true">
                      <i className="flaticon-boy"></i></a>
                  </div>
                  <div className="icon-content">
                    <h5 className="dlab-tilte">Caring & Experienced Educators</h5><p>Our dedicated teachers provide a nurturing environment where every child receives guidance, encouragement, and personal attention.</p>
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
                  <div className="icon-content"><h5 className="dlab-tilte">Safe & Nurturing Environment</h5>
                    <p>We provide a secure and welcoming space where children feel comfortable learning, exploring, and expressing themselves.</p>
                  </div>
                </div>
                <div className="icon-bx-wraper left m-b30 about-iconbx">
                  <div className="icon-bx-sm bg-orange radius">
                    <a className="icon-cell" href="/about-2" data-discover="true"><i className="flaticon-ice-cream"></i></a>
                  </div>
                  <div className="icon-content"><h5 className="dlab-tilte">Holistic Child Development</h5>
                    <p>Our programs support emotional, social, cognitive, and creative growth to build strong foundations for lifelong learning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ContentBlock
