import React, { Component } from 'react';
import Select from 'react-select';

import { Desktop, Mobile } from '../../App';
import './ShippingAddress.scss';

import { AppContext } from '../../App';

class ShippingAddress extends Component {
  constructor(props) {
    super(props);
    this.states = [
      { value: 'idaho', label: 'Idaho' },
      { value: 'iowa', label: 'Iowa' },
      { value: 'alabama', label: 'Alabama' },
      { value: 'alaska', label: 'Alaska' },
      { value: 'arizona', label: 'Arizona' },
      { value: 'arkansas', label: 'Arkansas' },
      { value: 'wyoming', label: 'Wyoming' },
      { value: 'washington', label: 'Washington' },
      { value: 'vermont', label: 'Vermont' },
      { value: 'indiana', label: 'Indiana' },
      { value: 'california', label: 'California' },
      { value: 'connecticut', label: 'Connecticut' },
    ];
    this.cities = [
      { value: 'new york', label: 'New York' },
      { value: 'los angeles', label: 'Los Angeles' },
      { value: 'chicago', label: 'Chicago' },
      { value: 'houston', label: 'Houston' },
      { value: 'philadelphia', label: 'Philadelphia' },
      { value: 'phoenix', label: 'Phoenix' },
      { value: 'san antonio', label: 'San Antonio' },
      { value: 'san diego', label: 'San Diego' },
      { value: 'dallas', label: 'Dallas' },
    ];
  }
  render() {
    return (
      <AppContext.Consumer>
        {
          context => (
            <div className="shipping-address">
              <div className="shipping-address__title">
                <p>Shipping address</p>
              </div>
              <div className="shipping-address__controls controls">
                <div className="controls__first-name controls_md controls--bottom">
                  <input
                    type="text"
                    className={`data-input ${!context.validation.firstName.isValid ? 'error' : ''}`}
                    placeholder="First name"
                    value={context.firstName}
                    onChange={context.changeFirstName}
                    onFocus={context.fieldIdent('firstName')}
                  />
                  {
                    !context.validation.firstName.isValid &&
                    <p className="error-notification">{context.validation.firstName.msg}</p>
                  }
                </div>
                <div className="controls__last-name controls_md controls--bottom">
                  <input
                    type="text"
                    className={`data-input ${!context.validation.lastName.isValid ? 'error' : ''}`}
                    placeholder="Last name"
                    value={context.lastName}
                    onChange={context.changeLastName}
                    onFocus={context.fieldIdent('lastName')}
                  />
                  {
                    !context.validation.lastName.isValid &&
                    <p className="error-notification">{context.validation.lastName.msg}</p>
                  }
                </div>
                <div className="controls__street-address controls_lg controls--bottom">
                  <input
                    type="text"
                    className={`data-input ${!context.validation.streetAddress.isValid ? 'error' : ''}`}
                    placeholder="Street address"
                    value={context.streetAddress}
                    onChange={context.changeStreetAddress}
                    onFocus={context.fieldIdent('streetAddress')}
                  />
                  {
                    !context.validation.streetAddress.isValid &&
                    <p className="error-notification">{context.validation.streetAddress.msg}</p>
                  }
                </div>
                <div className="controls__apt-sute controls_sm controls--bottom">
                  <input
                    type="text"
                    className={'data-input'}
                    placeholder="Apt/Sute(Optional)"
                    value={context.aptSute}
                    onChange={context.changeAptSute}
                  />
                </div>
                <div className="controls__zip controls_sm controls--bottom">
                  <input
                    type="text"
                    className={`data-input ${context.validation.zip.isValid === false ? 'error' : '' }`}
                    placeholder="Zip"
                    value={context.zip}
                    onChange={context.changeZip}
                    onFocus={context.fieldIdent('zip')}
                  />
                  {
                    context.validation.zip.isValid &&
                    <span className="check"></span>
                  }
                  {
                    context.validation.zip.isValid === false &&
                    <p className="error-notification">{context.validation.zip.msg}</p>
                  }
                </div>
                <div className="controls__state controls_sm state controls--bottom">
                  <Select
                    value={context.state}
                    onChange={context.changeState}
                    options={this.states}
                    placeholder="State"
                    classNamePrefix="select"
                    onFocus={() => context.changeState('')}
                    className={`${context.validation.state.isValid ? '' : 'error'}`}
                  />
                  {
                    !context.validation.state.isValid &&
                    <p className="error-notification">{context.validation.state.msg}</p>
                  }
                </div>
                <div className="controls__city controls_sm cities controls--bottom">
                  <Select
                    value={context.city}
                    onChange={context.changeCity}
                    options={this.cities}
                    placeholder="City"
                    classNamePrefix="select"
                    onFocus={() => context.changeCity('')}
                    className={`${context.validation.city.isValid ? '' : 'error'}`}
                  />
                  {
                    !context.validation.city.isValid &&
                    <p className="error-notification">{context.validation.city.msg}</p>
                  }
                </div>
                <Desktop>
                  <div className="controls__country controls_full controls--bottom">
                    <input
                      type="text"
                      className={`data-input ${!context.validation.country.isValid ? 'error' : ''}`}
                      placeholder="Country"
                      value={context.country}
                      onChange={context.changeCountry}
                      onFocus={context.fieldIdent('country')}
                    />
                    {
                      !context.validation.country.isValid &&
                      <p className="error-notification">{context.validation.country.msg}</p>
                    }
                  </div>
                </Desktop>
                <div className="controls__mobile controls_custom controls--bottom">
                  <input
                    type="text"
                    className={'data-input'}
                    placeholder="Mobile number(Optional)"
                    value={context.mobile}
                    onChange={context.changeMobile}
                  />
                </div>
                <Desktop>
                  <div className="controls__message controls_custom">
                    <p className="message">We may send you special discounts and offers</p>
                  </div>
                </Desktop>
                <div className="controls__agree controls_full checkbox">
                  <label className="checkbox__label label" htmlFor="agree-checkbox">
                    <input
                      type="checkbox"
                      id="agree-checkbox"
                      className="label__input"
                    />
                    <span className="label__box"></span>
                    <span className="label__text">Use this address as my billing address</span>
                  </label>
                </div>

              </div>
            </div>
          )
        }
      </AppContext.Consumer>
    );
  }
}

export default ShippingAddress;
