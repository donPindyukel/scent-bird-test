export default function fieldIdent(field, ctx) {
  if (!ctx.state[field]) {
    const { validation } = ctx.state;
    validation[field] = {
      isValid: false,
      msg: 'This field is required',
    };
    ctx.setState({ validation });
  }
}
