import React from 'react'
import './projectm.css';
import Software from '../Home/Software';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Projectm = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  




  return (
    <div>
      

      <section  >

<div className='container-fluidimg'>

           <div className='image-left'>


         
                 <div className='image-div' data-aos="fade-right"data-aos-duration="2000">

<img src='./asset/FmsD.png'/>
</div>

             </div>
      


     <div className='image-rightcontent'>

            <h2 className='content-title' data-aos="fade-left"data-aos-duration="2000">Comprehensive System to Efficiently Streamline Construction and Projects</h2>

           <p className='content-detail' data-aos="fade-right"data-aos-duration="2000">
           Efficiently plan, build, and deliver with our advanced construction and project management system.
           </p>

                


                <a href="#"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="2000"    class="custom-button"onClick={handleShow}  > Schedule a demo</a>





                <Modal show={show} onHide={handleClose}    >
       <Modal.Header closeButton className='pl-10 mb-2' >
          <Modal.Title  className='text-center text-dark  ml-[100px]'>Book Online Demo</Modal.Title>
        </Modal.Header> 



        
        <Modal.Body className='bg-dark bg-transparent '>
          <Form>


          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
             
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
              />


            </Form.Group>


            
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />


            </Form.Group>

    
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            
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
            
              <Form.Control as="textarea"
               placeholder="Write the your Messege" rows={4}  />
            </Form.Group>

            <Button variant="secondary" className='mt-3 w-50'>
             Submit 
          </Button>
          </Form>
        </Modal.Body>
       
      </Modal>


     </div>

</div>
 </section>





 <section className='back-ground-image'>
                  

                  <div class="elementor-background-overlay"></div>
        
                        <div className=' about-main'>
        
                       <div className='about-data'>
                                    
                            <h3 className='title'>
                          

                             Project  <span className='data-underline '> Task  St</span>atus Report
                            </h3>
        
                             <p className='about-detail'>
                             Stay on top of project progress and milestones with our Project Task Status Report.
                             </p>
        
        
                             <div className='about-image'>
        
                         <img src='./asset/Mlsreport.png'/>
        
        
        
                                       </div>
                                       


                                        {/* part 2  */}


                                       <h3 className='title project'>
                          
                                 
                                   Tracking Task an<span className='data-underline'>d Miles</span>tones Progress
                         </h3>
     
                          <p className='about-detail'>
                          Efficiently track progress and achieve project milestones with our streamlined tracking system.
                          </p>
     
     
                          <div className='about-image'>
     
                      <img src='./asset/Fmshome.png'/>
     
     
     
                                    </div>



                              {/* part 3 */}


                                    <h3 className='title project'>
                          
                                
                                Optimizing <span className='data-underline'>Project</span> Efficiency
                </h3>

                 <p className='about-detail'>
                 Stay on top of project deadlines and deliverables with our dynamic Project Task Calendar.
                 </p>


                 <div className='about-image'>

             <img src='./asset/FMS .png'/>



                           </div>




                       </div>


















                        </div>
        
        
                  </section>
        



             <Software/>






    </div>
  )
}

export default Projectm
