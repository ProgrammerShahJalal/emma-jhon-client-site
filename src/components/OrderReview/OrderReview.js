import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {

    const [cart, setCart] = useCart();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    const history = useHistory();

    const handleProccedToShipping = () => {
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem key={product.key} handleRemove={handleRemove} product={product}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleProccedToShipping} className='btn-regular'>Procced to shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;