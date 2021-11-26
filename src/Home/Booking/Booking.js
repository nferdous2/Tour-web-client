import React, { useState } from 'react';
import useAuth from '../..//hooks/useAuth'
import { Link, useParams } from 'react-router-dom';
const Booking = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [date, setDate] = useState("");
    const { user } = useAuth();
    const { id } = useParams()
    //user name    
    const handleName = (e) => {
        setName(e.target.value);
    };
    //user email
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    //address
    const handleAddress = (e) => {
        setAddress(e.target.value);
    };
    //phoneNumber
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };
    //date
    const handleDate = (e) => {
        setDate(e.target.value)
    }//handleService
    const handleService = (e) => {
        setServiceName(e.target.value)
    }
    //input
    const handleAdd = () => {
        console.log({ name, email, address, phoneNumber, serviceName, date });
        const data = { name, email, address, phoneNumber, serviceName, date };
        const proceed = window.confirm('Are you sure ,you want to Book');
        if (proceed) {
            fetch("https://warm-fortress-25095.herokuapp.com/orders", {

                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((result) => console.log(result));
        }
    };

    return (
        <div >
            <form className=" form-container mt-5">
                <h2 className="text-center">My Booking</h2>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4 p-2">
                    {user.displayName}
                    <input type="text" name="" id="" className="form-control" placeholder="User Name" onChange={handleName} />
                </div>
                <div className="form-outline mb-4 p-2">
                    {user.email}
                    <input type="email" id="form3Example3" className="form-control text-bold" placeholder="Your Email" onChange={handleEmail} />
                </div>
                <div className="form-outline mb-4 p-2">
                    {id.name}
                    <input type="text" name="" id="" className="form-control" placeholder="Service name" onChange={handleService} />
                </div>
                <div className="form-outline mb-4 p-2">
                    <input type="number" name="" id="" className="form-control" placeholder="Give Your PhoneNumber" onChange={handlePhoneNumber} />
                </div>
                <div className="form-outline mb-4 p-2">
                    <p>when will you come</p>
                    <input type="date" name="" id="" onChange={handleDate} />
                </div>
                <br />
                <br />

                <button onClick={handleAdd} className="btn btn-success mt-3">
                    Add
                </button>
            </form >

        </div>
    );
};
export default Booking;