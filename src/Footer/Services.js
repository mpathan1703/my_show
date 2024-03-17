import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoTicketSharp } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";

// declaring an arrey 
const data = [
  {
    icon:<RiCustomerService2Fill size={40} />,
    discription:"24/7 CUSTOMER CARE"
  },
  {
    icon:<IoTicketSharp size={40} />,
    discription:"RESEND BOOKING CONFIRMATION "
  },
  {
    icon:<SlEnvolopeLetter size={40} />,
    discription:"SUBSCRIBE TO THE NEWSLETTER"
  },
]


export const Services = () => {
  return (
    <section className='m_bg_dark2 text-white '>
     <div className='container  '>
      <div className='row '>   
       {data.map((value, index)=>{
        return (
          <div key={index} className='col-12 col-md-4 text-center text-white py-2 m_service_box'>
            {value.icon}
          <h6 className='m_h14 py-2'>{value.discription}</h6>
          </div>
        )
       })}
      </div>
     </div>
    </section>
  )
}
