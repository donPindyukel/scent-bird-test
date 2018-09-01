import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import Title from '../../components/Title/Title';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ShippingAddress from '../../components/ShippingAddress/ShippingAddress';
import Payment from '../../components/Payment/Payment';
import Buttons from '../../components/Buttons/Buttons';
import Instructions from '../../components/Instructions/Instructions';
import GenderSelect from '../../components/GenderSelect/GenderSelect';

import './MobileApp.scss';

class MobileApp extends Component {
  render() {
    return (
      <div className="mobile-app">
        <div className="logo-wrap">
          <Logo />
        </div>
        <div className="content">
          <div className="content__title">
            <Title />
          </div>
          <div className="content__product-info">
            <ProductInfo />
          </div>
          <div className="content__gender-select">
            <GenderSelect />
          </div>
          <div className="content__shipping-address">
            <ShippingAddress />
          </div>
          <div className="content__payment">
            <Payment />
          </div>
          <div className="content__button">
            <Buttons />
          </div>
          <div className="content_descriptions">
            <Instructions />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileApp;
