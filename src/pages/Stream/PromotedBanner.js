import React from 'react'
import { IoIosPlay } from "react-icons/io";

export const PromotedBanner = ({posterpath,release,moviename,about,language,discription}) => {
    return (

        <div className='m_promoted' >
            <div className='m_promoted_Forground'>
                <div className='container py-3'>
                    <div className='row '>
                        <div className='col-12 col-md-3'>
                            <div className='m_promoted_imgbox'>
                                <img src={posterpath} alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-md-7 d-flex align-items-center  text-start'>
                            <div className='m_promoted_main_forground_content d-flex flex-column gap-4'>
                                <div style={{ width: "fit-content" }} className='d-flex rounded-pill pe-2 gap-2 align-items-center justify-content-center bg-dark'>
                                    <div className='m_play_icon'>
                                         <IoIosPlay/>
                                    </div>
                                    <h6 className='my-1 m_h14 m_premier text-white'>PREMIERE</h6>
                                </div>
                                <h6>{release}</h6>
                                <h2>{moviename}</h2>
                                <h6>{about}</h6>
                                <h6 className='m_h18'>{language}</h6>
                                <h6 className='m_discription'>{discription} </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
