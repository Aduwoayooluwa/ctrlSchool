import React from 'react'
import Footer from '../layout/Footer'
import Hero from './landing/Hero'
import Cards from './landing/Cards'
import WhoWeAre from './landing/WhoWeAre'
import Banner from '../components/banner/Banner'
import FAQ from './landing/FAQ'
import WhyUs from './landing/WhyUs'
import TechStackCarousel from './landing/Stacks'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <Hero />
            <Cards />
            <WhoWeAre />
            <TechStackCarousel />
            <WhyUs />
            <FAQ />
            <Banner />
        </div>
    )
}

export default Home