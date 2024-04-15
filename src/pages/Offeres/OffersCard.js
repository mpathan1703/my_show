import React from 'react'
import { LiaLaptopSolid } from "react-icons/lia";
import { CiMobile1 } from "react-icons/ci";

const OffersCard = ({backgroundImgUrl,logoUrl,description,cardType,title,date}) => {
    return (
        <div className='bg-white m_card_offers my-3 border'>
            <div className="m_top">
                <div className='m_img_box'>
                    <img src={backgroundImgUrl} alt="" />
                </div>
                <div className='m_hover_content_overlay'></div>
                <div className='m_hover_content'>
                    <h6 className='py-3'>ABOUT OFFER</h6>
                    <p>{description}</p>
                    <div>
                        <small className='m_h11'> AVAILABLE FOR</small>
                        <div className='d-flex gap-3 align-items-center text-center justify-content-center mt-2'>
                            <div>
                                <div className='m_icon rounded-pill'>
                                    <LiaLaptopSolid />
                                </div>
                                <small className='m_h9'>WEB</small>
                            </div>
                            <div>
                                <div className='m_icon rounded-pill'>
                                    <CiMobile1 size={18} />
                                </div>
                                <small className='m_h9'>MOBILE</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m_logo mt-5'>
                    <img src={logoUrl} alt="" />
                </div>
            </div>
            {/* bottom section  */}
            <div className="m_bottom bg-white p-2" >
                <h6>{title}</h6>
                <div className='m_date_range'>
                    <span>Valid till <span>{date}</span></span>
                </div>
            </div>
        </div>
    )
}

export default OffersCard