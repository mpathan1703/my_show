import React from 'react'
import "./MultiMovies.css"
// import MultiCarousel from "react-multi-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { HiMiniChevronRight } from "react-icons/hi2";

export const MultiMovies = ({ srcData= [],title, isShowAll="false",}) => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //     partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  //   }
  // }
  return (
    <div className='m_multi_movies_carsole'>
      <div className='mx-1 my-2 d-flex align-items-center justify-content-between'>
        <h4 className='m_h19'>{title}</h4>
      { isShowAll && <div className=' d-flex align-items-center m_text_pinkish '>
          <span className='m_cursor_poiter'>See all</span>
          <HiMiniChevronRight />
        </div>}
      </div>
      {/* <MultiCarousel partialVisible={true} responsive={responsive}>
      <div  className='m_carosole_img_box'>
        <img src="Stream/MultiMovie/et00370047-hryqravrsg-portrait.avif" alt="" />
      </div>
      </MultiCarousel> */}
    </div>
  )
}
