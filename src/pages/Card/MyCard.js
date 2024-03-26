import React from 'react'
import "./Card.css"

export const MyCard = ({name,movieCertificate,language,path,discription,isNameSlice=true,isDescriptionSlice=true}) => {
    return (
        <div>
            <div className='m_top'>
                <div className='m_movie_poster'>
                    <img src={path} alt="" />
                </div>
            </div>
            <div className='m_bottom'>
                <h6 className='m_h19'>{(name?.length < 24 ||isNameSlice)? name: `${name.slice(0,24)}...`}</h6>
                <h5 className='m_h13 text-muted'>{(discription?.length < 22 || isDescriptionSlice)? discription:`${discription.slice(0,22)}...`}</h5>
                <h5 className='text-muted my-1 m_h11'>{movieCertificate}</h5>
                <h5 className='text-muted  m_h11'>{language}</h5>
            </div>
        </div>
    )
}
