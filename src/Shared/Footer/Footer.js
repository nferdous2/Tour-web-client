
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer mt-3">
                <div className="left-container">
                    <div className="row p-3">
                        <div className="col-md-5 ">
                            <h2>Plan Your Tour</h2>
                            {/* icons use */}
                            <div className="icons-container d-flex ">
                                <div className="icons">
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </div>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                </div>
                                <div className="icons">
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                </div>
                            </div>

                            <p className="mt-3">
                                <small> ©  All rights reserved.</small>
                            </p>
                        </div>
                        {/* menu */}
                        <div className="col-md-2">
                            <div className="footer-menu">
                                <ul>
                                    <li className="footer-list">Home</li>
                                    <li className="footer-list"> About us</li>
                                    <li className="footer-list">Services</li>
                                    <li className="footer-list">Contact us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            {/* left container */}
                            <div className="right-container">
                                <h3>Sign up</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex mt-4">
                                    <div className="icons">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>01912313234</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;