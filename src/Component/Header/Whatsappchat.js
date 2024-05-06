import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './whatsappchat.css';
import logo  from '../../asset/med.png'

const Whatsappchat = () => {




  return (
    <div>
       <FloatingWhatsApp
       phoneNumber="03236311542"
       accountName="Medcloud"
       avatar={logo}
       chatMessage="how can help you sir   please write your name"
       allowEsc
       allowClickAway
       notification
       notificationSound
    />
    </div>
  )
}

export default Whatsappchat