import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='form'>
            <div>
                <h2>Register: Create Your Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Enter password" />
                    <br />
                    <input type="password" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account?</p>
                <Link to='/login'>Login</Link>
                <div>---------------or-----------------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;