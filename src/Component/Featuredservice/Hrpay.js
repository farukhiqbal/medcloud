import React from "react";
import "./hrpay.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Software from "../Home/Software";
import hrmhome   from '../../asset/Fmshome.png'
import hrm2 from '../../asset/hrm2.png'


const Hrpay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section>
        <div className="container-fluidimg">
          <div className="image-left">
            <div className="image-div">
              <img src={hrmhome} />
            </div>
          </div>

          <div className="image-rightcontent">
            <h2 className="content-title">
              Transform your payroll processing with automation and complete the
              task in minutes.
            </h2>

            <p className="content-detail">
              Elevate your business operations and improve productivity with our
              cost-effective, cloud-based software. Experience the convenience
              of streamlined processes and increased efficiency. Get on the
              cloud today and take your business to new heights!
            </p>

            <a
              href="#"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
              class="custom-button"
              onClick={handleShow}
            >
              {" "}
              Schedule a demo
            </a>

            <Modal show={show} onHide={handleClose}>
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
        </div>
      </section>

      <section>
        <div className="hr-container">
          <div className="hr-left">
            <div className="hr-heading">
              <h3>Employee self service portal</h3>
            </div>

            <div className="hr-list">
              <ul>
                <li>
                  <p>
                    Personal Information Management: ESS portals allow employees
                    to view and edit their personal information, including
                    contact details, emergency contacts, and other relevant
                    information.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener"
                    >
                      Payroll Management
                    </a>
                    : Employees can access their pay stubs, view their current
                    and previous pay periods, and download their W-2 forms.
                  </p>
                </li>
                <li>
                  <p>
                    Leave and Time Off Management: Employees can submit leave
                    requests, check their leave balances, and view their
                    time-off schedules.
                  </p>
                </li>
                <li>
                  <p>
                    Benefits Enrollment and Management: Employees can view their
                    current benefits and enroll in new benefits during open
                    enrollment periods.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="hr-right">
            <div className="hr-image">
              <img src="https://ideogram.ai/api/images/direct/w64OC4k-TLq6Ok0YAgceWg.jpg"width='400px' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="hrpay-container">
          <div className="hrpay-image">
            <img src="https://multi-techno.com/wp-content/uploads/elementor/thumbs/ezgif.com-gif-maker-1-pmv6vs3zq5xkv2413ygujcfhn7r9e1fsmc8sk4pbum.webp" />
          </div>
        </div>
      </section>

      <section>
        <div className="hrpay-heading">
          <h3 class="hrpay-title">
            Features of&nbsp;HR and Payroll&nbsp;System
          </h3>
        </div>

        <div className="hrpay-p">
          <p>
            From time to time HR and payroll system will manage company
            employees’ records and history. Even so, Employee daily attendance,
            Employee Leave <br /> Management,and Advances and Payroll
            auto-generated salary make fewer men power.
          </p>
          <hr className="hrpay-line" />
        </div>
      </section>

      <section>
        <div className="hrlist-container">
          <div className="hrlist-width">
            <div className="hrlist-col">
              <div className="list-heading">
                <h6 class="list-title ">Definition Modules:</h6>
              </div>

              <div className="list-ul">
                <ul>
                  <li>Employee Define</li>
                  <li>Units Define</li>
                  <li>Departments Define</li>
                  <li>Sections Define</li>
                  <li>Employee Designations</li>
                  <li>Gazetted Holiday Define</li>
                  <li>Salary Information</li>
                </ul>
              </div>
            </div>

            <div className="hrlist-col">
              <div className="list-heading">
                <h6 class="list-title ">Transaction Modules:</h6>
              </div>

              <div className="list-ul">
                <ul>
                  <li>Join / Resign / Transfer</li>
                  <li>Employee Attendance</li>
                  <li>Month Process</li>
                  <li>Salary Process</li>
                  <li>&nbsp;Advances</li>
                  <li>&nbsp;Increments</li>
                  <li>&nbsp;Loan</li>
                  <li>&nbsp;Deductions</li>
                  <li>&nbsp;Holidays</li>
                </ul>
              </div>
            </div>

            <div className="hrlist-col">
              <div className="list-heading">
                <h6 class="list-title ">Reports:</h6>
              </div>

              <div className="list-ul">
                <ul>
                  <li>List Department Wise</li>
                  <li>Salary Slip</li>
                  <li>&nbsp;Attendance</li>
                  <li>Attendance Register</li>
                  <li>Month Process</li>
                  <li>Salary Process</li>
                  <li>Increment List</li>
                  <li>Employee Advances</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section>
        <div className="hrattend-container">
          <div className="attend-col">
            <div className="hrattend-heading">
              <h6 class="attend-title ">Definition Modules:</h6>
            </div>
          </div>
        </div>

        <section>
          <div className="hrpay-container">
            <div className="hrpay-image">
              <img src={hrm2} />
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="hrattend-container">
          <div className="attend-col">
            <div className="hrattend-heading">
              <h6 class="attend-title ">Benefits of an HR and Payroll System</h6>
            
            <div className="attend-p">
            <p><a style={{backgroundcolor: '#ffffff'}} href="#" target="_blank" rel="noopener">HR and Payroll System Software</a>&nbsp;and services offer a solution that streamlines and manages your business’s payroll services and practices, as well as any other Human Resources-related issues such as performance management, etc.</p>
           
            <p>Especially This allows you and your employees to focus on what you do best while saving time and money by not feeling worried about HR issues. Following are the benefits of the HR and payroll software:</p>

            </div>
            
            
            
            
            </div>
          </div>
        </div>

      
      </section>





       <Software/>














    </div>
  );
};

export default Hrpay;
