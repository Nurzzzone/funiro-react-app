import React from 'react'
import 'aos/dist/aos.css';



class checkout extends React.Component {

  render() {
    return (
      <div className="checkout" data-aos="fade-up">
        <div className="container">
          <h1>Checkout Page</h1>
          <div className="checkout-empty">
            <h2 className="checkout-empty__title">Cart is empty</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default checkout;
