import React from 'react';
import { AppContext } from '../../App';

import './AccountCreate.scss';

function AccountCreate() {
  return (
    <AppContext.Consumer>
      {
        context => (
          <div className="account-create">
            <div className="account-create__title">
              <p>Create account</p>
            </div>
            <div className="account-create__controls controls">
              <div className="controls__email controls_position">
                <input
                  type="text"
                  className={`data-input ${!context.validation.email.isValid ? 'error' : ''}`}
                  placeholder="Email address"
                  value={context.email}
                  onChange={context.changeMail}
                  onFocus={context.fieldIdent('email')}
                />
                {
                  !context.validation.email.isValid &&
                    <p className="error-notification">{context.validation.email.msg}</p>
                }
              </div>
              <div className="controls__password controls_position">
                <input
                  type="password"
                  className={`data-input ${!context.validation.pass.isValid ? 'error' : ''}`}
                  placeholder="Password"
                  value={context.pass}
                  onChange={context.changePass}
                  onFocus={context.fieldIdent('pass')}
                />
                {
                  !context.validation.pass.isValid &&
                  <p className="error-notification">{context.validation.pass.msg}</p>
                }
              </div>
            </div>
            {
              context.submitted &&
              <div className="account-create__error-message">ERROR! This email has been already registered. Please <span>login</span> first or <span>click here</span> to get account details emailed to you.
              </div>
            }
            <div className="account-create__login-link">
              Have an account? <a href="#">Log in</a>
            </div>
          </div>
        )
      }
    </AppContext.Consumer>
  );
}

export default AccountCreate;
