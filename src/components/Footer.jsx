import divider1 from '../assets/line-divider.png' 
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer-section">

      {/* Top Wave */}
    <div className="section-divider" style={{position:"relative", zIndex:2}}>
  <img src={divider1} alt="divider" />
</div>

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-col about">
          <div >
            <img className="footer-logo" src={logo} alt="logo" />
          </div>

          <p className="footer-text">
           A joyful space where little learners explore, create, and grow with confidence through play-based early education.
          </p>
        </div>

        {/* Information */}
        <div className="footer-col">
          <h5>INFORMATION</h5>
        <div className="d-flex ">
            <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT</a></li><li>
              <a href="/">PROGRAM</a></li>
              <li><a href="/">CONTACT</a></li>
            
        
            
      
          </ul>
        </div>
        </div>

        {/* Recent Posts */}
        <div className="footer-col recent">
          <h5>GET IN TOUCH</h5>

          <div className="recent-item">
         
            <div>
              <h6>EMAIL:
              </h6>
              <p>hummingkitez@gmail.com</p>
            </div>
          </div>

          <div className="recent-item">
        
            <div>
              <h6>Call Us</h6>
              <p>+91 9911255302</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h5>NEWSLETTER</h5>

          <input
            type="text"
            placeholder="Your Email Address"
          />

          <button className='btn btn-md rad'>SUBSCRIBE</button>

     
        </div>

      </div>

      {/* {/* Floating Left Buttons
      <div className="floating-buttons">
        <div className="float-btn">🎧</div>
        <div className="float-btn">🛒</div> 
      </div> */}

     <div className="footer-bottom"><div className="container"><div className="row"><div className="col-lg-6 col-md-8 col-sm-6 text-left "> <span>Copyright © 2026 Humming Kitez Preschool. All right reserved</span> </div>
     <div className="col-lg-6 col-md-4 col-sm-6 text-right ">
      <ul className="list-inline"><li>
        <a className="btn-link facebook circle me-1" href="/" data-discover="true"><i className="fa fa-facebook"></i></a></li>
        <li><a className="btn-link google-plus circle me-1" href="/" data-discover="true"><i className="fa fa-google-plus"></i></a></li><li><a className="btn-link linkedin circle me-1" href="/" data-discover="true"><i className="fa fa-linkedin"></i></a></li><li><a className="btn-link instagram circle" href="/" data-discover="true"><i className="fa fa-instagram"></i></a></li></ul></div></div></div></div>

    </footer>
  );
};

export default Footer;
