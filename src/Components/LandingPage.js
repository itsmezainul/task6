import { Button, Col, Container, Row, Image } from "react-bootstrap";

export default function LandingPage() {
  return (
    <Container className="mt-lg-0 mt-5">
      <Row
        className="align-items-center"
        style={{
          width: "100%",
          height: "90vh",
        }}
      >
        <Col lg={7} className="order-2 order-lg-1 mt-lg-0 mt-5">
          <Hero />
        </Col>
        <Col lg={5} className="order-1 order-lg-2">
          <Image
            className="d-none d-lg-block"
            src="./images/image-hero-desktop.png"
            alt="hero"
            fluid
          ></Image>
          <Image
            className="d-block d-lg-none"
            src="./images/image-hero-mobile.png"
            alt="hero"
            fluid
          ></Image>
        </Col>
      </Row>
    </Container>
  );
}

function Hero() {
  return (
    <div className="p-lg-5 p-3">
      <h1 className="fs-1 fw-bolder">Make remote work</h1>
      <p className="fs-5 mb-5">
        Get your team in sync, no matter your location. Streamlineprocesses,
        create team rituals, and watch productivity soar.
      </p>
      <Button className="fs-lg-3 fs-5" variant="dark">
        Learn more
      </Button>
      <div className="mt-5 text-lg-start text-center">
        <img
          style={{ width: "60px" }}
          className="ms-md-5 d-md-inline-block d-block mx-auto mb-md-0 mb-5"
          src="./images/client-databiz.svg"
          alt=""
        />
        <img
          style={{ width: "60px" }}
          className="ms-md-3 d-md-inline-block d-block mx-auto mb-md-0 mb-5"
          src="./images/client-audiophile.svg"
          alt=""
        />
        <img
          style={{ width: "60px" }}
          className="ms-md-5 d-md-inline-block d-block mx-auto mb-md-0 mb-5"
          src="./images/client-meet.svg"
          alt=""
        />
        <img
          style={{ width: "60px" }}
          className="ms-md-5 d-md-inline-block d-block mx-auto mb-md-0 mb-5"
          src="./images/client-maker.svg"
          alt=""
        />
      </div>
    </div>
  );
}
