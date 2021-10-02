import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key  } = props.product;
    const {handleRemove} =props;
    return (
        <div className="product">
            {/* <div>
                <img src={img} alt="" />
            </div> */}
            <div>
                <h4>{name}</h4>
                <p className="product-name">Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={()=>handleRemove(key)} className="btn-regular">Remove item</button>
            </div>
        </div>
    );
};

export default ReviewItem;