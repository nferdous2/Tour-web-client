import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="banner-container  d-flex justify-content-center align-items-center">
                <div className="banner-div mx-auto justify-content-center align-items-center">
                    <h2 className="text">Take a short break from your busy life and spend time with yourself</h2>
                    <h4 className="text"> Enjoy the beauty of nature</h4>
                    <button className="banner-btn p-3">
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;