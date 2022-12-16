
import React, { useEffect, useState } from "react";
const MyBooking = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://tour-web-server-site.onrender.com/orders")
            .then((res) => res.json())
            .then((result) => setOrders(result));
    }, []);

    return (

        <div>
            <div className="row">
                {orders?.map((sv) => (
                    <div className="col-md-3 col-sm-12">
                        <div className="p-2 m-2 allservices">
                            <h6>Service Name :{sv.name}</h6>
                            <h6>Service Price :{sv.price}</h6>
                            <h6>Contact :{sv.number}</h6>
                            <h6>Possible Date :{sv.date}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MyBooking;