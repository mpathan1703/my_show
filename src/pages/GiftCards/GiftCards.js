import React, { useState } from 'react'
import "./GiftCard.css"
import PhysicalGiftCard from "./Physical/PhysicalGiftCard"
import Egift from "./Egift/Egift"
export const GiftCards = () => {
  const [active , setActive ] = useState ("e-giftcard")

  return (
   <section className='m_gift_cards'>
    <div className="container my-5">
      <div className='  text-center m_btns'>
        <button onClick={()=>setActive("e-giftcard")} className={`border m_h12 ${active ==="e-giftcard" ? "active": ""}`} >E-GIFT-CARDS</button>
        <button onClick={()=>setActive("Physical-GiftCard")}className={`border m_h12 ${active ==="Physical-GiftCard" ? "active": ""}`}>PHYSICAL GIFT CARDS</button>
      </div>
      <div className='bg-white my-3 p-3'>
       { active === "e-giftcard" && <Egift/>}
       { active === "Physical-GiftCard" && <PhysicalGiftCard/>}
      </div>
    </div>
   </section>
  )
}
