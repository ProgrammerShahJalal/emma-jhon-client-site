import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className='header'>
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Orders Review</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
                {user.email && <span style={{ color: 'white', margin: '0px 20px' }}>Hello {user.displayName}</span>}
                {
                    user.email ?
                        <button onClick={logout}>Logout</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;