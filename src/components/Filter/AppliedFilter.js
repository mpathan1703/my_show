import React from 'react'
import { Button } from '../Buttons/Button'




export const AppliedFilter = ({title,buttons}) => {
  return (
    <div className='p-3 mt-1'>
      <h4 className='bg-suceess m_text_pinkish p-3'>{title}</h4>
<div>
{buttons.map((ele,index)=>{
  return   <Button key={index}  title={ele} isRounded={true}/>
})}
</div>
    </div>
  )
}
