import React from 'react'

const Solutions = () => {
    const data = [
        {
            title: <span>End-to-End <br/>Creative Support</span>,
            background: "green.avif"
        },
        {
            title: <span>Marketing & E-mail <br /> Guidance</span>,
            background: "red.avif"
        },
        {
            title: <span>Bulk SMS <br/> Communication</span>,
            background: "yellow.avif"
        }
    ]

    return (
        <div className='container m_solutions' style={{ letterSpacing: "2px", fontWeight: "300" }}>
            <div className='py-4 bg-white'>
                <h5 className='ms-5 mb-2'>OUR SUITE OF BUSINESS SOLUTIONS:</h5>
                <div className='row text-white'>
                    {data.map(({ title, background }, index) => {
                        return <div key={index} className='col-12 col-md-4 p-0'>
                            <div className='m_card  p-0'
                                style={{ background: `url(Corporates/${background})` }}>
                                <h2 className='text-start'>{title}</h2>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Solutions