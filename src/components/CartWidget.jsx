import React from 'react';
import './CartWidget.css'; 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart cart-icon"></i>
      <span className="cart-notification">5</span> {}
    </div>
  );
};

export default CartWidget;