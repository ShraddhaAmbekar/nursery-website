

const Footer = () => {
  return (
    <footer className="footer-section">

      {/* Top Wave */}
    <div className="section-divider" style={{position:"relative", zIndex:2}}>
  <img src="/src/assets/line-divider.png" alt="divider" />
</div>

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-col about">
          <div className="footer-logo">
            <img src="/assets/logo.png" alt="logo" />
          </div>

          <p className="footer-text">
            Lorem Ipsum Dolor Sit Amet,
            Consectetur At Adipisicing Elit,
            Sed Do Eiusmod Tempor Incididunt Ut
            Labore Et Dolore Magna The Are
            Aliqua.
          </p>
        </div>

        {/* Information */}
        <div className="footer-col">
          <h5>INFORMATION</h5>
        <div className="d-flex ">
            <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/blog">BLOG</a></li>
            <li><a href="/classes">CLASSES</a></li>
            </ul>
            <ul>
            <li>ABOUT</li>
            <li>EVENT</li>
            <li>GALLERY</li>
            <li>CONTACT</li>
          </ul>
        </div>
        </div>

        {/* Recent Posts */}
        <div className="footer-col recent">
          <h5>RECENT POSTS</h5>

          <div className="recent-item">
            <img src="/assets/kid1.jpg" alt="" />
            <div>
              <h5>What It's Like Dating.</h5>
              <p>BY JONE | 💬 28</p>
            </div>
          </div>

          <div className="recent-item">
            <img src="/assets/kid2.jpg" alt="" />
            <div>
              <h5>The Reasons Why We Love</h5>
              <p>BY MARRY | 💬 5</p>
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

          <button>SUBSCRIBE</button>

          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google-plus"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

      </div>

      {/* {/* Floating Left Buttons
      <div className="floating-buttons">
        <div className="float-btn">🎧</div>
        <div className="float-btn">🛒</div> 
      </div> */}

      <div className="copyright">
        Copyright © 2025 Umang Academy. All right reserved
      </div>

    </footer>
  );
};

export default Footer;
