import React from "react";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount } = React.useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity()) {
      navigate("/orderPlaced");
    } else {
      form.reportValidity();
    }
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-feilds">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-feilds">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="text" placeholder="Phone" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
            <hr />
          </div>
          <button type="submit">Click here to order</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
