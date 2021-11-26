
import React, { useEffect, useState } from "react";
const MyBooking = () => {
    const [service, setservice] = useState([]);
    useEffect(() => {
        fetch("https://warm-fortress-25095.herokuapp.com/orders")
            .then((res) => res.json())
            .then((result) => setservice(result));
    }, []);
    //DELETE A service
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ,you want to delete');
        if (proceed) {
            const url = `https://warm-fortress-25095.herokuapp.com/orders/${id}`;
            fetch(url, {
                mathod: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Sucessfully');
                        const remainingservices = service.filter(user => user._id !== id);
                        setservice(remainingservices);
                    }
                })
        }
    }
    console.log(service)

    return (
        <div>
            <div className="allservices d-flex justify-content-center align-items-center">
                <div className="row">
                    {service?.map((sv) => (
                        <div className="col-md-6 ">
                            <div className="service border border p-2 m-2">
                                <h1>{sv.name}</h1>
                                <h6>{sv.price}</h6>
                                <h6>{sv.description}</h6>
                                <button onClick={handleDelete} className="btn btn-danger p-1 m-2">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBooking;