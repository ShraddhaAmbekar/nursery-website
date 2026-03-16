import { Container } from "react-bootstrap";

const KidsCenter = () => {

  return (
    <>
      <section className="section2 pt-5 pb-5">
        <Container>
          <div className="section2-wrapper">
            <div className="section-head text-center my-5">
              <h2 className="heading">Welcome to a World of Joyful Learning</h2>
              <p className="subheading text-center">Creating a safe and inspiring environment for young minds to explore, imagine, and grow.</p>
            </div>

            <div>
              <section className="feature-section">
                 <div className="row">
      
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="icon-bx-wraper sr-iconbox m-b20">
          <div className="icon-lg m-b20">
            <a className="icon-cell" href="/">
              <img src="/images/icon1.png" alt="Creative Thinking" />
            </a>
          </div>
          <div className="icon-content">
            <h6 className="dlab-tilte">
             Explore
            </h6>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="icon-bx-wraper sr-iconbox m-b20">
          <div className="icon-lg m-b20">
            <a className="icon-cell" href="/">
              <img src="/images/icon2.png" alt="Emotions" />
            </a>
          </div>
          <div className="icon-content">
            <h6 className="dlab-tilte">
             Imagine
            </h6>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="icon-bx-wraper sr-iconbox m-b20">
          <div className="icon-lg m-b20">
            <a className="icon-cell" href="/">
              <img src="/images/icon3.png" alt="Independent" />
            </a>
          </div>
          <div className="icon-content">
            <h6 className="dlab-tilte">
            Think
            </h6>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="icon-bx-wraper sr-iconbox m-b20">
          <div className="icon-lg m-b20">
            <a className="icon-cell" href="/">
              <img src="/images/icon4.png" alt="Knowledge" />
            </a>
          </div>
          <div className="icon-content">
            <h6 className="dlab-tilte">
              Learn
            </h6>
          </div>
        </div>
      </div>

    </div>
              </section>
            </div>
          </div>

          <div className="owl-nav" style={{ textAlign: "center" }}>
            <div className="owl-prev"></div>
            <div className="owl-next"></div>
          </div>
        </Container>

      </section>
    </>


  );
};

export default KidsCenter;
