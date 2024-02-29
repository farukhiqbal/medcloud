import React from "react";
import Software from "../Home/Software";
import { useState } from "react";
import "./textile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
const Textile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section>
        <div className="container-fluidimg">
          <div className="image-left">
            <div className="image-div">
              <img src="https://multi-techno.com/wp-content/uploads/elementor/thumbs/sales_dashboard-q4kc03e3a1bfzq4khw1oijau2nyy1egveif88jhi76.png" />
            </div>
          </div>

          <div className="image-rightcontent" >
            <h2 className="content-title"  data-aos="fade-left"data-aos-duration="2000">
              Comprehensive System to Efficiently Streamline Construction and
              Projects
            </h2>

            <p className="content-detail" data-aos="fade-right"data-aos-duration="2000">
              Efficiently plan, build, and deliver with our advanced
              construction and project management system.
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

      <section className="back-ground-image">
        <div class="elementor-background-overlay"></div>

        <div className=" about-main">
          <div className="about-data">
            <h3 className="title textile">
              Tracking Status and
              <span className="data-underline strem"> Strea</span>mlining Workflows
            </h3>

            <p className="about-detail">
              Stay on top of orders and enhance productivity with our
              streamlined order management system.
            </p>

            <div className="about-image textile-img">
              <img src="https://multi-techno.com/wp-content/uploads/elementor/thumbs/342-q4m1ftmx0lfi1vvuif4te7qqg73ecbpjvsumxmz47i.png" />
            </div>

            {/* part 2  */}

            <h3 className="title project">
              Wor<span className="data-underline strem">k Or</span>der
            </h3>

            <p className="about-detail">
              Efficiently track and manage your work orders with our
              comprehensive work order report.
            </p>

            <div className="about-image textile-img">
              <img src="https://multi-techno.com/wp-content/uploads/elementor/thumbs/screenshot_4_11_2023-q4umfz7h6fmk33s6p6x8c8f14ue8b4ap13n1su389g.png" />
            </div>



                      {/* part 2 colum  */}




            <div className="textile-main ">
              <div className="textile-heading">
                <h3>
                  <strong>Features of Textile Management System</strong>
                </h3>
              </div>



                      <div className="textile-display">


               <div className="textile-left">
               <div class="textile-background-overlay"></div>
                <div className="text-left-width">
                 <div className="text-left-heading">

                 <h2 class="text-left-title">Operations and Routing</h2>
                 </div>

                 <div className="textile-left-detail">


                 <p>The organization of the manufacturing process is defined by a route. In other words, it establishes the sequence of events. An operation, such as Assembly, indicates a named stage in a path. Even so, the same operation might occur numerous times in various paths, with distinct operation numbers. Furthermore,&nbsp;<a href="https://multi-techno.com/erp-modules/">ERP</a>&nbsp;implementation by Multi-techno helps in operating and routing.</p>



                 </div>



                </div>




                                    {/* row 2  */}


                <div className="text-left-width">
                 <div className="text-left-heading">

                 <h2 class="text-left-title">Dyeing Recipe</h2>
                 </div>

                 <div className="textile-left-detail">


                 <p>Many textile industries have Dyeing Recipe Management System Software developed. The majority of textiles have a dying section. The center of the dyeing process is the recipe. Dye recipes are organized in the Erp software of a dyeing recipe management system.   As a result, automatic recipe management is critical for greater effectiveness in the dyeing system.</p>



                 </div>



                </div>






           {/* row 3  */}





           <div className="text-left-width">
                 <div className="text-left-heading">

                 <h2 class="text-left-title">Manufacturing order</h2>
                 </div>

                 <div className="textile-left-detail">


                 <p>It is a type of order that is required to produce things and is divided into two categories: internal order and contractual order. Manufacturing guidelines are used to create the manufacturing order. Textile management system by multi-techno offers you that services.</p>



                 </div>



                </div>


                 {/* ROW 4  */}


                 <div className="text-left-width">
                 <div className="text-left-heading">

                 <h2 class="text-left-title">Manufacturing reports</h2>
                 </div>

                 <div className="textile-left-detail">


                 <p>Our Manufacturing ERP module includes several reports that may be used to track Work Order status, production analytics, and BOM reports. You may include a chart in any of these reports to provide a graphic image.</p>



                 </div>



                </div>


                    {/* row end  */}







               </div>


               <div className="textile-right">

               <div className="text-right-width">
                 <div className="text-right-heading">

                 <h2 class="text-right-title">Bill of material</h2>
                 </div>

                 <div className="textile-right-detail">


                 <p>The term Bill of Material refers to a list of raw materials used in the production of textiles. Finally, the bill of material is the responsibility of a garment seller. Following the confirmation of a garments export order. Moreover, the product sales company or factory marketer enters the product’s details into the Bill of Material software provided by the buying merchandiser.</p>



                 </div>



                </div>



                     {/* right row 2 */}




                     <div className="text-right-width">
                 <div className="text-right-heading">

                 <h2 class="text-right-title">Work order</h2>
                 </div>

                 <div className="textile-right-detail">


                 <p>After the manufacturing order, the work order generates. Basically, a work order is a document that has all the details about the order according to the operation. Your maintenance operation’s engine is work orders. They assist everyone from production engineers to workers in organizing, allocating, prioritizing, tracking, and completing Production activities.
Manufacturing reports.</p>



                 </div>



                </div>





              {/* row 3  */}


              <div className="text-right-width">
                 <div className="text-right-heading">

                 <h2 class="text-right-title">Production planning</h2>
                 </div>

                 <div className="textile-right-detail">


                 <p>Production planning is an organizational procedure that takes place within a production company. To ensure that enough raw materials, workers, and other essential goods are bought and available. To generate final products according to the timetable.</p>



                 </div>



                </div>


                 {/* row 4  */}


                 <div className="text-right-width">
                 <div className="text-right-heading">

                 <h2 class="text-right-title">Invoice and packing list</h2>
                 </div>

                 <div className="textile-right-detail">


                 <p>The usage of packing slip to indicate the real products received. Whereas an invoice is the order’s fiscal record, giving information. Such as the price of each product, payment conditions, transaction fee, the weight of the product, CBM, date, etc.</p>



                 </div>



                </div>

                        {/* row end  */}


               </div>








                  </div>





            </div>



          </div>
        </div>
      </section>








              <Software/>















    </div>
  );
};

export default Textile;
