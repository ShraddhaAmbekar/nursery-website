import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";

export default function Programs() {

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const data = ["Play Group", "Drawing", "Music", "Sports"];

  return (
    <section id="programs" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Our Programs</h2>

        <Slider {...settings}>
          {data.map((item, index) => (
            <Card key={index} className="p-3 m-2 text-center shadow-sm">
              <h5>{item}</h5>
              <p>Fun learning activity</p>
            </Card>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
