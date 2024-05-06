import React from 'react'
import Header from '../Header/Header'
import './home.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dimage from './Dimage';
import Multiitemcarosel from './Multiitemcarosel';
import Software from './Software';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Counterup from './Counterup';
import homemanu from '../../asset/manuhome.png'
import manufacture from '../../asset/manufacture.png'

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      

      {/* <Header/> */}
      <section  >

<div className=' row  container-fluidimg'>

           <div className='col-md-6 image-left'>


         
                 <div className='image-div' data-aos-duration="1700" data-aos="fade-right">

<img src={homemanu}/>
</div>

             </div>
      


     <div className=' col-md-6 image-rightcontent'>

            <h2 className='content-title'data-aos="fade-down" data-aos-duration="1700">Get a Customizable ERP Software for All Types of Businesses</h2>

           <p className='content-detail'data-aos="fade-left" data-aos-duration="1700">
           Elevate your business operations and improve productivity with our cost-effective,
            cloud-based software. Experience the convenience of streamlined processes and increased efficiency.
            Get on the cloud today and take your business to new heights!
           </p>

                


                <a href="#"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="2000"     className="custom-button"onClick={handleShow}  > Schedule a demo</a>





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
                            About <span className='data-underline'>Med</span>-App
                            </h3>
        
                             <p className='about-detail'>
                             MED-Cloud provides industry-specific ERP software for Manufacturing, Construction, Textile, and Project Management.
                              Our integrated system streamlines operations from Purchase to Payroll.
                             </p>
        
        
                             <div className='about-image'>
        
                         <img src={manufacture}/>
        
        
        
                                       </div>



                                  
        
        
                       </div>























                        </div>
        
        
                  </section>
        




                        {/* section number 3 */}

                        <section class="elementor-section ">
						<div class="elementor-container ">
					<div class="elementor-column  ">
			
            
            
            
            <div class="elementor-widget-wrap ">
	<div class="elementor-element  ">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading">Industries we are serving</h3>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>



               {/* section 3 */}



      <Dimage/>



                      {/* section 5 banner */}




                      <section class="elementor-section ">
						<div class="elementor-container ">
					<div class="elementor-column  ">
		
            <div class="elementor-widget-wrap ">
	<div class="elementor-element  ">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading">Our Satisfied Clients</h3>		</div>
				</div>
					</div>
		</div>
							</div>
		</section>


            <Multiitemcarosel/>












            <section class="elementor-section ">
						<div class="elementor-container ">
					<div class="elementor-column  ">
		
            <div class="elementor-widget-wrap ">
	<div class="elementor-element">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading about">Facts About Us</h3>		</div>
      
        
        </div>
					</div>
		</div>
							</div>
		</section>
        


                      <div className='fact-container'>
      <p className='fact-aboutus'>
        
Dive into the essence of our success with <b> ‘Facts About Us.’ </b>Explore a rich tapestry of achievements, including 120+ happy clients and 185+ successfully completed projects, reflecting our commitment to excellence in the world of ERP solutions.
      </p>
      </div>

         {/* <Counterup/> */}


              <Software/>


             {/* <Footer/> */}






  

    
    </div>
  )
}

export default Home
