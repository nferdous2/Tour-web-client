import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Add.css';

const Add = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://tour-web-server-site.onrender.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }

            })
    }

    return (
        <div className='p-3 mt-2 d-flex justify-content-center '>
            <form onSubmit={handleSubmit(onSubmit)} className="adds p-3">
                <h2>Add <span className='title'>A</span> Service</h2>
                <h5><span className='title'>Service</span> Image</h5>
                <input {...register("img")} placeholder="Service Img Url" required />
                <h5>Service <span className='title'>Name</span></h5>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Service name' required />
                <h5><span className='title'>Service</span> Description</h5>
                <input {...register("description")} placeholder="Description" required />
                <h5><span className='title'>P</span>rice</h5>
                <input {...register("price")} placeholder="Price" required />
                <input type="submit" value='Add Service' className='m-3' />
            </form>
        </div>
    );
};

export default Add;