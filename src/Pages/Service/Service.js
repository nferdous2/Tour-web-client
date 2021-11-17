import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, name, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn-service p-2">Book{name.toLowerCase()}</button>
            </Link>


        </div>
    );
};

export default Service;