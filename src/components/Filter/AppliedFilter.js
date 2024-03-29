import React from 'react'
import { Button } from '../Buttons/Button'
export const AppliedFilter = ({ title, buttons }) => {
  return (
    <div className='p-3 mt-1 gap-4'>
      <h4 className=' m_text_pinkish p-3'>{title}</h4>
      <div >
        {buttons.map((ele, index) => {
          return <div className='m-1 d-inline-block'><Button key={index} title={ele} isRounded={true} /></div>
        })}
      </div>
    </div>
  )
}
