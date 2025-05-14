import React from 'react'
import HeroSection from '../component/homepage/HeroSection'
import HeroPanel from '../component/homepage/HeroPanel'
import AboutUs from '../component/homepage/AboutUs'
import Faq from '../component/homepage/Faq'
import GetStarted from '../component/homepage/GetStarted'
import ServiceSection from '../component/homepage/ServiceSection'
import WorkVideo from '../component/homepage/WorkVideo'
import GetAQuoteSection from '../component/homepage/GetQuote'
import MapArea from '../component/homepage/MapArea'
import ReviewSection from '../component/homepage/ReviewSection'
import LeaveAReview from '../component/homepage/LeaveAReview'


function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroPanel />
      <AboutUs />
      <ServiceSection />
      <GetStarted />
      <GetAQuoteSection />
      <WorkVideo />
      <ReviewSection />
      <LeaveAReview />
      <Faq />
      <MapArea />
    </>
  )
}

export default HomePage