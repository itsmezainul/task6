import React, { useState } from "react";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  Col,
  Offcanvas,
} from "react-bootstrap";

const AppBar = ({ setReg, show, setShow, setSign }) => {
  return (
    <Navbar className="p-3 position-sticky">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bolder fs-2">
          Snap
        </Navbar.Brand>
        <Desktop setReg={setReg} setSign={setSign} />

        <Button
          variant=""
          className="d-flex d-md-none"
          onClick={() => setShow(true)}
        >
          <img src="./images/icon-menu.svg" alt="" />
        </Button>
        <Mobile
          show={show}
          setShow={setShow}
          setReg={setReg}
          setSign={setSign}
        />
      </Container>
    </Navbar>
  );
};

function Desktop({ setReg, setSign }) {
  return (
    <>
      <Nav className="me-auto d-none d-md-flex">
        <NavDropdown title="Features">
          <DropItem fileName="todo" text="Todo List" />
          <DropItem fileName="calendar" text="Calendar" />
          <DropItem fileName="reminders" text="Reminders" />
          <DropItem fileName="planning" text="Planning" />
        </NavDropdown>

        <NavDropdown title="Company" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">History</NavDropdown.Item>
          <NavDropdown.Item href="#">Our Team</NavDropdown.Item>
          <NavDropdown.Item href="#">Blog</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#home">Careers</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
      </Nav>
      <div className="d-none d-md-flex">
        <Button
          variant=""
          className="me-3 rounded-4"
          onClick={() => setSign(true)}
        >
          Login
        </Button>
        <Button
          variant=""
          className="border border-2 border-black rounded-4"
          onClick={() => setReg(true)}
        >
          Register
        </Button>
      </div>
    </>
  );
}

function Mobile({ show, setShow, setReg, setSign }) {
  return (
    <Offcanvas show={show} placement="end">
      <Offcanvas.Header className="d-block text-end">
        <Button variant="" onClick={() => setShow(false)}>
          <img src="./images/icon-close-menu.svg" alt="" />
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <MobileMenu setReg={setReg} setShow={setShow} setSign={setSign} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

function MobileMenu({ setReg, setShow, setSign }) {
  const [features, setFeatures] = useState(true);
  const [comp, setComp] = useState(true);

  const styles = {
    cursor: "pointer",
  };
  return (
    <div className="ps-5">
      <p style={styles} onClick={() => setFeatures((pre) => !pre)}>
        Features
        <img
          className="ms-2"
          src={
            features
              ? "./images/icon-arrow-down.svg"
              : "./images/icon-arrow-up.svg"
          }
          alt="arrow-up"
        />
      </p>
      {features && (
        <div className="ps-5">
          <p style={styles}>
            <img
              src="./images/icon-todo.svg"
              alt="todo"
              style={{ marginTop: "-5px", marginRight: "30px" }}
            />
            Todo List
          </p>
          <p style={styles}>
            <img
              src="./images/icon-calendar.svg"
              alt="calendar"
              style={{ marginTop: "-5px", marginRight: "30px" }}
            />
            Calendar
          </p>
          <p style={styles}>
            <img
              src="./images/icon-reminders.svg"
              alt="Reminders"
              style={{ marginTop: "-5px", marginRight: "30px" }}
            />
            Reminders
          </p>
          <p style={styles}>
            <img
              src="./images/icon-planning.svg"
              alt="Planning"
              style={{ marginTop: "-5px", marginRight: "30px" }}
            />
            Planning
          </p>
        </div>
      )}
      <p style={styles} onClick={() => setComp((pre) => !pre)}>
        Company
        <img
          className="ms-2"
          src={
            comp ? "./images/icon-arrow-down.svg" : "./images/icon-arrow-up.svg"
          }
          alt="arrow-up"
        />
      </p>
      {comp && (
        <div className="ps-5">
          <p>History</p>
          <p>Our Team</p>
          <p>Blog</p>
        </div>
      )}
      <p style={styles}>Carees</p>
      <p style={styles}>About</p>
      <Button
        variant=""
        className="rounded-4 d-block mx-auto m-5 w-50 py-2"
        onClick={() => {
          setSign(true);
          setShow(false);
        }}
      >
        Login
      </Button>
      <Button
        variant=""
        className="border border-2 border-black rounded-4 d-block mx-auto m-5 w-50 py-2"
        onClick={() => {
          setReg(true);
          setShow(false);
        }}
      >
        Register
      </Button>
    </div>
  );
}

function DropItem({ fileName, text }) {
  return (
    <NavDropdown.Item href="#" className="d-flex justify-content-center">
      <Row>
        <Col xs={3}>
          <img
            src={"/images/icon-" + fileName + ".svg"}
            alt={fileName}
            style={{ marginTop: "-5px", marginRight: "15px" }}
          />
        </Col>
        <Col xs={9}>
          <span>{text}</span>
        </Col>
      </Row>
    </NavDropdown.Item>
  );
}

export default AppBar;
