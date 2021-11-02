import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const MyBooking = () => {
    const { _id } = useParams();
    const [bookings, setBookings] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/services/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, []);
    return (
        <div>
            <h5>ID: {_id}</h5>
            <h3>{bookings.img}</h3>
            <p>Name:{bookings.name}</p>
            <p>Description:{bookings.description}</p>
            <Link to="/delete">
                <button className="btn btn-primary btn-block mb-2 mx-2">Back</button>
            </Link>
        </div>
    );
};

export default MyBooking;