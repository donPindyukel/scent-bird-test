import React, { Component } from 'react';
import Select from 'react-select';

import { Desktop, Mobile } from '../../App';
import './Payment.scss';
import { AppContext } from '../../App';


class Payment extends Component {
  constructor(props) {
    super(props);
    this.months = [
      { value: '1', label: '01' },
      { value: '2', label: '02' },
      { value: '3', label: '03' },
      { value: '4', label: '04' },
      { value: '5', label: '05' },
      { value: '6', label: '06' },
      { value: '7', label: '07' },
      { value: '8', label: '08' },
      { value: '9', label: '09' },
      { value: '10', label: '10' },
      { value: '11', label: '11' },
      { value: '12', label: '12' },
    ];
    this.years = [
      { value: '2007', label: '2007' },
      { value: '2008', label: '2008' },
      { value: '2009', label: '2009' },
      { value: '2010', label: '2010' },
      { value: '2011', label: '2011' },
      { value: '2012', label: '2012' },
      { value: '2013', label: '2013' },
      { value: '2014', label: '2014' },
      { value: '2015', label: '2015' },
      { value: '2016', label: '2016' },
      { value: '2017', label: '2017' },
      { value: '2018', label: '2018' },
    ];
  }
  render() {
    return (
      <AppContext.Consumer>
        {
          context => (
            <div className="payment">
              <div className="payment__title">
                <p>Secure credit card payment</p>
              </div>
              <div className="payment__payment-box payment-box">
                <div className="payment-box__header header">
                  <div className="header__secure secure">
                    <span className="secure__text">128-BIT ENCRYPTION. YOU'RE SAFE</span>
                    <div className="secure__accepts"></div>
                  </div>
                </div>
                <div className="payment-box__controls controls">
                  <div className="controls__credit-card-num">
                    <div className="controls__credit-card-num__wrap">
                      <input
                        type="text"
                        className={`data-input ${!context.validation.cardNumber.isValid ? 'error' : ''}`}
                        placeholder="Credit card number"
                        value={context.cardNumber}
                        onChange={context.changeCardNumber}
                        onFocus={context.fieldIdent('cardNumber')}
                      />
                      <div className="information" onClick={context.openModal}></div>
                    </div>
                    {
                      !context.validation.cardNumber.isValid &&
                      <p className="error-notification">{context.validation.cardNumber.msg}</p>
                    }
                  </div>
                  <div className="controls__secure-code">
                    <div className="controls__secure-code__wrap">
                      <input
                        type="text"
                        className={`data-input ${!context.validation.cvcCode.isValid ? 'error' : ''}`}
                        placeholder="Security code"
                        value={context.cvcCode}
                        onChange={context.changeCvcCode}
                        onFocus={context.fieldIdent('cvcCode')}
                      />
                      <div className="information" onClick={context.openModal}></div>
                    </div>

                    {
                      !context.validation.cvcCode.isValid &&
                      <p className="error-notification">{context.validation.cvcCode.msg}</p>
                    }
                  </div>
                  <div className="controls__exp-date exp-date">
                    <div className="exp-date__block">
                      <div className="exp-date__block_month">
                        <Select
                          value={context.month}
                          onChange={context.changeMonth}
                          options={this.months}
                          placeholder="Month"
                          classNamePrefix="select"
                          onFocus={() => context.changeMonth('')}
                          className={`${context.validation.month.isValid ? '' : 'error'}`}
                          maxMenuHeight={150}
                        />
                        {
                          !context.validation.month.isValid &&
                          <p className="error-notification">{context.validation.month.msg}</p>
                        }
                      </div>
                      <div className="exp-date__block_year">
                        <Select
                          value={context.year}
                          onChange={context.changeYear}
                          options={this.years}
                          placeholder="Year"
                          classNamePrefix="select"
                          onFocus={() => context.changeYear('')}
                          className={`${context.validation.year.isValid ? '' : 'error'}`}
                          maxMenuHeight={150}
                        />
                        {
                          !context.validation.year.isValid &&
                          <p className="error-notification">{context.validation.year.msg}</p>
                        }
                      </div>
                      <Desktop><span className="text">Exp.</span></Desktop>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </AppContext.Consumer>
    );
  }
}

export default Payment;
