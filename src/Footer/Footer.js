import React from 'react'
import "./Footer.css"
import { Navigation } from './Navigation'
import { ContactToday } from './ContactToday'
import { Services } from './Services'
import { MenuLinks } from './MenuLinks'
import { SocialLinks } from './SocialLinks'
import { Discription } from './Discription'

export const Footer = () => {
  return (
  <footer>
    <Navigation/>
    <Discription/>
    <ContactToday/>
    <Services/>
    <MenuLinks/>
    <SocialLinks/>
  </footer>
  )
}
