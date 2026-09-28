import React from "react";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, clearCart } = React.useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getTotalCartAmount() === 0) {
      navigate("/cart");
      return;
    }
    clearCart();
    navigate("/orderPlaced");
  };

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className='place-order-left'>
        <p className='place-order-title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name' required />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='email' placeholder='Email address' required />
        <input type='text' placeholder='Street' required />
        <div className='multi-fields'>
          <input type='text' placeholder='City' required />
          <input type='text' placeholder='State' required />
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code' required />
          <input type='text' placeholder='Country' required />
        </div>
        <input type='tel' placeholder='Phone' required />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
            <hr />
          </div>
          <button type='submit'>Click here to order</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
