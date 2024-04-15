import React from 'react'
import { BsExclamationCircle } from "react-icons/bs";

const ShowsCard = ({title,img, background="#FCF1F1"}) => {
  return (
    <div style={{background}} className='m_show_card text-center'>
        <div className='m_showcard_img_box'>
            <img src={img} alt="" />
        </div>
        <h4>{title}</h4>
        <BsExclamationCircle size={25} className='m_text_pinkish'/>
    </div>
  )
}

export default ShowsCard