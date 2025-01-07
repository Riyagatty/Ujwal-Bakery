import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
    const quantity = cartItems?.[id] || 0; // Default quantity to 0 if not in the cart

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={`${url}/images/${image}`} alt={name} />

                {/* Always display the counter */}
                <div className="food-item-counter">
                    <img
                        className={`counter-btn ${quantity === 0 ? 'disabled' : ''}`}
                        onClick={() => quantity > 0 && removeFromCart(id)}
                        src={assets.remove_icon_red}
                        alt="Remove"
                    />
                    <p className="item-quantity">{quantity}</p>
                    <img
                        className="counter-btn"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_green}
                        alt="Add"
                    />
                </div>
            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p className="food-item-name">{name}</p>
                    <img className="food-item-rating" src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">₹{price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
