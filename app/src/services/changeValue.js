const required = {
  isValid: false,
  msg: 'This field is required',
};

const mustBeEmail = {
  isValid: false,
  msg: 'This field must be email',
};

const mustBeZip = {
  isValid: false,
  msg: 'This field must be zip',
};

const resetErr = {
  isValid: true,
  msg: '',
};

const setStateValidation = (field, ctx, state) => {
  const { validation } = ctx.state;
  validation[field] = state;
  ctx.setState({ validation });
};

export default function changeValue(key, value, ctx) {
  ctx.setState({ [key]: value });
  const emailPattern = new RegExp(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/);
  const zipPattern = new RegExp(/(^\d{5}(-\d{4})?$)|(^[A-Z]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/);
  const numberPattern = new RegExp(/^\d+$/);
  switch (key) {
    case 'email':
      if (!value) {
        setStateValidation('email', ctx, required);
      } else if (!emailPattern.test(value)) {
        setStateValidation('email', ctx, mustBeEmail);
      } else {
        setStateValidation('email', ctx, resetErr);
      }
      break;
    case 'pass':
    case 'firstName':
    case 'lastName':
    case 'streetAddress':
    case 'state':
    case 'city':
    case 'country':
    case 'month':
    case 'year':
      if (!value) {
        setStateValidation(key, ctx, required);
      } else {
        setStateValidation(key, ctx, resetErr);
      }
      break;
    case 'zip':
      if (!value) {
        setStateValidation('zip', ctx, required);
      } else if (zipPattern.test(value)) {
        setStateValidation('zip', ctx, resetErr);
      } else {
        setStateValidation('zip', ctx, mustBeZip);
      }
      break;
    case 'mobile':
      if (!numberPattern.test(value)) {
        ctx.setState({ mobile: value.substr(0, value.length - 1) });
      }
      break;
    case 'cardNumber':
      if (!numberPattern.test(value)) {
        ctx.setState({ cardNumber: value.substr(0, value.length - 1) });
      } else if (!value) {
        setStateValidation(key, ctx, required);
      } else {
        setStateValidation(key, ctx, resetErr);
      }
      break;
    case 'cvcCode':
      if (!numberPattern.test(value)) {
        ctx.setState({ cvcCode: value.substr(0, value.length - 1) });
      } else if (!value) {
        setStateValidation(key, ctx, required);
      } else {
        if (value.length > 3) {
          ctx.setState({ cvcCode: value.substr(0, value.length - 1) });
        }
        setStateValidation(key, ctx, resetErr);
      }
      break;
    case 'gender':
      setStateValidation(key, ctx, resetErr);
      break;
    default: break;
  }
}
