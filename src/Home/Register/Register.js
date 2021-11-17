import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { handleOnSubmit, handleEmailChange, handlePasswordChange } = useAuth();

    return (
        <form className=" form-container mt-5" onSubmit={handleOnSubmit}>
            <h2 className="text-center">Please Register</h2>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4 p-2">
                <input type="email" id="form3Example3" className="form-control" onChange={handleEmailChange} />
                <label className="form-label" for="form3Example3">Email address</label>
            </div>
            {/* <!-- Password input --> */}
            <div className="form-outline mb-4 p-2">
                <input type="password" id="form3Example4" className="form-control" onChange={handlePasswordChange} />
                <label className="form-label" for="form3Example4">Password</label>
            </div>

            {/* <!-- Submit button --> */}
            <Link to="/">
                <button type="submit" className="btn btn-primary btn-block mb-2 mx-2" >Sign up </button>
            </Link>
        </form >
    );
};

export default Login;