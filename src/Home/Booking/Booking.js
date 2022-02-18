
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../..//hooks/useAuth';
const Booking = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const { user } = useAuth();


    const onSubmit = data => {
        console.log(data);

        axios.post('https://warm-fortress-25095.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order place successfully');
                    reset();
                }

            })
    }

    return (
        <div className="p-3 mt-2 d-flex justify-content-center col-sm-6 col-md-12 ">
            <form onSubmit={handleSubmit(onSubmit)} className=" adds p-3">
                <h2>Confirm<span className='title'> Booking</span></h2>
                <h5><span className='title'>Your</span> Name: {user.displayName}</h5>
                <h5>Your <span className='title'>Email</span>: {user.email}</h5>
                <h5><span className='title'>Service</span> ID:{id}</h5>
                <h5>Service <span className='title'>Name</span></h5>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Service name' required />
                <h5>Service <span className='title'>Price</span></h5>
                <input {...register("price")} placeholder="Service Price" required />
                <h5>Your <span className='title'>Phone</span></h5>
                <input {...register("number")} placeholder="Your Number" required />
                <div className="form-outline">
                    <h6>When will you come</h6>
                    <input {...register("date")} type="date" placeholder="Date" required />
                </div>
                <input type="submit" value='Add Service' className='m-3' />
            </form>
        </div>
    );
};

export default Booking;