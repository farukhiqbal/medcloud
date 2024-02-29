import React from 'react'
import CounterUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import './counter.css';


const Counterup = () => {

const [counteron, setcounteron] = useState(false);





  return (
    <div>
      
  <ScrollTrigger onEnter={()=> setcounteron(true)} onExit={()=> setcounteron(false)}   >

             <div className='count-container'>

            <div className='count-width'>


            <div className='count-col'>

             <div className='count-content'>

              <div className='count-number'>
                
              {counteron &&  <CounterUp    start={0} end={517} duration={2} delay={0}/>}

              </div>
               <div className='count-title'>Happy Clients </div>

             </div>
            </div>




 <div className='count-col'>

             <div className='count-content'>

              <div className='count-number'>
                
              {counteron &&  <CounterUp    start={0} end={297} duration={2} delay={0}/>}

              </div>
               <div className='count-title'>Projects Completed </div>

             </div>
            </div>



            <div className='count-col'>

<div className='count-content'>

 <div className='count-number'>
   
 {counteron &&  <CounterUp    start={0} end={13} duration={2} delay={0}/>}

 </div>
  <div className='count-title'>Years of Experience</div>

</div>
</div>



<div className='count-col'>

<div className='count-content'>

 <div className='count-number'>
   
 {counteron &&  <CounterUp    start={0} end={7} duration={2} delay={0}/>}

 </div>
  <div className='count-title'>Global Presence </div>

</div>
</div>





            </div>

             </div>

             </ScrollTrigger>



    </div>
  )
}

export default Counterup;
