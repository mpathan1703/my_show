import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export const SocialLinks = () => {
  const socialIcons = [<FaFacebookF/>, <FaXTwitter/>, <FaInstagram/>,<IoLogoYoutube/>,<FaPinterestP/>,<FaLinkedinIn/>]
  return (
    <section className='m_background'>
<div className='m_border position-relative'> 
<div className=' m_bottom_logo position-absolute d-flex justify-content-center mb-2 w-100'>
  <div className='px-4 m_background'>
    <img src="footer img.svg" alt="footer img" />
  </div>
</div>
</div>

<div className='container text-white'>
<div className='m_icon_cont d-flex justify-content-center mt-5 mb-3 gap-1'>
 {socialIcons.map(function(value,index){
  return  <div key={index} className='m_icons text-white '>
{ value }
</div>
 })}
</div>
</div>
<div className='m_text_color2 text-center m_h10 m_copyright'>
  <p> 2024 Copyright  © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
  <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
</div>
    </section>
  )
}
