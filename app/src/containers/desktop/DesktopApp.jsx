import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Instructions from '../../components/Instructions/Instructions';
import Title from '../../components/Title/Title';
import AccountCreate from '../../components/AccountCreate/AccountCreate';
import ShippingAddress from '../../components/ShippingAddress/ShippingAddress';
import Payment from '../../components/Payment/Payment';
import Buttons from '../../components/Buttons/Buttons';

import './DesktopApp.scss';

class DesktopApp extends Component {
  render() {
    return (
      <div className="desktop-app">
        <div className="logo-wrap">
          <Logo />
        </div>
        <div className="content">
          <div className="content__product-info">
            <ProductInfo />
            <Instructions />
          </div>
          <div className="content__subscription subscription">
            <div className="subscription__title-wrap">
              <Title />
            </div>
            <form className="subscription__form form" action='#'>
              <div className="form__create-account">
                <AccountCreate />
              </div>
              <div className="form__shipping-address">
                <ShippingAddress />
              </div>
              <div className="form__payment">
                <Payment />
              </div>
              <div className="buttons-wrap">
                <Buttons />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// https://thumbs.dreamstime.com/z/kreditkortframdel-och-baksida-71817307.jpg

export default DesktopApp;
