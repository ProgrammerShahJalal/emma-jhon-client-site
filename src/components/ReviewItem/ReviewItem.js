import React from 'react';
import Rating from 'react-rating';

const ReviewItem = (props) => {
    const { name, price, quantity, star, img, key } = props.product;
    const { handleRemove } = props;

    return (
        <div>
            <div className="review">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly></Rating>
                    <p><b>Price: ${price}</b></p>
                    <p><b>Quantity: {quantity}</b></p>
                </div>
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <button onClick={() => handleRemove(key)} className='btn-regular'>Remove</button>
            </div>
            <br />
            <hr />
        </div>
    );
};

export default ReviewItem;