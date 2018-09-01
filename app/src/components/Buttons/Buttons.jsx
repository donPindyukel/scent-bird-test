import React from 'react';

import { Desktop, Mobile } from '../../App';
import './Buttons.scss';
import { AppContext } from '../../App';

function Buttons() {
  return (
    <AppContext.Consumer>
      {
        context => (
          <div className="buttons">
            <Desktop>
              <a className="buttons__back-button" href="#" onClick={context.clear}>
                Back
              </a>
            </Desktop>
            <button className="buttons__buy" onClick={context.onSubmit}>
              BUY NOW
            </button>
          </div>
        )
      }
    </AppContext.Consumer>
  );
}

export default Buttons;
