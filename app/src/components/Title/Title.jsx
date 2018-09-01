import React from 'react';

import { Desktop, Mobile } from '../../App';
import './Title.scss';

function Title() {
  return (
    <div className="title">
      <Desktop>
        <h1 className="title__main-title">MONTH-TO-MONTH SUBSCRIPTION</h1>
      </Desktop>
      <Mobile>
        <h1 className="title__main-title">MONTHLY SUBSCRIPTION</h1>
      </Mobile>
      <p className="title__description">
        Billed monthly. Renews automatically, cancel any time. Free shipping.
      </p>
    </div>
  );
}

export default Title;
