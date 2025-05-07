import React from 'react'
import HeroSection from '../component/homepage/HeroSection'
import HeroPanel from '../component/homepage/HeroPanel'
import AboutUs from '../component/homepage/AboutUs'
import Faq from '../component/homepage/Faq'


function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroPanel />
      <AboutUs />
      <Faq />
    </>
  )
}

export default HomePage