import React from 'react';
import Camping from '../../Pages/Camping/Camping';
import Services from '../../Pages/Services/Services';
import Suggestions from '../../Pages/Suggestions/Suggestions'
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Suggestions></Suggestions>
            <Camping />
            <Services />
        </div>
    );
};

export default Home;