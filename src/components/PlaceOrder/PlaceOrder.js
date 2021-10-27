import React from 'react';
import './PlaceOrder.css';
import img from '../../images/placeorder.gif';

const PlaceOrder = () => {
    return (
        <div className='place-order'>
            <h2>This is place order page.</h2>
            <img className='fluid' src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;