import React from 'react';

import './ProductInfo.scss';

function ProductInfo() {
  return (
    <div className="product-info">
      <div className="product-info__product-image product-image">
        <img src="/assets/product-image.jpg" width="100%" alt=""/>
      </div>
      <div className="product-info__product-description product-description">
        <div className="product-description__subscription subscription">
          <span className="subscription__title">Monthly subscription</span>
          <span className="subscription__value">$14.95</span>
        </div>
        <div className="product-description__shopping shopping">
          <span className="shopping__title">Shopping</span>
          <span className="shopping__value">FREE</span>
        </div>
        <div className="product-description__tax tax">
          <span className="tax__title">Tax</span>
          <span className="tax__value">2.35</span>
        </div>
        <div className="product-description__discount discount">
          <span className="discount__title">Discount</span>
          <span className="discount__value">-$5</span>
        </div>
        <label className="product-description__credit credit" htmlFor="value-checkbox">
          <span className="credit__title">Credit (Balance $100)</span>
          <div className="credit__value value">
            <span className="value__val">$50</span>
            <input
              type="checkbox"
              id="value-checkbox"
              className="value__input-checkbox"
            />
            <div className="value__checkbox"></div>
          </div>
        </label>
      </div>
      <div className="product-info__product-ammount product-ammount">
        <div className="product-ammount__total total">
          <span className="total__title">
            TOTAL
          </span>
          <span className="total__value">
            $25.00
          </span>
        </div>
        <div className="product-ammount__link link">
          <span className="link">
            Have a <span className="link__text">coupon code</span>?
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
