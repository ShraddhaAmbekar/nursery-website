import { Container } from "react-bootstrap";

const KidsCenter = () => {

  return (
    <>
      <section className="section2 pt-5">
        <Container>
          <div className="section2-wrapper">
            <div className="section-head text-center my-5">
              <h2 className="heading">Welcome to a World of Joyful Learning</h2>
              <p className="subheading text-center">Creating a safe and inspiring environment for young minds to explore, imagine, and grow.</p>
            </div>

            <div>
              <section className="feature-section">
                <div className="row">

                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="feature-card">
                      <img src="https://up.yimg.com/ib/th/id/OIP.a9gpuq57wkfLRucnnEBR4AHaF1?pid=Api&rs=1&c=1&qlt=95&w=139&h=109" alt="" />
                      <h6>Explore</h6>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="feature-card">
                      <img src="https://up.yimg.com/ib/th/id/OIP.a9gpuq57wkfLRucnnEBR4AHaF1?pid=Api&rs=1&c=1&qlt=95&w=139&h=109" alt="" />
                      <h6>Imagin</h6>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="feature-card">
                      <img src="https://up.yimg.com/ib/th/id/OIP.a9gpuq57wkfLRucnnEBR4AHaF1?pid=Api&rs=1&c=1&qlt=95&w=139&h=109" alt="" />
                      <h6>Think</h6>
                    </div>
                  </div>

                  <div className="col">
                    <div className="feature-card">
                      <img src="https://up.yimg.com/ib/th/id/OIP.a9gpuq57wkfLRucnnEBR4AHaF1?pid=Api&rs=1&c=1&qlt=95&w=139&h=109" alt="sldfa" />
                      <h6>Create</h6>
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
