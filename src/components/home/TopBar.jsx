import { Container } from "react-bootstrap";

const TopBar = () => {
  return (
    <div className="topbar">
      <Container fluid className="d-flex justify-content-between">
        <div>
          <span className="link"><i className="fa fa-phone m-r5"></i>+91 9911255302</span>
          <span className="ms-4 link"><i className="fa-solid fa-location-dot"></i> Sector 83, Gurgaon, Haryana</span>
        </div>
        <div>
          <span className="link"><i className="fa fa-clock-o m-r5"></i> Admission Open 2026:2027</span>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
