import React from 'react'
import HeroSection from '../component/homepage/HeroSection'
import HeroPanel from '../component/homepage/HeroPanel'
import AboutUs from '../component/homepage/AboutUs'
import Faq from '../component/homepage/Faq'
import GetStarted from '../component/homepage/GetStarted'
import ServiceSection from '../component/homepage/ServiceSection'
import WorkVideo from '../component/homepage/WorkVideo'
import GetAQuoteSection from '../component/homepage/GetQuote'


function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroPanel />
      <AboutUs />
      <ServiceSection />
      <GetStarted />
      <WorkVideo />
      <GetAQuoteSection />
      <Faq />
    </>
  )
}

export default HomePage