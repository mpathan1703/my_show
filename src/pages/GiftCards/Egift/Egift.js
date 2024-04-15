import React, { useState } from 'react'

const Egift = () => {
    const [active, setActive] = useState("All");

    const btnData = ["All", "Generic", "Combos"];
    return (
        <div className='m_e_gift'>
            <h6 className='text-center text-secondary'>  Pick a card from one of our themes</h6>
            <div className='d-flex justify-content-center my-3 gap-2'>
                {btnData.map(((ele, index) => {
                    return <button
                        onClick={() => setActive(ele)}
                        key={index}
                        className={`m_e_gift_btn ${active===ele ?"active" :""}`}>
                            {ele}
                    </button>
                }))}
            </div>
              <div className="row">
                    <div className="col-12 col-md-3 mt-4">
                        <div className="m_hover_content_box">
                            <div className="m_img_box">
                                <img src="GiftCard/gift_my_show_02402022094010_480x295.avif" alt="" />
                            </div>

                            <div className="m_content">
                                <table>
                                    <tbody>
                                        <tr style={{height:50}}>
                                            <td style={{width:200}}>
                                                <h6 className='m_h15'>
                                                BMS and The Beer Cafe Combo
                                                </h6>
                                            </td>
                                            <td style={{width:200}}>
                                                <h6 className='m_h15'>
                                                "₹ "
                                                "1000"
                                                </h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className='m_h13'>The Beer Cafe Gift Card (Rs.500)</h6>
                                            </td>
                                            <td>
                                                <h6 className='m_h13'>"₹ "
                                                    "500"</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className='m_h13'>BookMyShow Instant Gift Card</h6>
                                            </td>
                                            <td>
                                                <h6 className='m_h13'>"₹ "
                                                    "500.00"</h6>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className='border-0 p-2 rounded-3  w-75 mx-auto m_bg_pinkish text-white'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Egift