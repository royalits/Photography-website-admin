import React from 'react'
import Header from '../components/landingpagecomp/Header'
import HeroSection from '../components/landingpagecomp/HeroSection'
import Service from '../components/landingpagecomp/Service'
import HowItWorks from '../components/landingpagecomp/HowItWorks'
import ForVisionaries from '../components/landingpagecomp/ForVisionaries'
import Testimonials from '../components/landingpagecomp/Testimonials'
import Footer from '../components/landingpagecomp/Footer'

function LandingPage() {
  return (
    <div>
      <Header />
      <HeroSection id="home" />
      <div id="services"><Service /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="professionals"><ForVisionaries /></div>
      <div id="testimonials"><Testimonials /></div>
      <Footer />
    </div>
  )
}

export default LandingPage
