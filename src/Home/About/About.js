import React from 'react';
import about from '../../images/About.jpg'
const About = () => {
    return (
        <div id="about">

            <div class="about-section card m-3 p-4" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={about} className="rounded-end about-img w-75" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body about-container ">
                            <h4 className="card-title">About Us</h4>
                            <p className="card-text">
                                Whether you are deciding on where you want to go, to begin with, or you need to find the place places to stay once you get there, plan your tour site is your ultimate resource for making travel plans. With hundreds of the best plans in one convenient location, never again will you have to wonder if you are finding the best deals on travel sites for flights, travel sites for rental cars, or travel sites for hotels.We give ideas to our visitors,and make easy to decide the perfect place for their vacations.You will find nothing but the best place for your travel here.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;