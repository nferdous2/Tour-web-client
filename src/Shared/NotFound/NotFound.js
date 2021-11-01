import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="nf-div">
            <img style={{ width: '50%' }} src={notfound} alt="" />
            <br />
            <div>
                <Link to="/"><button className="mt-3 nf-btn  justify-content-center align-items-center ms-5 ">Go Back</button>
                </Link>
            </div>
        </div >
    );
};

export default NotFound;