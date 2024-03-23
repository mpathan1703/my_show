import React from 'react'
import { CgChevronRight } from "react-icons/cg";

export const HeaddingBanner = ({title1,title2}) => {
  return (
    <div className='bg-white px-4 py-4 rounded-3 m_cursor_pointer shadow d-flex flex-wrap gap-1 d-flex justify-content-between align-items-center'>
      <h5>{title1}</h5>
      <h5 className='m_h15 m_text_pinkish'>{title2} <CgChevronRight size={20}/> </h5>
    </div>
  )
}
