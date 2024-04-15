import React from 'react'
import { Button } from '../../components/Buttons/Button'

const ToviewBanner = () => {
    const data =[
        {
            title1:"WHAT'S IN IT FOR YOU",
            heading:"Brand Promotions",
            desc:"Gifting entertainment is a fun way to push your brand’s message. And the ways you can use vouchers are endless.For example, upselling celebrity- endorsed products timed with a movie release",
            btntext:"Promote Your Banner",
            imgpath:"steven-libralon.avif"
        },
        {
            heading:<span>Employee Engagement <br/>Recognition & Rewards</span>,
            desc:"Show your clients and employees some appreciation by gifting them our products.",
            btntext:"Engage Your Employees",
            imgpath:"customer-engage.avif"
        },
        {
            heading:"Lead Generation",
            desc:"Get positive referrals, keep existing customers and trigger change management.",
            btntext:"Improve Leads",
            imgpath:"lead-generation.avif"
        },
        {
            heading:"Loyalty",
            desc:"Keep customers firmly in your corner by rewarding them with promotional vouchers.",
            btntext:"Retain Your Customers",
            imgpath:"loyalty.avif"
        },
        {
            heading:"Corporate Gifting",
            desc:"From stand-up comedy and sporting activities to movies and plays, we’ve got all the entertainment worth gifting to your patrons.",
            btntext:"Explore Solutions",
            imgpath:"corporate-gifting.avif"
        },
    ]
  return (
     <div className='container'>
        { data.map(({title1,heading,desc,btntext,imgpath},index)=>{
        return <div key={index} className={`row my-2 ${index % 2 === 0 ? "flex-row-reverse": ""}`}>
        <div className='col-12 col-md-6 p-0'>
            <img  style={{height:"100%",width:"100%",}}src={`Corporates/${imgpath}`} alt="" />
        </div>
        <div  className='col-12 col-md-6 bg-white p-5 justify-content-center d-flex flex-column'>
            <h6>{title1}</h6>
            <h3 className='my-3'>{heading}</h3>
            <p>{desc}</p>
            <div className='w-50 mt-2'>
                <Button btnType='outline' title={btntext}/>
                {/* <button style={{margin:"auto",border :"1px solid #F84464"}} className=' m_text_pinkish bg-white  px-5 py-2 fw-bold rounded-1'> title={btntext}</button> */}
            </div>
        </div>
    </div>
      })}
     </div>
  )
}

export default ToviewBanner