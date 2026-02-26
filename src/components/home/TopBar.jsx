import { Container } from "react-bootstrap";

const TopBar = () => {
  return (
    <div className="topbar">
      <Container fluid className="d-flex justify-content-between">
        <div>
          <span className="link"><i className="fa fa-phone m-r5"></i> 001 234 6789</span>
          <span className="ms-4 link"><i className="fa-solid fa-location-dot"></i> 6701 Democracy Blvd, USA</span>
        </div>
        <div>
          <span className="link"><i className="fa fa-clock-o m-r5"></i> Opening Time : 9:30am-5:30pm</span>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
