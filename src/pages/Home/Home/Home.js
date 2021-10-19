import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HeroSection></HeroSection>
            <Features></Features>
            <Services></Services>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;