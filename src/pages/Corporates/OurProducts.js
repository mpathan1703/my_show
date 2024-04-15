import React from 'react'

const OurProducts = () => {
    return (
        <div className='container bg-white my-2 py-4 m_our_products'>
            <h5 className='ms-4'>OUR PRODUCTS</h5>
            <div className='row'>
                <div className='col-12 col-md-6 '>
                    <div style={{ background: "url(Corporates/movie-voucher.avif)", height: "500px" }} className='m_box'>
                        <div className='mx-auto text-white' style={{ width: "65%" }}>
                            <h2 className='mb-2'>Movie Vouchers</h2>
                            <p style={{ lineHeight: "40px" }} className='m_h19'>
                                Highly customizable, single usage,
                                promotional codes in the form of
                                set amount / value or a percentage
                                of discount on the ticket cost.
                                promotions, consumer activation
                                and countless more!
                            </p>
                            <button className='btn my-3 p-3 px-5 bg-white text-danger'>Enquire</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6  '>
                    <div style={{ background: "url(Corporates/gift-voucher.avif)", height: "500px" }} className='m_box'>
                        <div className='mx-auto text-white' style={{ width: "65%" }}>
                            <h2 className='mb-2'>Gift Vouchers</h2>
                            <p style={{ lineHeight: "40px" }} className='m_h19'>
                            Amazing little pre-loaded cash cards
                            which can be used to purchase tickets
                            across all categories for 6 months.
                            Be it employee rewards, trade channel
                            incentive or consumer engagement,
                            a gift voucher fits all.
                            </p>
                            <button className='btn my-3 p-3 px-5 bg-white text-danger'>Enquire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts