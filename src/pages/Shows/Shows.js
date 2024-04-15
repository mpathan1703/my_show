import React from 'react'
import Carousel from './Carousel'
import "./Shows.css"
import ShowsCard from './ShowsCard'
import Testimonial from './Testimonial'
// creating a function for mainshwos card heading

function ShowsMainText({ title, desc, width = 75 }) {
  return (
    <div className='text-center'>
      <h1 className='fw-bold'>{title}</h1>
      <p style={{ width: `${width}` }} className='mx-auto mt-2'>{desc}</p>
    </div>
  )
}
export const Shows = () => {
  const cardData = [
    {
      img: "ListYourShows/perf.avif",
      title: "performence",
    },
    {
      img: "ListYourShows/experiencess.avif",
      title: "Experiences",
    },
    {
      img: "ListYourShows/expositionss.png",
      title: "Exposition",
    },
    {
      img: "ListYourShows/partiess.avif",
      title: "Parties",
    },
    {
      img: "ListYourShows/sport.avif",
      title: "Sports",
    },
    {
      img: "ListYourShows/conferencess.avif",
      title: "Conferences",
    },
  ];
  const cardData2 = [
    {
      img: "ListYourShows/online-saless.avif",
      title: "Online Sales & Marketing"
    },
    {
      img: "ListYourShows/pricings.avif",
      title: "Pricing"
    },
    {
      img: "ListYourShows/food.avif",
      title: "Food & beverages, stalls and the works!"
    },
    {
      img: "ListYourShows/on-ground-support.avif",
      title: "On ground support & gate entry management"
    },
    {
      img: "ListYourShows/report.avif",
      title: "Reports & business insights"
    },
    {
      img: "ListYourShows/rfids.avif",
      title: "POS, RFID, Turnstiles & more..."
    },
  ]
  return (
    <section className='m_shows'>
      <div className='my-4'>
        <Carousel />
      </div>
      {/* cards */}
      <div className='m_card_wrapper bg-white'>
        <div className='m_shows_container mx-auto' style={{ marginTop: 50 }}>
          <ShowsMainText
            title={"What can you host?"}
            desc={"As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host."}
          />

          <div className='row '>
            {cardData.map((card, index) => {
              return <div key={index} className='col-12 col-md-4 mt-5'>
                <ShowsCard background="#ECF5FF" {...card} />
              </div>
            })}
            <div className='text-center mt-5'>
              <button style={{ padding: "12px 180px" }} className='btn btn-sm m_bg_pinkish text-white m_sign_in px-3 border-0'>List Your Show</button>
            </div>
          </div>
          <div className='m_shows_container mx-auto' style={{ marginTop: 150 }}>
            <ShowsMainText title={"What are the services we offer?"}
              desc={"After successful collaborations with the best event organisers over the past decade and a half, we’re well equipped to bring your vision to life."} />
            <div className='row'>
              {cardData2.map((card, index) => {
                return <div key={index} className='col-12 col-md-4 mt-5'>
                  <ShowsCard background="#FCF1F1" {...card} />
                </div>
              })}
              <p className='my-3 mx-auto text-center m_h13' style={{ width: "95%" }}>
                Apart form these must haves for any event, we also support a host of other services like SEO for your event, custom pricing for your tickets and this and also this.
              </p>
              <div className='text-center mt-5'>
                <button style={{ padding: "12px 180px" }} className='btn btn-sm m_bg_pinkish text-white m_sign_in px-3 border-0'>List Your Show</button>
              </div>
            </div>
          </div>
        </div>
        {/* testimonials */}
        <Testimonial />
        <div  style={{ width:"40%",background:"url(ListYourShows/security-imag.avif)"}} className='mx-auto m_security'>
          <ShowsMainText width={100} title={"Sit back and watch your event come to life"} desc={"Events maybe all fun and games, but we take it seriously. We ensure our customer’s security so that you don’t have to."}/>
        </div>
      </div>

    </section>
  )
}

