import React from 'react'
import "./MultiMovies.css"
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HiMiniChevronRight } from "react-icons/hi2";

export const MultiMovies = ({ srcData = [], title, isShowAll = "false", path }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    // <div className='m_multi_movies_carsole'>
    //   <div className='mx-1 my-2 d-flex align-items-center justify-content-between'>
    //     <h4 className='m_h19'>{title}</h4>
    //     {isShowAll && <div className=' d-flex align-items-center m_text_pinkish '>
    //       <span className='m_cursor_poiter'>See all</span>
    //       <HiMiniChevronRight />
    //     </div>}
    //   </div>
    //   <MultiCarousel responsive={responsive}>
    //   {srcData.map((path,index)=>{
    //      return <div  key={index} className='m_carousel_img_box'>
    //       <img src={`./MultiMovie/${path}`} alt="" />
    //     </div>
    //   })}
    //   </MultiCarousel>
    // </div>
    <div className='m_multi_movies_carsole'>
    {(title || isShowAll) && <div className='d-flex justify-content-between align-items-center my-2 mx-1'>
        <h4 className='b_h20'>{title}</h4>
        {isShowAll && <div className='b_text_red_light_color d-flex align-items-center'>
            <span className='m_cursor_poiter b_h14 '>See All</span>
            {/* <MdOutlineChevronRight /> */}
        </div>}
    </div>}
    <MultiCarousel responsive={responsive}>
        {srcData.map((path, index) => {
            return <div key={index} className="m_carousel_img_box">
                <img src={path} alt="" />
            </div>
        })}

    </MultiCarousel>
</div>
  )
}
