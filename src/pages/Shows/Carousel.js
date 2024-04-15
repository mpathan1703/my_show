import React from 'react'
import Flickity from 'react-flickity-component'
import { BannerCard } from './BannerCard'

const Carousel = () => {
  return (
  <Flickity>
    <BannerCard imgpath={"des-lap-sli-six.avif"} title={"Introducing an event management tool"} desc={"Experience the ease of event creation and publishing"}/>
    <BannerCard background= "#9E6D4C" imgpath={"des-sli-f.avif"} title={"Take advantage of our M-ticket feature"} desc={"Experience the ease of event creation and publishing"}/>
    <BannerCard background='#385434' imgpath={"sli-o.jpeg"} title={"Empower the artist within you"} desc={"List your own performances, gigs and more with BookMyShow"}/>
    <BannerCard background='#516C7A' imgpath={"des-sli-th.avif"} title={"Conduct workshops and much more"} desc={"Share your skills with people around the world - from home!"}/>
    <BannerCard background='#2C2B26' imgpath={"des-sli-fiv.avif"} title={"Ticket scanning made easy"} desc={"Experience the ease of managing entry at an event."}/>
  </Flickity>
  )
}

export default Carousel