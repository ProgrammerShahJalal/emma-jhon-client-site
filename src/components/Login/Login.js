import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    console.log('came from', location.state?.from);

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className='form'>
            <div>
                {user.email ?
                    <h2>Welcome {user.displayName}</h2>
                    :
                    <h2>Please login</h2>}
                <form onSubmit="">
                    <input type="email" name="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" placeholder="Create a new password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Emma Jhon Website?</p>
                <Link to='register'>Create Account</Link>
                <div>---------------or----------------</div>
                <button className='btn-regular' onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;