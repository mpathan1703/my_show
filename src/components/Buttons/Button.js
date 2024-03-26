import React from 'react'

export const Button = ({title,isRounded=false, btnType="solid"}) => {
  switch(btnType){
    case "outLine": return <button className={`border rounded-2 py-2 m_border_pinkish w-100 gap-4 ${isRounded ? "rounded-pill px-3": ""} bg-white m_h13 px-2 py-1 m_text_pinkish`}>{title} </button>
default :
return (
  <button className={`border ${isRounded ? "rounded-pill px-3": ""} bg-white m_h13 px-2 py-1 m_text_pinkish`}>{title} </button>
)
  }


}
