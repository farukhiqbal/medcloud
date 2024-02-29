import React from 'react'
import './manuEpr.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Software from '../Home/Software';


const ManuEpr = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      

      <section  >

<div className='container-fluidimg'>

           <div className='image-left'>


         
                 <div className='image-div'>

<img src='/asset/manufacture.png'/>
</div>

             </div>
      


     <div className='image-rightcontent'>

            <h2 className='content-title'>Streamline Operations and Enhance Productivity</h2>

           <p className='content-detail'>
           Enhance Your Manufacturing Efficiency with ERP Management: Integrate Processes and Optimize Operations on a Single Platform.
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
                            Manufacturi<span className='data-underline1'>ng</span>&nbsp;ERP  System
                            </h3>
        
                             <p className='about-detail'>
                             Manufacturing ERP streamlines business operations by integrating all fundamental processes into a centralized platform, improving
                             <br/>
                             efficiency and productivity.
                             </p>
        
        
                             <div className='about-image'>
        
                         <img src='/asset/manuhome.png'/>
        
        
        
                                       </div>



        
        
                       </div>

                        </div>
        
                  </section>
        

                    {/* part end  */}



  <br/>
  <br/>
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
              <img src="https://multi-techno.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-04-01-at-4.06.35-PM-768x641-1-pyeyvam6z3vrtux3j7n78ydu75v8nmq9zzeudp1zwq.webp" />
            </div>
          </div>
        </section>
      </section>










      <section>
        <div className="hrlist-container">
          <div className="hrlist-width">
            <div className="hrlist-col">
              <div className="list-heading">
                <h6 class="list-title ">Setup:</h6>
              </div>

              <div className="list-ul">
              <ul>
                <li>&nbsp;BOM Define</li>
                <li>Work center define</li>
                <li>Operation define</li>
                <li>Routings</li>
                <li>BOM Management</li>
                <li>
                  <a href="#" target="_blank" rel="noopener">Manufacturing</a>
                  &nbsp;Order
                  </li>
                <li>Work Orders</li>
                </ul>
              </div>
            </div>

            <div className="hrlist-col">
              <div className="list-heading">
                <h6 class="list-title ">Transactions:</h6>
              </div>

              <div className="list-ul">
              <ul><li>Production plan &amp; control</li>
              <li>Gate inward</li>
              <li>Work Orders</li>
              
              <li>Batching</li>
              <li>Dispatch to Party</li>
              
              <li>Cost centers</li>
              <li>Quality Control</li>
              </ul>
              </div>
            </div>

            <div className="hrlist-col">
              <div className="list-heading">
                <h6 class="list-title ">Reports:</h6>
              </div>

              <div className="list-ul">
              <ul>
                <li>Production Expense Report</li>
                <li>Daily production Report</li>
                <li>Department Wise Production Report</li>
                <li>Waste report</li>
                <li>Quality Reports</li>
                <li>Each Dept Stock Level</li>
                <li>PPC status</li>
                <li>Separate P and Loss for Dept.</li>
                <li>Separate Balance sheet For Dept</li>
                </ul>
              </div>
            </div>



          </div>
        </div>
      </section>



      <section >
         
         <div className='epr-container'>

          <div className='epr-width'>

            <div className='epr-left'>

                  <div className="hrlist-col2">
              <div className="list-heading1">
                <h6 class="list-title1 ">Benefits of  Manufacturing ERP</h6>
              </div>

              <div className="list-ul">
              <ul>
                <li>Increase Efficiency</li>
                <li>Productive Enhancement</li>
                <li>24\7 Customer Support</li>
                <li>Estimating Organizational Metrics</li>
                <li>Immediately Available for Reporting</li>
                <li>Availability for Competitive Advantage</li>
                <li>Data Analysis Efficiently</li>
                <li>Adaptability to Changes</li>
                <li>Helping IT Activities</li>
                </ul>
              </div>
            </div>



            </div>



              <div className='epr-right'>

                  <div className='epr-image'>

                <img src='https://multi-techno.com/wp-content/uploads/elementor/thumbs/Untitled-1024x932-1-q4d9pzs7yrgdyy4ovluwctjmr0xebanjvmiuyfyhk8.webp'/>


                  </div>

              </div>




          </div>
         </div>

      </section>

        <br/><br/> <br/>




       <Software/>
      
    </div>
  )
}

export default ManuEpr
