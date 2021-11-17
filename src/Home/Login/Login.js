import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInWithGoogle, handleOnSubmit, handleEmailChange, handlePasswordChange } = useAuth();

    return (
        <form className=" form-container mt-5" onSubmit={handleOnSubmit}>
            <h2 className="text-center">Please Log in</h2>

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


            <div className="text-center p-2">
                <p>or sign up with:</p>
                <button type="button" onClick={signInWithGoogle} className="btn btn-primary btn-floating mx-1">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                </button>
            </div>
            {/* <!-- Register buttons --> */}
            <div className="mb-3">
                <p className="text-white text-center ">Are You New User? </p>
                <Link to="/register">
                    <h5 className="text-white text-center text-decoration none mb-3">Please,Register</h5>
                </Link>
            </div>
        </form >
    );
};

export default Login;