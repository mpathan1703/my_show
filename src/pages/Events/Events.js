import React from 'react'
import { Filter } from '../../components/Filter/Filter';
import { AppliedFilter } from '../../components/Filter/AppliedFilter';
import { HeaddingBanner } from '../../components/Banner/HeaddingBanner';
import { MyCard } from '../Card/MyCard';
import { Button } from '../../components/Buttons/Button';
import "./Events.css"



const MoviesInfo = [
  {
    name: "CHAMAN CHATORA - Gaurav Kapoor`s Comedy Special",
    isNameSlice:false,
    movieCertificate:  "Stand up Comedy",
    language:"₹ 999 onwards",
    path: "Events/et00313122-jjeweppqsn-portrait.avif"
  },
  {
    name: "Ice N Fire's Holi ",
    movieCertificate: "Holi Celebrations",
    language: "₹ 300 onwards",
    path: "Events/et00391890-wprvmhdnef-portrait.avif"
  },
  {
    name: "Rang Barse - Holi Celebration with CARE ",
    discription: "Suyash Academy (Sports Complex): Pune",
    isDescriptionSlice:false,
    language: "₹ 100 onwards",
    path: "Events/et00391724-dzknxarpju-portrait.avif"
  },
  {
    name: "World Jazz Festival - Pune",
    discription:"Sakal Lalit Kalaghar : Pune",
    movieCertificate: "Concerts",
    language: "₹ 750 onwards",
    path: "Events/et00391249-zatnywaudq-portrait.avif"
  },
  {
    name: "Waters: Neon Holi",
    discription: "WATERS: Bar & Kitchen, Pune",
    movieCertificate:"Holi Celebrations",
    language: "₹ 199 onwards",
    path: "Events/et00391199-dczxlflpsn-portrait.avif"
  },
  {
    name: "Bollytec Holi At Unwind Pune",
    discription: "Unwind Lounge: Pune",
    movieCertificate: "Club Gigs",
    language: "₹ 499 onwards",
    path: "Events/et00391193-mgtvwrtyqb-portrait.avif"
  },
  {
    name: "HOLI BLOOM",
    discription: "Flock Balewadi - Cafe, Bar, Club: Pune",
    movieCertificate: "Holi Celebrations",
    language: "₹ 299",
    path: "Events/et00391168-lddwlwfjkp-portrait.avif"
  },
  {
    name: "COCO RANG 3.0 - BIGGEST PREMIUM COLORFEST IN PUNE",
    isNameSlice:false,
    discription: "Cocorico Smoke Bar and Kitchen: Pune",
    isDescriptionSlice:false,
    movieCertificate: "Holi Celebrations",
    language: "₹ 49 onwards",
    path: "Events/et00390716-zqgceyvlay-portrait.avif"
  },
  {
    name: "Satrangi Holi ",
    discription: "Escada All Day Kitchen and Bar: Pune",
    isDescriptionSlice:false,
    movieCertificate: "Club Gigs",
    language: "₹ 399",
    path: "Events/et00390616-wpdzfauxxa-portrait.avif"
  },
  {
    name: "Lai Bhari Holi 3.0",
    discription: "Diamond Water Park (Lohegaon): Pune",
    isDescriptionSlice:false,
    movieCertificate: "Holi Celebrations",
    language: "₹ 1199 onwards",
    path: "Events/et00390105-hbmaznnsez-portrait.avif"
  },
  {
    name: "Sunburn Holi Weekend Ft. Marshmello - Pune",
    discription: "Mahalakshmi Lawns - Cricket ground: Pune",
    isDescriptionSlice:false,
    movieCertificate: "Concerts ",
    language: "₹ 999 onwards",
    path: "Events/et00385753-bbgmyxzrmq-portrait.avif"
  },
  {
    name: "Techno Holi RIOT Ft Tim Taste",
    discription: "Unwind Lounge: Pune",
    isDescriptionSlice:false,
    movieCertificate: "Club Gigs ",
    language: "₹ 699 onwards",
    path: "Events/et00378299-fsdkttkhvq-portrait.avif"
  },
  {
    name: "Rajkumari by Nayab Midha - A Poetry Special",
    isNameSlice:false,
    discription: "Venue To Be Announced: Pune",
    isDescriptionSlice:false,
    movieCertificate: "Stand up Comedy ",
    language: "₹ 499 onwards",
    path: "Events/et00382149-mxyruunmuq-portrait.avif"
  },
  {
    name: "Late Night Comedy Show @ Balewadi",
    isNameSlice:false,
    discription: "The Comedy Clubhouse: Balewadi",
    isDescriptionSlice:false,
    movieCertificate: "Stand up Comedy ",
    language: "₹ 149 onwards",
    path: "Events/et00341250-bzblmceqze-portrait.avif"
  },
  {
    name: "Ayushawar Bolu Kahi - Pune ",
    isNameSlice:false,
    discription: "Yashwantrao Chavan Natyagruha: Pune",
    isDescriptionSlice:false,
    movieCertificate: "Poetry ",
    language: "₹ 400 onwards",
    path: "Events/et00362502-lvlqzmpelx-portrait.avif"
  },
  {
    name: "Aho Nadach Khula",
    isNameSlice:false,
    discription: "Pandit Bhimsen Joshi Kalamandir: Aundh, Pune",
    isDescriptionSlice:false,
    movieCertificate: "Dance ",
    language: "₹ 500 ",
    path: "Events/et00319016-gsvjaaevxf-portrait.avif"
  },
  {
    name: "Kal Ki Chinta Nahi Karta ft. Ravi Gupta",
    isNameSlice:false,
    discription: "The KOPA: Pune",
    isDescriptionSlice:false,
    movieCertificate: "Comedy Shows ",
    language: "₹499 onwards ",
    path: "Events/et00329412-qlfczlezbk-portrait.avif"
  },
  {
    name: "TQC Stand Up Sessions ",
    isNameSlice:false,
    discription: "TQC, Viman Nagar: Pune",
    isDescriptionSlice:false,
    movieCertificate: "Stand up Comedy",
    language: "FREE ",
    path: "Events/et00358544-xplggwmgts-portrait.avif"
  },
 
 
  
  
  
]

export const Events = () => {
  const data = [
    {
      title: "Date",
      buttons: ["Today", "Tomarrow","This weekend"]
    },
    {
      title: "Language",
      buttons: ["Hindi", "Marathi", "Hinglish","Punjabi","Telugu","Kannada","Bengali","Malayalam","Tamil","Gujarati","Odia","Urdu"]
    },
    {
      title: "Categories",
      buttons: ["Hindi", "Marathi"]
    },
    {
      title: "More Filters",
      buttons: ["Outdoor Events", "Fast Filling","Online Streaming","Must Attend","Unmissable Events","Kids Allowed","Offers for you","kids Activities"]
    },
    {
      title: " Price",
      buttons: ["Free","0-500","501-2000","Above 2000"]
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
                title={"Events"}
                buttons={["TOday", "Tomorrow", "This Weekend", "Comedy Shows","Workshops","Music Shows","Holi Celebrations","Online Streaming Events","Performances","Kids","Exhibitions","Conferences","Screening"]}
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
