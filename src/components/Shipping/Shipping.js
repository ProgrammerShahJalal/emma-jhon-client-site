import React from 'react';
import './Shipping.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const saveCart = getStoredCart();
        data.order = saveCart;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order proceed successfully!');
                    clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true })} />
                <input placeholder="Your Email" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder="Your Address" {...register("address")} />
                <input placeholder="City" {...register("city", { required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;