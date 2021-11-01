import React from 'react';
import Camping from '../../Pages/Camping/Camping';
import Services from '../../Pages/Services/Services';
import Suggestions from '../../Pages/Suggestions/Suggestions'

const Home = () => {
    return (
        <div>
            <Suggestions></Suggestions>
            <Camping />
            <Services />
        </div>
    );
};

export default Home;