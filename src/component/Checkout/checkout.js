import React from "react";
import "./checkout.css";

export default function checkout() {
  return (
    <>
      <div className="main-page">
        <div className="checkout-page">
          <div className="checkout-content">
            <div className="checkout-heading">
              <h1 className="checkout-leading">Guest Checkout</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-shipping">
        <div className="checkout-shippingInfo">
          <h3 className="checkout-shippingInfo-title">
            SHIPPING INFORMATION
          </h3>
          <div className="checkout-shippingInfo-wrapper">
            <form className="checkout-shippingInfo-guest">
              <div className="guestForm-email">
                <div className="guestForm-field">
                  <label className="guestForm-fieldLabel">
                    Email
                  </label>
                  <span className="guestForm-field">
                    <input className="guestForm-input"/>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
