import React from 'react'
import { MyCard } from '../Card/MyCard'
import { HeaddingBanner } from '../../components/Banner/HeaddingBanner'
import { AppliedFilter } from '../../components/Filter/AppliedFilter'
import { Button } from '../../components/Buttons/Button'
import { Filter } from '../../components/Filter/Filter'



const MoviesInfo = [
  {
    name: "Wet n Joy Waterpark & Amusement Park",
    discription: "Wet N Joy Water Park: Lonavala",
    isNameSlice: false,
    movieCertificate: "Water parks ",
    language: "₹ 884 Onwords",
    path: "Activities/et00370823-ddjsnduucu-portrait.avif"
  },
  {
    name: "Imagicaa Water Park",
    discription: "Imagica Water Park (Khopoli): Mumbai",
    isNameSlice: false,
    movieCertificate: "Theme parks ",
    language: "₹ 796 Onwords",
    path: "Activities/et00310275-htyctjdhft-portrait.avif"
  },
  {
    name: "Imagicaa Water Park",
    discription: "Imagica Water Park (Khopoli): Mumbai",
    isNameSlice: false,
    movieCertificate: "Theme parks ",
    language: "₹ 664 Onwords",
    path: "Activities/et00014607-mtjmuusqlc-portrait.avif"
  },
  {
    name: "Wet n Joy Holi Party 2024",
    discription: "Wet N Joy Water Park: Lonavala",
    isNameSlice: false,
    movieCertificate: "Water parks ",
    language: "₹ 1226 Onwords",
    path: "Activities/et00388386-cxexrcjgkx-portrait.avif"
  },
  {
    name: "Sai Teerth Theme Park",
    discription: "Sai Teerth Devotional Theme Park: Shirdi",
    isNameSlice: false,
    movieCertificate: "Theme parks ",
    language: "₹ 412 Onwords",
    path: "Activities/et00372126-pvwefbuwek-portrait.avif"
  },
  {
    name: "Alibaug Beach Camping - LiveB4YouDie",
    discription: "Meeting Point: Mandwa Jetty Parking Lot",
    isNameSlice: false,
    movieCertificate: "Camping",
    language: "₹ 1199 Onwords",
    path: "Activities/et00317482-fdczjxskst-portrait.avif"
  },
  {
    name: "Kalsubai Night Trek",
    discription: "Meeting Point: Kasara Railway Station",
    isNameSlice: false,
    movieCertificate: "Trekking",
    language: "₹ 599 Onwords",
    path: "Activities/et00319268-vbepsbzvxu-portrait.avif"
  },
  {
    name: "Della Sky Garden",
    discription: "Della Adventure Park: Lonavala",
    isNameSlice: false,
    movieCertificate: "Buffet",
    language: "₹ 3540 Onwords",
    path: "Activities/et00376631-syedpwhgxe-portrait.avif"
  },
  {
    name: "Meher Retreat - Day Picnic",
    discription: "Meher Retreat: Pune",
    isNameSlice: false,
    movieCertificate: "Resorts",
    language: "₹ 590 Onwords",
    path: "Activities/et00064007-swmyvqcygy-portrait.avif"
  },
  {
    name: "Mumbai Filmcity Tour with Bollywood Park",
    discription: "Gate No.1, Dadasaheb Phalke Chitranagri: Mumbai",
    isNameSlice: false,
    movieCertificate: "Theme parks",
    language: "₹ 1099 Onwords",
    path: "Activities/et00022344-xuzxbqsyln-portrait.avif"
  },
  {
    name: "The Hidden Hour - Escape Games",
    discription: "The Hidden Hour - Escape Games",
    isNameSlice: false,
    movieCertificate: "Multiple Venues",
    language: "₹ 400 Onwords",
    path: "Activities/et00135510-gsffvjdgag-portrait.avif"
  },
  {
    name: "Imagicaa - A Themed Entertainment Destination",
    discription: "Multiple Venues",
    isNameSlice: false,
    movieCertificate: "Theme parks",
    language: "₹ 664 Onwords",
    path: "Activities/et00136913-qcpgxbhuuq-portrait.avif"
  },
]
export const Activities = () => {
  const data = [
    {
      title: "Date",
      buttons: ["Today", "Tomarrow", "This weekend"]
    },
    {
      title: "Categories",
      buttons: ["Amusement Parks", "Adventure", "Tourist Attractions", "Food and Drinks", "Food and Drinks", "Gaming", "Holi Parties", "Unique Tours"]
    },
    {
      title: "More Filters",
      buttons: ["Outdoor Events", "Kids Allowed", "Kids Activities", "Online Streaming"]
    },
    {
      title: " Price",
      buttons: ["Free", "0-500", "501-2000", "Above 2000"]
    },
  ];
  return (
    <section>
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
                title={"Activities in Bhokardan"}
                buttons={["Amusement Parks", "Adventure", "Tourist Attractions", "Food and Drinks", "Gaming", "Holi Parties", "Unique Tours"]}
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
