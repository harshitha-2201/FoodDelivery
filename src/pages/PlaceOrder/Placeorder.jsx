import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/StoreContext";

const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Deliverhy Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="FirstName" />
          <input type="text" placeholder="LastName" />
        </div>
        <input type="Email" placeholder="Email Address" />
        <input type="text" placeholder="street" />
        <div className="multi-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone number" />

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Deliverhy Fee</p>
                <p>${getTotalCartAmount()===0?0:2 }</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>$ {getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
              </div>
            </div>
            <button >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
