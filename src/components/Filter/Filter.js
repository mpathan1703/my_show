import React, { useState } from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { Button } from '../Buttons/Button';




export const Filter = ({ buttons, title }) => {

  const [open, setOpen] = useState(true)

  function toggleState() {
    return setOpen(!open)
  }
  return (
    <div>
      <div className="bg-white rounded-3 shadow-sm my-2 p-1 px-2">
        <div onClick={toggleState} className=" d-flex align-items-center justify-content-between m_cursor_pointer m_user_select_none ">
          <div className="d-flex align-items-center gap-3 ">
            {open ? <IoChevronUp />  : <IoChevronDownOutline />}
            <h6 className={`${open ? "m_text_pinkish" :  "text-dark"} m_h15`}>{title}</h6>
          </div>
          <div className="d-flex text-end ">
            <h6 className='m_h13'>clear</h6>
          </div>
        </div>
        {open && <div className="mt-3 d-flex flex-wrap gap-2 ">
          {buttons.map((value) => {
            return <Button key={value} title={value} />
          })}


        </div>
        }
      </div>
    </div>
  )
}
