import React, { Component } from 'react';
import Responsive from 'react-responsive';
import Modal from 'react-modal';

import DesktopApp from './containers/desktop/DesktopApp';
import MobileApp from './containers/mobile/MobileApp';
import CardImage from './components/CardImage/CardImage';

import changeValue from './services/changeValue';
import clearForm from './services/clearForm';
import submitForm from './services/submitForm';
import fieldIdent from './services/fieldIdent';

export const Mobile = props => <Responsive {...props} maxWidth={767} />;
export const Desktop = props => <Responsive {...props} minWidth={768} />;

export const AppContext = React.createContext();

const customStyles = {
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '60%',
    maxHeight: '60%',
  },
};

Modal.setAppElement('#root');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      firstName: '',
      lastName: '',
      streetAddress: '',
      aptSute: '',
      zip: '',
      state: null,
      city: null,
      country: '',
      mobile: '',
      cardNumber: '',
      cvcCode: '',
      month: null,
      year: null,
      gender: null,
      validation: {
        email: {
          isValid: true,
          msg: '',
        },
        pass: {
          isValid: true,
          msg: '',
        },
        firstName: {
          isValid: true,
          msg: '',
        },
        lastName: {
          isValid: true,
          msg: '',
        },
        streetAddress: {
          isValid: true,
          msg: '',
        },
        zip: {
          isValid: null,
          msg: '',
        },
        state: {
          isValid: true,
          msg: '',
        },
        city: {
          isValid: true,
          msg: '',
        },
        country: {
          isValid: true,
          msg: '',
        },
        cardNumber: {
          isValid: true,
          msg: '',
        },
        cvcCode: {
          isValid: true,
          msg: '',
        },
        month: {
          isValid: true,
          msg: '',
        },
        year: {
          isValid: true,
          msg: '',
        },
        gender: {
          isValid: true,
          msg: 'fgdfgd',
        },
      },
      submitted: false,
      modalIsOpen: false,
      changeMail: e => changeValue('email', e.target.value, this),
      changePass: e => changeValue('pass', e.target.value, this),
      changeFirstName: e => changeValue('firstName', e.target.value, this),
      changeLastName: e => changeValue('lastName', e.target.value, this),
      changeStreetAddress: e => changeValue('streetAddress', e.target.value, this),
      changeAptSute: e => changeValue('aptSute', e.target.value, this),
      changeZip: e => changeValue('zip', e.target.value, this),
      changeState: e => changeValue('state', e, this),
      changeCity: e => changeValue('city', e, this),
      changeCountry: e => changeValue('country', e.target.value, this),
      changeMobile: e => changeValue('mobile', e.target.value, this),
      changeCardNumber: e => changeValue('cardNumber', e.target.value, this),
      changeCvcCode: e => changeValue('cvcCode', e.target.value, this),
      changeMonth: e => changeValue('month', e, this),
      changeYear: e => changeValue('year', e, this),
      changeGender: e => changeValue('gender', e.target.value, this),
      openModal: () => this.setState({ modalIsOpen: true }),
      fieldIdent: field => () => fieldIdent(field, this),
      onSubmit: () => submitForm(this),
      clear: () => clearForm(this),
    };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div className="app-wrapper">
        <AppContext.Provider value={this.state}>
          <Desktop><DesktopApp /></Desktop>
          <Mobile><MobileApp /></Mobile>
        </AppContext.Provider>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CardImage />
        </Modal>
      </div>
    );
  }
}

export default App;
