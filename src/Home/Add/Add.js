import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Add.css';

const Add = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://git.heroku.com/possessed-witch-03161.git/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }

            })
    }

    return (
        <div className="add">
            <h2 className="text-center">Please Book</h2>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-outline mt-3 mb-4 p-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea className="form-outline mb-4 p-2"{...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="image url" />
                <input className="submit-btn mt-3" type="submit" />
            </form>
        </div>
    );
};

export default Add;