import React from 'react'

const BulkBooking = () => {
  return (
    <div className='container my-2 text-white m_bulk_booking position-relative' style={{background:"url(Corporates/bulk-booking.avif)",height:"300px"}}>
        <div className='w-100 h-100 position-absolute start-0 top-0' style={{background:"rgba(0,0,0,0.5)",zIndex:1}}></div>
        <div className='row justify-content-between align-items-center position-relative' style={{zIndex:2}}>
         <div className='col-12 col-md-5'>
            <h6 className='my-3'>Bulk Booking</h6>
            <h2>Exclusive corporate experiences from BookMyShow</h2>
         </div>
         <div className='col-12 col-md-3'>
            <button className='btn btn-sm text-white py-3 w-100 m_bg_pinkish'>Explore Now</button>
         </div>
        </div>
    </div>
  )
}

export default BulkBooking