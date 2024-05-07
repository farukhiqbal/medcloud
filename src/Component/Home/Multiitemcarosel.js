import React from 'react';
import Slider from "react-slick";
import './multiitemcarosel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ldclogo from '../../asset/ldc.png'



const Multiitemcarosel = () => {

    const Department = [
        {
          id:1,
          imageSrc: 'https://multi-techno.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-25-at-11.14.01-AM.jpg',
      
        },
       
        {
            id:2,
            imageSrc: 'https://multi-techno.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-25-at-9.54.59-AM.jpg',
        
          },
         
          {
            id:3,
            imageSrc: 'https://multi-techno.com/wp-content/uploads/2022/04/Almas-Foods-150x150.webp',
        
          },
       
          {
            id:4,
            imageSrc: 'https://multi-techno.com/wp-content/uploads/2022/04/Hamza-Trading-150x150.webp',
        
          },
         

          {
            id:5,
            imageSrc: 'https://multi-techno.com/wp-content/uploads/2022/04/HI-Tech-corporation-150x150.webp',
        
          },
       
          {
            id:6,
            imageSrc: 'https://multi-techno.com/wp-content/uploads/2022/04/Khas-150x150.webp',
        
          },
         
          {
            id:7,
            imageSrc: 'https://multi-techno.com/wp-content/uploads/2022/04/Mohmus-150x150.webp',
        
          },
         
          {
            id:8,
            imageSrc: 'https://multi-techno.com/wp-content/uploads/2022/04/Optimus-150x150.webp',
        
          },

          {
            id:9,
            imageSrc: ldclogo,
        
          },



      ];
    




    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplayspeed:500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (

         <div className='multi-imagedwidth'>


    <div  className='multi-image'>
        <Slider {...settings}>

        {
           Department.map((item)=>
           

          <div>
          <img src={item.imageSrc} width='200px' height='150px '/>
     
          </div>
         




           )
        }
        </Slider>




    </div>



    </div>
  )
}

export default Multiitemcarosel
