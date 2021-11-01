import React from 'react';
import Services from '../../Pages/Services/Services';
import Suggestions from '../../Pages/Suggestions/Suggestions'

const Home = () => {
    return (
        <div>
            <Suggestions></Suggestions>
            <Services />
        </div>
    );
};

export default Home;