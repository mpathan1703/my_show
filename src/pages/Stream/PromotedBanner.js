import React from 'react'
import { IoMdPlay } from "react-icons/io";



export const PromotedBanner = ({posterpath,path,release,name,language,slug,discription,isPremier=false}) => {
  return (
    <div className='m_promoted_banner_main'style={{background:path}}>
        <div className='m_prooted_banner_forground'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-3'>
                        <div className='m_promoted_img_box '>
                            <img src={posterpath} alt="" />
                        </div>
                    </div>
                    <div className='col-12 col-md-7 text-start text-white d-flex align-items-center'>
                        <div className='d-flex flex-column gap-4 m_forgorund_contet'>
                            { isPremier &&  <div style={{width:"fit-content"}} className='d-flex rounded-pill pe-2 gap-2 align-items-center bg_dark'>
                               <div className='m_play_icon'>
                                <IoMdPlay/>
                               </div>
                               <h6 className='m_h12 my-1 m_premier fw-bold'>PREMIER</h6>
                            </div>}
                            <h6>{release}</h6>
                            <h2>{name}</h2>
                            <h6>{slug}</h6>
                            <h6 className='m_h18'>{language}</h6>
                            <h6 className='m_discription'>{discription}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
