import React from 'react'
import "./Sports"
import { Filter } from '../../components/Filter/Filter'
import { AppliedFilter } from '../../components/Filter/AppliedFilter'
// import { HeaddingBanner } from '../../components/Banner/HeaddingBanner'
import { MyCard } from '../Card/MyCard'
import { Button } from '../../components/Buttons/Button'

const MoviesInfo = [
  {
    name: "Run for Equality - Get Medal by Courier",
    discription: "Your Place and Your Time: India",
    isNameSlice:false,
    movieCertificate: "5k ",
    language:"₹ 390",
    path: "Sports/et00342542-zqtwcjwpfs-portrait.avif"
  },
  {
    name: "Indian Premier League All Matches ",
    discription: "Multiple Venues",
    movieCertificate: "T20",
    language: "₹ 399 onwards",
    path: "Sports/et00354770-jucsbnxclu-portrait.avif"
  },
  {
    name: "Mon, 8 Apr Onwards",
    discription: " Mumbai City FC - ISL Season 2023/24",
    isDescriptionSlice:false,
    movieCertificate: "Multiple Venues",
    language: "₹ 199 onwards",
    path: "Sports/et00369062-uankacqvsk-portrait.avif"
  },
  {
    name: "Thu 8  Apr Onwards",
    discription: "ISL Season 2023-24 - CHENNAIYIN FC ( Chennai )",
    isDescriptionSlice:false,
    movieCertificate: "Multiple Venues Football",
    language: "₹ 150 onwards",
    path: "Sports/et00370015-mktpmlclmt-portrait.avif"
  },
  {
    name: "Mon 8  Apr ",
    discription: "Mumbai City FC vs Odisha FC",
    isDescriptionSlice:false,
    movieCertificate: " Football",
    language: "₹ 199 onwards",
    path: "Sports/et00385107-pdbsgpmdcs-portrait.avif"
  },
  {
    name: "Mon 1  Apr ",
    discription: "Mumbai Indians VS Rajasthan Royals",
    isDescriptionSlice:false,
    movieCertificate: "Wankhede Stadium: Mumbai Y20",
    language: "₹ 990 onwards",
    path: "Sports/et00388586-mwlcvfjcyq-portrait.avif"
  },
  {
    name: "Sat 30 Mar ",
    discription: "Lucknow Super Giants vs Punjab Kings",
    isDescriptionSlice:false,
    movieCertificate: "BRSABV Ekana Cricket Stadium: Lucknow T20",
    language: "₹ 399 onwards",
    path: "Sports/et00390973-rjymwypshw-portrait.avif"
  },
  {
    name: "Thu 28 Mar",
    discription: "Rajasthan Royals vs Delhi Capitals",
    isDescriptionSlice:false,
    movieCertificate: "Sawai Mansingh Stadium: Jaipur T20",
    language: "₹ 1200 onwards",
    path: "Sports/et00391082-lvtlfwqsew-portrait.avif"
  },
  {
    name: "Sun 7 Apr ",
    discription: "Lucknow Super Giants vs Gujarat Titans",
    isDescriptionSlice:false,
    movieCertificate: "BRSABV Ekana Cricket Stadium: Lucknow T20",
    language: "₹ 399 onwards",
    path: "Sports/et00390974-hplgngpfmb-portrait.avif"
  },
  {
    name: "Tue 26 Mar ",
    discription: "India vs Afghanistan - FIFA World Cup Qualifier 2026",
    isDescriptionSlice:false,
    movieCertificate: "Indira Gandhi Athletic Stadium: Guwahati Football",
    language: "₹ 200 onwards",
    path: "Sports/et00391563-jmavbyksrq-portrait.avif"
  },
  {
    name: "Mon 1 Jul ",
    discription: "21 Days Walking Challenge by Malsar.in",
    isDescriptionSlice:false,
    movieCertificate: "Your Place and Your Time: Mumbai Marathon",
    language: "₹ 149 onwards",
    path: "Sports/et00391704-vujkedywux-portrait.avif"
  },
  {
    name: "Fri 5 Apr Onwards ",
    discription: "Gujarat Polo Cup",
    isDescriptionSlice:false,
    movieCertificate: "Khyati Homes: Ahmedabad Polo",
    language: "₹ 1500 onwards",
    path: "Sports/et00391895-peuspwkdtd-portrait.avif"
  },
]
export const Sports = () => {
  const data = [
    {
      title: "Date",
      buttons: ["Today", "Tomarrow","This weekend"]
    },
    {
      title: "Categories",
      buttons: ["Cricket", "Football", "Running","Polo"]
    },
    {
      title: "More Filters",
      buttons: ["Outdoor Events", "IPL","Fast Filling","Kids Allowed"]
    },
    {
      title: " Price",
      buttons: ["Free","0-500","501-2000","Above 2000"]
    },
  ];
  return (
  <section className='m_sports'>
    <div className='m_sports_top py-3'>
      <div className="container">
        <div className='w-100 '>
            <img src="sports.avif" className='rounded-5' alt="" width={"100%"}/>
        </div>
      </div>
    </div>
    <div className='m_sports_bottom p-5 bg-light'>
    <div className='container my-5 '>
        <div className='row position-relative'>
          {/* filter */}
          <div className='col-12 col-md-3 ps-0 m_sticky'>
            <h4>Filters</h4>
            {data.map((value) => {
              return <Filter key={value.title} buttons={value.buttons} title={value.title} />
            })}
            <Button btnType="outLine" title={'Browse by Venues'} />
          </div>
          {/* movies  */}
          <div className='col-12 col-md-9 '>
            {/* Applied filter div started  */}
            <div>
              <AppliedFilter
                title={"Sports in Bhokardan"}
                buttons={["Cricket", "Football", "Running", "Polo"]}
              />
            </div>
            {/* Applied filter div end  */}
            {/* Heading Baneer div started  */}
            <div>
              {/* <HeaddingBanner title1={"Comming Soon"} title2={"Explore Upcoming Movies  "} /> */}
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
    </div>
  </section>
  )
}
