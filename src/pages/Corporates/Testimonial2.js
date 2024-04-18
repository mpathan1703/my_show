import React from 'react'
import { Carousel } from "react-responsive-carousel";

const Testimonial2 = () => {
  return (
    <div className='my-4 m_testimonial2 container'>
      <h5>Testimonials</h5>
      <Carousel>
        <div>
          <div className="row bg-white p-3">
            <div className='col-12 col-md-3'>
              <div className='m_testimonial2_img_box'>
                <img src="Corporates/o-logo.avif" alt="" />
              </div>
            </div>
            <div className='col-12 col-md-9 text-start border-start border-2'>
              <p className='m_h14'>
                “Through our partnership with BookMyShow, we have been able to offer very exciting events privileges to our Select members. We were able to drive excitement/ engagement with unique offering which was much appreciated by our privileged members. Thank you BookMyShow and team for great work.”
              </p>
              <h6>
                Ashish Lingamneni <br />
                Associate Director - Marketing <br />
                OlaCabs
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="row bg-white p-3">
            <div className='col-12 col-md-3'>
              <div className='m_testimonial2_img_box'>
                <img src="Corporates/o-logo.avif" alt="" />
              </div>
            </div>
            <div className='col-12 col-md-9 text-start border-start border-2'>
              <p className='m_h14'>
                “Through our partnership with BookMyShow, we have been able to offer very exciting events privileges to our Select members. We were able to drive excitement/ engagement with unique offering which was much appreciated by our privileged members. Thank you BookMyShow and team for great work.”
              </p>
              <h6>
                Ashish Lingamneni <br />
                Associate Director - Marketing <br />
                OlaCabs
              </h6>
            </div>
          </div>
        </div>
      </Carousel>

    </div>
  )
}

export default Testimonial2