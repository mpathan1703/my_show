import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export const SocialLinks = () => {
  const socialIcons = [<FaFacebookF />, <FaXTwitter />, <FaInstagram />, <IoLogoYoutube />, <FaPinterestP />, <FaLinkedinIn />]
  return (
    <section className='m_background'>
      <div className="b_bookmyshow_border position-relative">
        <div className="b_bottom_logo d-flex justify-content-center mb-2 position-absolute w-100">
          <div className=' b_bg_dark_light2 px-4'>
            <img src="bookmyshow.webp" alt="" />
          </div>
        </div>
      </div>
      <div className='container text-white'>
        <div className='m_icon_cont d-flex justify-content-center mt-5 mb-3 gap-1'>
          {socialIcons.map(function (value, index) {
            return <div key={index} className='m_icons text-white '>
              {value}
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
