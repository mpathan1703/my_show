import React from 'react'

const Questions = () => {
    const data = ["How will BookMyShow help grow my business?",
                   "Whom should I use the BookMyShow vouchers for?",
                   "Why are Incentives important?",
                   "Where can the customers redeem the vouchers?",
                   "What are the flexibility options for your service?",
                   "If I have multiple admits on the voucher, can I split them?",
                   "Can I use these vouchers in any city of India?",
                   "Who can redeem the voucher?"
]
const data2 =[
    "Where can one redeem a Gift Voucher?",
    "Where can one redeem the WinPin voucher?",
    "Where can one redeem the Movie Pack voucher?",
    "For any concern & escalations, whom do I contact?"
]
    return (
        <div className='container bg-white py-5 my-2 px-3 m_question'>
            <h6 className='m_question_head'>FREQUENTLY ASKED QUESTIONS</h6>
            <div className='row d-flex  '>
                <div className='col-12 col-md-5 mt-5 '>
                    <h6 className='fw-bold'>General Queries</h6>
                 {data.map((ele,index)=>{
                    return    <div key={index} className='border-bottom p-1 '>
                    <p className='mb-2  mt-3 m_h12'>{ele}</p>
                </div>
                 })}
                </div>
                <div className='col-12 col-md-5 mt-5'>
                    <h6 className='fw-bold'>Logistick Queries</h6>
                    {data2.map((title,index)=>{
                       return <div key={ index} className='border-bottom p-1 '>
                       <p className='mb-2  mt-3 m_h12'>{title}</p>
                   </div> 
                    })}
                    <div className='mt-5'>
                        <h6 className='fw-bold'>Payment Queries</h6>
                        <p className="mb-2 border-bottom p-1 mt-3 m_h12">What is the mode of payment?</p>
                        <p className="mb-2 border-bottom p-1 mt-3 m_h12">How do I arrange for a larger corporate order? Whom do I contact for more information regarding this?</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Questions
