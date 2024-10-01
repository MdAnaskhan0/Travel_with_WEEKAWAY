import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import Hero from './Hero'
import Activities from './Activities'
import Booking from './Booking'
import Gallery from './Gallery'
import Contact from './Contact'


const Layout = ({ Children }) => {
    return (
        <div>
            <Header />
            <Navbar />
            <Hero />
            <Activities/>
            <Booking />
            <Gallery />
            <Contact />
            <Footer />

        </div>
    )
}

export default Layout
