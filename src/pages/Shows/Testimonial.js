import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { ImQuotesLeft } from "react-icons/im";

const Testimonial = () => {
    return (
        <div className='m_testimonial'>
            <Carousel>
                <div>
                    <div className="row">
                        <div className='col-12 col-md-7'>
                            <div className='px-5 position-relative'>
                                <div className='m_testimonial_quote'>
                                    <ImQuotesLeft />
                                </div>
                                <p className='text-start'>We at Jio MAMI Mumbai Film Festival with Star are proud of our partnership with BMS. They turned around the registration to the festival and the on ground management of delegates at our venues altering visitor experience at the festival which is the cornerstone of engagement at any LIVE event. BMS is an integral part of building MAMI and its growth in the last 6 years. Despite being a huge corporate their commitment to independent institutions in cultural spaces is unflinching. Our gratitude to Ashish Hemrajani and his team at BMS for their faith and support."</p>
                                <div className='d-flex align-items-center gap-4'>
                                    <div className='m_left'>
                                        <div className='m_testimonial_img_box'>
                                            <img src="ListYourShows/smrit.avif" alt="" />
                                        </div>
                                    </div>
                                    <div className='m_right text-start'>
                                        <h6 className='mt-2 fw-bold'>Smriti Kiran</h6>
                                        <h6 className='fw-bold'>Artistic Director - Mumbai Academy of Moving</h6>
                                        <h6 className='fw-bold'> Image (MAMI)</h6>
                                        <h6 className='fw-bold'>Jio MAMI Mumbai Film Festival with Star</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='b_testi_img'>
                                <img src="ListYourShows/jio.avif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row align-items-center">
                        <div className='col-12 col-md-7'>
                            <div className='px-5 position-relative'>
                                <div className='m_testimonial_quote'>
                                    <ImQuotesLeft />
                                </div>
                                <p className='text-start'>Apart from being market leaders and pioneers of the entertainment segment, Bookmyshow has also helped evolve Indian markets to consume fresh and different content. Sunburn and Bookmyshow’s association are years strong, and we will continue to work together, and grow together. Bookmyshow today not just offers to be a ticketing platform for Sunburn, put a partner with many more integrated offerings like marketing, planning and on ground operations support. We at Sunburn are proud and grateful to be associated with Bookmyshow!”</p>
                                <div className='d-flex align-items-center gap-4'>
                                    <div className='m_left'>
                                        <div className='m_testimonial_img_box'>
                                            <img src="ListYourShows/kar.avif" alt="" />
                                        </div>
                                    </div>
                                    <div className='m_right text-start'>
                                        <h6 className='mt-2 fw-bold'>Karan Singh</h6>
                                        <h6 className='fw-bold'>COO - Percept Live & </h6>
                                        <h6 className='fw-bold'> CEO - Sunburn Percept Live Pvt. <br />Ltd.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='b_testi_img'>
                                <img src="ListYourShows/perceptn.avif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row align-items-center">
                        <div className='col-12 col-md-7'>
                            <div className='px-5 position-relative'>
                                <div className='m_testimonial_quote'>
                                    <ImQuotesLeft />
                                </div>
                                <p className='text-start'>The NCPA shares a cherished 13 year bond with BMS, its online ticketing partner that has helped art lovers book their seats for their favourite shows in a seamless manner. The presence of a team from Bookmyshow in the NCPA premises on the day of the event further ensures the smooth-functioning of ticket-related formalities.”</p>
                                <div className='d-flex align-items-center gap-4'>
                                    <div className='m_left'>
                                    </div>
                                    <div className='m_right text-start'>
                                        <h6 className='mt-2 fw-bold'>NCPA- National Centre for the</h6>
                                        <h6 className='fw-bold'> Performing Arts. </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='b_testi_img'>
                                <img src="ListYourShows/ncpas.avif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default Testimonial