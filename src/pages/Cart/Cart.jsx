import React, { useContext } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';  // Import useHistory instead of useNavigate
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();  // Use useHistory for navigation

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
           <p>Items</p>
           <p>Title</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>Remove</p>
        </div>
        <br/>
        <hr/>

        {food_list.map((item,index) => {
          if(cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-item-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>X</p>
                </div>
                <hr/>
              </div>
            );
          }
        })}

      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2 }</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p> $ {getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={() =>navigate('/order')}>PROCEED TO CHECKOUT</button>  {/* Use onClick and history.push for navigation */}
        </div>
        <div className="cart-promo">
          <div>
            <p>If you have any Promo Code, enter it here</p>
            <div className="cart-promo-input">
              <input type='text' placeholder='Enter here' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
