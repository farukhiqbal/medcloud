import React from 'react'
import './featured.css';
// import Newcv from '../../Newcv';
// import Header from './Header/Header';


const Featured = () => {
  return (
    <div>
              {/* <Header/> */}
        <section>

             <div className='featured-container'>


                 <div className='feat-left'>
                             <div className='feat-heading'>
                          <h1 className='feat-title'>  <span>|</span>  Enterprise Recourse Planning - ERP</h1>
  
                          <p className='feat-p'>  ERP systems track business resources, cash, raw materials,
                           production capacity and the status of business commitments.
                             Below mentioned modules are available for completion of that purposes:</p>
                         </div>



                         <div className='feat-items'>

                              <ul>
                                <li>
                                    <i aria-hidden="true" class="fas fa-check"></i>
                                    
                                    
                                    <p className='feat-li-p'>   General Ledger</p>
                                    
                                    
                                    </li>

                                <li><i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p'>  
                                  Purchase 
                                  </p>
                                    </li>
                                <li>
                                <i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p'> 
                                 Account Payable
                                 </p>
                                 </li>

                                <li>
                                <i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p'>
                                         Inventory Management
                                         
                                         </p>
                                         </li>
                                <li>
                                <i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p'>
                                        Sales Management
                                        </p>
                                        </li>
                                <li>
                                <i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p'>
                                    
                                        Account Receivable
                                        </p>
                                        </li>
                                <li>
                                <i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p'>     
                                 Fixed Assets
                                 </p>
                                </li>
                                <li>
                                <i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p'>  
                                  Production
                                  </p>
                                  </li>

                                <li>
                                <i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p'> 
                                    Project Management
                                    </p>
                                    </li>


                                <li>
                                <i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p'> 
                                   Human Resource & Payroll Management
                                   </p>
                                   </li>





                              </ul>

                             </div>

                            
                 </div>





                    <div className='feat-right'>

                          <div className='feat-img'>
                            <img src='https://multi-techno.com/wp-content/uploads/elementor/thumbs/ezgif.com-gif-maker-26-pn76e9cysj060w2g367frgefsb9x7c2fre4bizzw10.webp'/>
                          </div>


                    </div>



             </div>

        </section>


                         {/* second section  */}



              <section>

              <div className='featured-container1'>


                 <div className='feat-left1'>


        <img  src='https://multi-techno.com/wp-content/uploads/elementor/thumbs/retail-systems-inc-point-of-sale-systems-pos-solutions-png-1000_969-pyey87osa2cxubv62a6cf1t8n96qt4orj54mnmxfz2.webp'/>








                 </div>



                    <div className='feat-right1'>
            <div className='feat-heading1'>
         <h1 className='feat-title1'> <span>|</span>  Point of sale - POS</h1>

         <p className='feat-p1'> A POS system is used to conduct sales at brick & mortar and ecommerce stores.
          The point of sale system can be integrated with your other systems and software such as ecommerce platforms, accounting apps, ERP and warehouse systems.</p>
        
        
          <p className='feat-p1'> A full-featured enterprise POS system can handle sales monitoring and reporting, analytics, inventory tracking, mobile connectivity, customer data management, employee management, and robust integrations.</p>
        

          <p className='feat-p1'>POS is available in following industries:</p>

             <div className='feat-items1'>  
          <ul>
                <li>
                      <i aria-hidden="true" class="fas fa-check"></i>
                                    
                                    
                                    <p className='feat-li-p1'>   General Ledger</p>
                                    
                                    
                                    </li>

                                <li><i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p1'>  
                                  Purchase 
                                  </p>
                                    </li>
                                <li>
                                <i aria-hidden="true" class="fas fa-check"></i>
                                <p className='feat-li-p1'> 
                                 Account Payable
                                 </p>
                                 </li>
                                 </ul>

                                 </div> 
        </div>








        </div>

       </div>


              </section>





        {/* section section 3  */}

           <section>
 
           <div className='feat-contianer2'>

           <div className='feat-heading2'>
         <h1 className='feat-title2'> <span>|</span> Help Your Team Perform Better With Our Expert Advice</h1>

             </div>
           </div>
           </section>


                     {/* center imge section4 */}

    <section>
        
        <div className='feat-containerimg'>

              <div className='feat-image1'>

            <img src='https://multi-techno.com/wp-content/uploads/elementor/thumbs/image2-pyey8i16d0b6cfmligo9vj5sjcccnl0chqm3hgu3ka.webp'/>




              </div>


        </div>

    </section>


       {/* soft banner section  */}


    <section>
     <div className=' soft-container'>

     <div  className='soft-width'>
          <div className='soft-detail'>

                   <span  className='soft-title'>
                   Best ERP Software in  <span className='soft-spp'>Pakistan</span> 
                   </span>
  
           

            <a href="#" class="soft-btn" > Schedule a demo</a>
          
           

          </div>

     </div>


     </div>





  </section>



    </div>
  )
}

export default Featured
