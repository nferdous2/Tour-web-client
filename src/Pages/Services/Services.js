import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://warm-fortress-25095.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services p-3">
            <h2 className="fs-2 text-center">Our<span className="title"> services </span>offered <span className="title">To</span> you</h2>
            <Row xs={1} md={3} className=" gx-4 gy-5 pt-3 px-5">
                {

                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)}
            </Row>
        </div>
    );
};

export default Services;