import React, { useState, useEffect } from "react";
import "./header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import logo from '../../asset/med.png'



const isMobileDevice = () => {
  return window.innerWidth <= 567; // Adjust the breakpoint as needed
};

const Header = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const [isMobile, setIsMobile] = useState(isMobileDevice());

  const [show5, setShow5] = useState(false);

  const handleClose = () => setShow5(false);
  const handleShow = () => setShow5(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDropdownClick = (dropdownName) => {
    switch (dropdownName) {
      case "show":
        setShow(!show);
        break;
      case "show1":
        setShow1(!show1);
        break;
      case "show2":
        setShow2(!show2);
        break;
      case "show3":
        setShow3(!show3);

        break;
      case "show4":
        setShow4(!show4);
        break;
      default:
        break;
    }
  };

  const handleDropdownMouseEnter = (dropdownName) => {
    if (!isMobile) {
      handleDropdownClick(dropdownName);
    }
  };

  const handleDropdownMouseLeave = (dropdownName) => {
    if (!isMobile) {
      handleDropdownClick(dropdownName);
    }
  };

  const handleDropdownClickOnMobile = (dropdownName) => {
    if (isMobile) {
      handleDropdownClick(dropdownName);
    }
  };

  return (
    <>
      <div className="main-section">
        <Navbar
          expand="lg"
          className="main-nav"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <Container fluid>
            <Navbar.Brand href="#" className="brand">
              <img src={logo} alt="" className="pt-[50px]" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="nav-toggle"
            />
            <Navbar.Collapse id="navbarScrollingDropdown">
              <Nav className="nav-com" navbarScroll>
                <Link
                  to="/home"
                  className="dropdown-link"
                  activeClassName="active"
                >
                  <span className="dropdown1">home</span>
                </Link>
                {/* 
              <NavDropdown
                  show={show}
                  onMouseEnter={() => handleDropdownMouseEnter('show')}
                  onMouseLeave={() => handleDropdownMouseLeave('show')}
                  onClick={() => handleDropdownClickOnMobile('show')}
                  title={
                    <Link to="/featured"  id="link-to" >
                      <span > 
                 &nbsp;<i class="fa-solid fa-angle-down"></i>
                    </span></Link>
                  }
                  id="navbarScrollingDropdown"
                >
                  <div className="dropdown-items">
                   
                    
              
                   
                  </div>
                </NavDropdown> */}

                <NavDropdown
                  show={show1}
                  onMouseEnter={() => handleDropdownMouseEnter("show1")}
                  onMouseLeave={() => handleDropdownMouseLeave("show1")}
                  onClick={() => handleDropdownClickOnMobile("show1")}
                  title={
                    <Link
                      to="/industries"
                      activeClassName="active"
                      id="link-to"
                    >
                      <span className="dropdown1">
                        {" "}
                        Industries Covered &nbsp;
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </Link>
                  }
                  id="navbarScrollingDropdown"
                >
                  <div className="dropdown-items">
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Hospital
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        clinic
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        Diagnostic Centers
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Chemical
                      </Link>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>

                <NavDropdown
                  show={show2}
                  onMouseEnter={() => handleDropdownMouseEnter("show2")}
                  onMouseLeave={() => handleDropdownMouseLeave("show2")}
                  onClick={() => handleDropdownClickOnMobile("show2")}
                  title={
                    <Link to="/business" activeClassName="active" id="link-to">
                      <span className="dropdown1">
                        {" "}
                        Featured Services &nbsp;
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </Link>
                  }
                  id="navbarScrollingDropdown"
                >
                  <div className="dropdown-items">
                    <NavDropdown.Item className="single-item">
                      <Link to="/hrpay" id="link-to">
                        {" "}
                        HR and Payroll System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="/manufacturing" id="link-to">
                        {" "}
                        Manufacturing ERP <br /> Management{" "}
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="/account" id="link-to">
                        {" "}
                        Accounts and Finance <br />
                        Management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="/cashms" id="link-to">
                        {" "}
                        Cash Management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="/inventry" id="link-to">
                        {" "}
                        Inventory ManagementSystem
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="/purchase" id="link-to">
                        {" "}
                        Purchase Management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="/payableaccount" id="link-to">
                        {" "}
                        Account Payable <br />
                        Management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="/pointofsale" id="link-to">
                        {" "}
                        Sale Management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Fixed Asset Management
                      </Link>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>

                <NavDropdown
                  show={show3}
                  onMouseEnter={() => handleDropdownMouseEnter("show3")}
                  onMouseLeave={() => handleDropdownMouseLeave("show3")}
                  onClick={() => handleDropdownClickOnMobile("show3")}
                  title={
                    <Link to="/business" activeClassName="active" id="link-to">
                      <span className="dropdown1">
                        {" "}
                        Health care &nbsp;<i class="fa-solid fa-angle-down"></i>
                      </span>
                    </Link>
                  }
                  id="navbarScrollingDropdown"
                >
                  <div className="dropdown-items">
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        HealthcareManagement System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Hospital Management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        General Clinic Management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Poli clinic Management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Pharmacy Management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="/labtory" id="link-to">
                        {" "}
                        Laboratory management System
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Nutrition Clinic management system.
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        dental clinic management system
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Human resources management system
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Financial management system
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Supply chain management system
                      </Link>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>

                <NavDropdown
                  show={show4}
                  onMouseEnter={() => handleDropdownMouseEnter("show4")}
                  onMouseLeave={() => handleDropdownMouseLeave("show4")}
                  onClick={() => handleDropdownClickOnMobile("show4")}
                  title={
                    <Link to="/business" activeClassName="active" id="link-to">
                      <span className="dropdown1">
                        {" "}
                        Digital marketing &nbsp;
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </Link>
                  }
                  id="navbarScrollingDropdown"
                >
                  <div className="dropdown-items">
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        SEO
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Graphic designing
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Video editing
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Social media handling
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Content writing
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Video animation
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="single-item">
                      <Link to="#" id="link-to">
                        {" "}
                        Blogging
                      </Link>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>

                <Link
                  to="/contactus"
                  className="dropdown-link"
                  activeClassName="active"
                >
                  <span className="dropdown1">Contact us</span>
                </Link>
              </Nav>
            </Navbar.Collapse>

            <div className="demo">
              <span className="demo-btn  " onClick={handleShow}>
                Book a Demo
              </span>

              <Modal show={show5} onHide={handleClose}>
                <Modal.Header closeButton className="pl-10 mb-2">
                  <Modal.Title className="text-center text-dark  ml-[100px]">
                    Book Online Demo
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body className="bg-dark bg-transparent ">
                  <Form>
                    <Form.Group
                      className="mb-4"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control type="text" placeholder="Name" autoFocus />
                    </Form.Group>

                    <Form.Group
                      className="mb-4"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="number"
                        placeholder="Enter Your Phone Number"
                        autoFocus
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 mt-5 w-75 "
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Write the your Messege"
                        rows={4}
                      />
                    </Form.Group>

                    <Button variant="secondary" className="mt-3 w-50">
                      Submit
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
          </Container>
        </Navbar>
      </div>

      <br />
    </>
  );
};

export default Header;
