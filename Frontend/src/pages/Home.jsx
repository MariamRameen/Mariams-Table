import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import About from '../components/About.jsx'
import Qualities from '../components/qualities.jsx'
import WhoAreWe from '../components/WhoAreWe.jsx'
import Reservation from '../components/Reservation.jsx'
import Menu from '../components/Menu.jsx'
import Team from '../components/Team.jsx'
import Footer from '../components/Footer.jsx'


const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    <Footer/>
    </>
    
  )
}

export default Home