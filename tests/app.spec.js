import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../app/src/App';

describe('App', () => {
  it('should render app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass('app')).to.be.equal(true);
  });
});
