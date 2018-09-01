export default function submitForm(ctx) {
  Object.keys(ctx.state.validation).forEach(field => {
    if (!ctx.state[field]) {
      ctx.state.validation[field] = {
        isValid: false,
        msg: 'This field is required',
      };
    }
  });
  ctx.setState(ctx.setState(Object.assign({}, ctx.state, { submitted: true })));
}
