import React from 'react'
import MultiCarousel from "react-multi-carousel";

const Compaigns = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
     const data =[
        {
            imgpath:"acuvue-offer.jpg",
        },
        {
            imgpath:"addidas-offer.avif",
        },
        {
            imgpath:"acuvue-offer.jpg",
        },
        {
            imgpath:"addidas-offer.avif",
        }
     ]
  return (
    <div className='container '>
        <div className='py-4 bg-white'>
            <h6>CAMPAIGNS WE’RE PROUD OF</h6>
            <div className='ms-4 mb-2'>
                 {data.map(({imgpath},index)=>{
                              return  <MultiCarousel responsive={responsive}>
                                <div key={index}>
                                    <img src={`Corporates/Campaigns/${imgpath}`} alt="" />
                                </div>
                            </MultiCarousel>
                 })}
            </div>
        </div>
    </div>
  )
}

export default Compaigns