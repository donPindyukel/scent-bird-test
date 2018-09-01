import React from 'react';

import './Instructions.scss';

function Instructions() {
  return (
    <div className="instructions">
      <div className="instructions__picture">
        <img src="/assets/picture.jpg" width="100%"/>
      </div>
      <div className="instructions__text">
        <p>
          You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
        </p>
      </div>
    </div>
  );
}

export default Instructions;
