import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './pointsale.css';
import Software from '../Home/Software';


const Pointsale = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
    <div>
      


      <section  >

<div className='container-fluidimg'>

           <div className='image-left'>


         
                 <div className='image-div' data-aos-duration="1700" data-aos="fade-right">

<img src='https://multi-techno.com/wp-content/uploads/elementor/thumbs/Home-Screen-q903h95xy06orrd7xp8icu01xx1h17d185g5clmjxg.png'/>
</div>

             </div>
      


     <div className='image-rightcontent'>

            <h2 className='content-title'data-aos="fade-down" data-aos-duration="1700">Revolutionize retail with our user-friendly POS system.</h2>

           <p className='content-detail'data-aos="fade-left" data-aos-duration="1700">
           Experience hassle-free transactions and improved business insights with our comprehensive Point of Sale management system, designed for modern retailers.
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



       <div className='point-container'>
         <div className='point-width'>

               

            <div className='p-left'>
                     <div className='p-detail'>
                 <h2 >  <span className='p-title'>Impor</span> tance of POS Systems</h2>
 
                <p>
                POS (Point of Sale) systems are critical for modern businesses, 
                as they offer a range of benefits such as improved accuracy, 
                increased efficiency, and enhanced customer experiences.
                 With advanced features and capabilities,
                 POS systems are a valuable investment for businesses of all sizes.
                </p>


                 </div>
            </div>

           <div className='p-right'>

          <div className='p-image'>

          <img src='https://multi-techno.com/wp-content/uploads/elementor/thumbs/ezgif.com-gif-maker-13-q4k6gnyormmug326kjtdpai7pbwzlom2pd4j3di9kw.webp'/>

          </div>
           </div>

         </div>

       </div>


{/* part 2 */}

        <div className='dash-con'>

             <h3>POS Dashboard</h3>

        <div className='dash-image'>

              <img src='https://multi-techno.com/wp-content/uploads/elementor/thumbs/sales_dashboard-q4kc03e92cj3lv1tctmd2yhxg87emhybc0uc8sjbwq.png'alt=''/>

        </div>

        </div>


{/* part 3  */}

<div className='dash-con'>

<h3>Revolutionize retail with user-friendly POS.</h3>

<div className='dash-image'>

 <img src='https://multi-techno.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-04-05-at-4.21.01-PM-1-q4kbqzclnv7bm0ky5h46bzet461hoze9azji40d8t0.jpeg'alt=''/>

</div>

</div>




        <Software/>


    </div>
  )
}

export default Pointsale
