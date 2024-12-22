import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faenvelope}  from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div>
      
               <section className='footer-section'>
                 
                 <div className='footer-container'>

                    <div className='footer-width'>
                     <div className='footer-col'>
                     
                          <span className='title'>
                              |  <span>About Us</span>
                          </span>
                     
                        <p className='footer-detail'>
                        Med-cloud is an Registered firm for ERP Software’s, Systems design and Implementation.
                         our ERP system is a single, integrated software platform designed to consolidate information across the entire business – including financials, sales, CRM, 
                         inventory and operations enabling businesses to make effective and informed decisions, increase productivity, and grow profitability.
                        </p>
                     
                     </div>


                     <div className='footer-col'>
                     
                     <span className='title'>
                    
                           |  <span>Short Links</span>
                     </span>
                

                        <div className='footer-link'>
                            <span   className='footer-linkicon'>
                                <i class="fa-solid fa-angle-right"></i></span>
                          <a href='#' className='footerlink'>ERP Modules </a>
                        </div>
                        <div className='footer-link'>
                            <span className='footer-linkicon'>
                                <i class="fa-solid fa-angle-right"></i></span>
                            <a href='#' className='footerlink'>Manufacturing ERP</a>
                        </div>


                        <div className='footer-link'>
                            <span className='footer-linkicon'><i class="fa-solid fa-angle-right"></i></span>
                            <a href='#' className='footerlink'>Project Management System </a>
                        </div>


                        <div className='footer-link'>
                            <span className='footer-linkicon'>
                                <i class="fa-solid fa-angle-right"></i>
                                </span>
                            <a href='#' className='footerlink'>Textile Management System</a>
                        </div>


                        <div className='footer-link'>
                            <span className='footer-linkicon'>
                                <i class="fa-solid fa-angle-right"></i>
                                </span>
                            <a href='#' className='footerlink'>Point of Sale </a> 
                        </div>
                </div>





                <div className='footer-col-3'>
                     
                     <span className='title'>
                         |  <span>Contact Us</span>
             </span>
                
             
                 <div className='footer-email'>
            
             <div className='email-circle-icon'>

        <span >
        <i class="fa-regular fa-envelope"></i>
            </span>
          
            </div>


            

         <div className='email-info'>
         <span>&nbsp;info@medcloud.com.pk</span>
         </div>

                 </div>

                 <div className='footer-email'>
            
            <div className='email-circle-icon'>

       <span >
       <i aria-hidden="true" class="fas fa-phone-alt"></i>
           </span>
         
           </div>

        <div className='email-info'>
        <span>&nbsp;+92334-6888226</span>
        </div>

                </div>


         


                {/* <div className='footer-email'>
            
            <div className='email-circle-icon'>

       <span className=''>
        
       <i class="fa-solid fa-phone"></i>
           </span>
         
           </div>

        <div className='email-info'>
        <span>&nbsp;+9236</span>
        </div>

                </div> */}








<div className='social-media '>



<Link to='https://www.facebook.com/people/MedPro/100094971202300/?mibextid=kFxxJD'>
<div className='social-circle facebook-bg'>
<i class="fa-brands fa-facebook"></i>
</div>
</Link>




           <a href='#'>
<div className='social-circle instagram-bg'>
<i class="fa-brands fa-instagram"></i>
</div>
</a>




<Link to='https://www.facebook.com/people/MedPro/100094971202300/?mibextid=kFxxJD'>
<div className='social-circle youtube-bg'>
<i class="fa-brands fa-youtube"></i>
</div>
</Link>




<a href='#'>
<div className='social-circle linkedin-bg'>
<i class="fa-brands fa-linkedin"></i>
</div>
</a>



</div>





<div className='social-media '>



<a href='#'>
<div className='social-circle  reddit-bg'>
<i class="fab fa-reddit "></i>
</div>
</a>




           <a href='#'>
<div className='social-circle   pinterest-bg'>
<i class="fa-brands fa-pinterest"></i>
</div>
</a>




<a href='#'>
<div className='social-circle twitter-bg'>
<i class="fa-brands fa-square-twitter"></i>
</div>
</a>




<a href='#'>
<div className='social-circle linkedin-bg'>
<i class="fa-brands fa-linkedin"></i>
</div>
</a>





</div>










      
                
                </div>




















                    </div>


                 </div>

               </section>

                      
               <div className='footer-container-bottom'>
      <div className='footer-bottom'>
            
            <div className='footer-left'>
            <span>© 2024 medcloud | All Rights Reserved </span>
        
            </div>
         
            <div className='footer-right'>

               <a href='#'><span >| Privacy Policy </span></a>
         
            </div>
            
              
           </div>
   

           </div>


            










    </div>
  )
}

export default Footer
