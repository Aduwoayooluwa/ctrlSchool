import React from 'react'
import Footer from '../layout/Footer'
import Hero from './landing/Hero'
import Cards from './landing/Cards'
import WhoWeAre from './landing/WhoWeAre'
import Banner from '../components/banner/Banner'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <Hero />
            <Cards />
            <WhoWeAre />
            <Banner />
        </div>
    )
}

export default Home