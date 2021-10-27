import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let totalQuantity = 0;
    let shippingCost = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }

        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        shippingCost = shippingCost + product.shipping;
    }

    const tax = (total + shippingCost) * 0.10;
    const totalBeforeTax = total + shippingCost;
    const grandTotal = total + shippingCost + tax;
    return (
        <div>
            <h2>Order Summary</h2>
            <div>
                <p>Items Ordered: {totalQuantity}</p>
                <div>
                    <p><small>Items: {total.toFixed(2)}</small></p>
                    <p><small>Shipping and Handling: {shippingCost.toFixed(2)}</small></p>
                    <p><small>Total before tax: {totalBeforeTax.toFixed(2)}</small></p>
                    <p><small>Tax: {tax.toFixed(2)}</small></p>
                </div>
                <h3 id="grandTotal">Order Total: {grandTotal.toFixed(2)}</h3>
                <p>{props.children}</p>
            </div>
        </div>
    );
};

export default Cart;