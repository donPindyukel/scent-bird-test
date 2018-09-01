const initialState = {
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
  cardNumber: '',
  cvcCode: '',
  month: null,
  year: null,
  gender: null,
  submitted: false,
};

export default function clearForm(ctx) {
  Object.keys(ctx.state.validation).forEach((field) => {
    if (field === 'zip') {
      ctx.state.validation[field] = {
        isValid: null,
        msg: '',
      };
    } else {
      ctx.state.validation[field] = {
        isValid: true,
        msg: '',
      };
    }
  });
  ctx.setState(Object.assign({}, ctx.state, initialState));
}
