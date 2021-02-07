import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function CartPopup() {
  const [cartItems, setCartItems] = React.useState(null);

  const removeItem = () => {
    console.log(cartItems)
  }

  return (
    <div className="cart">
      <div className="cart-content">
        <ul className="cart-items">
          {cartItems && 
            cartItems
          }
        </ul>
        <div className="empty-cart empty-cart--active">
          <h2 className="empty-cart__title">Cart is empty</h2>
        </div>
        <div className="cart-footer">
          <div className="cart-price">
            <span className="cart-price-title">Total price:</span>
            <span className="cart-price-totalprice">Rp 0</span>
          </div>
          <Link to="/checkout" className="btn cart-checkout">Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default CartPopup
