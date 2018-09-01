import React from 'react';

import { Desktop, Mobile } from '../../App';
import './GenderSelect.scss';
import { AppContext } from '../../App';

function GenderSelect() {
  return (
    <AppContext.Consumer>
      {
        context => (
          <div className="gender-select">
            <div className="gender-select__title">
              <p>Choise your subscription type</p>
            </div>
            <div className="gender-select__selector selector">
              <input
                id="genderMale"
                type="radio"
                name="gender"
                value="male"
                defaultChecked={context.gender === 'male'}
                onChange={context.changeGender}
              />
              <label
                htmlFor="genderMale"
                className="selector__male selector--styles"
              >
                <p>For men</p>
              </label>
              <input
                id="genderFemale"
                type="radio"
                name="gender"
                value="female"
                defaultChecked={context.gender === 'female'}
                onChange={context.changeGender}
              />
              <label htmlFor="genderFemale"
                     className="selector__female selector--styles"
              >
                <p>For women</p>
              </label>
            </div>
            {
              !context.validation.gender.isValid &&
              <p className="error-notification">{context.validation.gender.msg}</p>
            }
          </div>
        )
      }
    </AppContext.Consumer>
  );
}

export default GenderSelect;
