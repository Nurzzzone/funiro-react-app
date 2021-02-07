import React from 'react';

import { Button } from './index';

const Products = ({ items, click }) => {
  return (
    <div className="products__items">
      {
        items.map(function(elem) {
          return (
            <div className="product" key={ elem.id }>
              <img className="product-img" src="./assets/images/product-img.jpg" alt="product"/>
              <div className="product-body">
                <h5 className="product-title">{ elem.title }</h5>
                <small className="product-subtitle">{ elem.description }</small>
                <div className="product-price">
                  <p className="product-price-new">{ elem.price } Rp</p>
                  <p className="product-price-old">3 500 000 Rp</p>
                </div>
              </div>
              {elem.sale && 
                <div className="product-sale product-sale--sale">
                  <span className="product-sale__text">{ elem.sale }</span>
                </div>
              }
              <div className="product__overlay">
                <div className="product__overlay-content">
                  <Button 
                    buttonClass={{firstClass: 'add', secondClass: 'product__overlay-btn-one'}}
                    title="Add to cart"
                  />
                  <div className="product__overlay-btn-box">
                    <button  
                    className="btn product__overlay-btn-two">
                      {/* <svg width="24" height="24">
                        <use xlink:href="./assets/icons/sprite.svg#share"></use>
                      </svg> */}
                      <span>Share</span>
                    </button>
                    <button className="btn product__overlay-btn-two">
                      {/* <svg width="24" height="24" stroke="#ffffff">
                        <use xlink:href="./assets/icons/sprite.svg#heart"></use>
                      </svg> */}
                      <span>Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products
