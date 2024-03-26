import React from 'react'
import "./movies.css"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Filter } from '../components/Filter/Filter';
import { AppliedFilter } from '../components/Filter/AppliedFilter';
import { Button } from '../components/Buttons/Button';
import { HeaddingBanner } from '../components/Banner/HeaddingBanner';
import { MyCard } from './Card/MyCard';
// Moviesdata
const MoviesInfo = [
  {
    name: "Shaitaan",
    movieCertificate: "UA",
    language: "Hindi",
    path: "Movie/movie1.avif"
  },
  {
    name: "Madgaon Express",
    movieCertificate: "UA",
    language: "Hindi",
    path: "Movie/movie2.avif"
  },
  {
    name: "Article 370",
    movieCertificate: "UA",
    language: "Hindi",
    path: "Movie/movie3.avif"
  },
  {
    name: "Yodha",
    movieCertificate: "UA",
    language: "Hindi",
    path: "Movie/movie4.avif"
  },
  {
    name: "Imaginary",
    movieCertificate: "A",
    language: "English",
    path: "Movie/movie5.avif"
  },
  {
    name: "Bastar: The Naxal Story",
    movieCertificate: "A",
    language: "Hindi, Telugu",
    path: "Movie/movie6.avif"
  },
  {
    name: "Chabak - Night of Murder and Romance ",
    movieCertificate: "A",
    language: "Korean",
    path: "Movie/movie7.avif"
  },
  {
    name: "Teri Baaton Mein Aisa Uljha Jiya ",
    movieCertificate: "UA",
    language: "Hindi",
    path: "Movie/movie8.avif"
  },
  {
    name: "Ole Aale ",
    movieCertificate: "UA",
    language: "Marathi",
    path: "Movie/movie9.avif"
  },
  {
    name: "Morrya",
    movieCertificate: "UA",
    language: "Marathi",
    path: "Movie/movie10.avif"
  },
  {
    name: "Trailers Screening Show",
    movieCertificate: "UA",
    language: "Multi Language",
    path: "Movie/movie11.avif"
  },
  {
    name: "Dune: Part Two",
    movieCertificate: "UA",
    language: "English, Hindi",
    path: "Movie/movie12.avif"
  },
]
export const Movies = () => {
  // filters
  const data = [
    {
      title: "Language",
      buttons: ["Hindi", "Marathi"]
    },
    {
      title: "Generes",
      buttons: ["Hindi", "Marathi", "vnbn"]
    },
    {
      title: "Format",
      buttons: ["Hindi", "Marathi"]
    },
  ];
  // filters 
  const carsoulSlider = ["carsole1.avif", "carsole2.avif", "carasole6.avif", "carsoul4.avif", "courasole5.avif"]
  return (
    <section>
      <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} interval={4000} autoPlay>
        {carsoulSlider.map((ele, index) => {
          return <div key={index} className=' m_carousol p-2' style={{ height: "300px", width: "100%", }}>
            <img src={ele} className=' rounded-3' height={"100%"} width={"100%"} alt="" />
          </div>
        })}
      </Carousel>
      {/* filter and movies in regieon*/}
      <div className='container my-5'>
        <div className='row position-relative'>
          {/* filter */}
          <div className='col-12 col-md-3 ps-0 m_sticky'>
            <h4>Filters</h4>
            {data.map((value) => {
              return <Filter key={value.title} buttons={value.buttons} title={value.title} />
            })}
            <Button btnType="outLine" title={'Browse by Cinema'} />
          </div>
          {/* movies  */}
          <div className='col-12 col-md-9 '>
            {/* Applied filter div started  */}
            <div>
              <AppliedFilter
                title={"Movies in Bhokardan"}
                buttons={["Hindi", "English", "Marathi", "Telgu"]}
              />
            </div>
            {/* Applied filter div end  */}
            {/* Heading Baneer div started  */}
            <div>
              <HeaddingBanner title1={"Comming Soon"} title2={"Explore Upcoming Movies  "} />
            </div>
            {/* Heading Baneer div end */}

            {/* MyCard div started  */}
            <div className='row'>
              {MoviesInfo.map(value =>
                <div className='col-12  col-sm-6 col-lg-4 col-xl-3 mt-3'>
                  <MyCard {...value} />
                </div>
              )}
            </div>
            {/* <div className='col-12  col-sm-6 col-lg-4 col-xl-3 mt-3'>
              </div> */}
            {/* MyCard div end  */}
          </div>
        </div>
      </div>

    </section>
  )
}
