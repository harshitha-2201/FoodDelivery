import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets'; // Import assets correctly

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const itemCount = cartItems[id] || 0;

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img src={image} alt="" className='food-item-img' />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt=""
            className='add'
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className='food-item-counter'>
            <img
              src={assets.remove_icon_red}
              alt=''
              onClick={() => removeFromCart(id)}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt=''
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className='food-item-info '>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='Rating' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
