import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, price, stock, star, features } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <div className="product-info">
                    <div>
                        <p>by: {seller}</p>
                        <p><b>${price}</b></p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'>{element} add to cart</button>
                    </div>
                    <div>
                        <p><Rating
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly></Rating></p>
                        <h4>Features</h4>
                        {
                            features.map(feature => <li>{feature.description} {feature.value}</li>)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Product;