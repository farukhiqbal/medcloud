import React from 'react'
import './software.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Software = () => {

  useEffect (()=>{

    AOS.init=({duration:'1000' })
    AOS.refresh();
  
  
  },[])
  


  return (
    <div>
            <br/>
  <section>
     <div className=' soft-container'>

     <div  className='soft-width'>
          <div className='soft-detail'>

                   <span  className='soft-title'  data-aos="fade-right"data-aos-duration="2000">
                   Best ERP Software in  <span className='soft-spp'>Pakistan</span> 
                   </span>
  
           

            <Link to="#"  className="soft-btn1" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="2000"
     >  Schedule a demo</Link>
          
           

          </div>

     </div>


     </div>





  </section>



    </div>
  )
}

export default Software
