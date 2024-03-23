import React from 'react'
import "./Card.css"

export const MyCard = ({name,movieCertificate,language,path}) => {
    return (
        <div>
            <div className='m_top'>
                <div className='m_movie_poster'>
                    <img src={path} alt="" />
                </div>
            </div>
            <div className='m_bottom'>
                <h6 className='m_h19'>{name}</h6>
                <h5 className='text-muted my-1 m_h13'>{movieCertificate}</h5>
                <h5 className='text-muted  m_h13'>{language}</h5>
            </div>
        </div>
    )
}
