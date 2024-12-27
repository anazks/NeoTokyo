import React from 'react'
import NavBar from '../components/user/NavBar/NavBar'
import Quick from '../components/user/QuickPiks/Quick'
import Gaming from '../components/user/GamingR1/Gaming'
import FeedBack from '../components/user/FeedBack/FeedBack'
import AboutUs from '../components/user/AboutUs/AboutUs'
import Quality from '../components/user/AboutUs/Quality'
import Directional from '../components/user/AboutUs/Directional'
import Footer from '../components/user/Footer/Footer'

function Home() {
  return (
    <div>
         <NavBar/>
        <Quick/>
        <Gaming/>
        <FeedBack/>
        <AboutUs/>
        <Quality/>
        <Directional/>
        <Footer/>
    </div>
  )
}

export default Home
