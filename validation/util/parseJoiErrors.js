module.exports = function parseJoiErrors(joi) {
  const { error, value } = joi;
  if (!error) {
    return { value, errors: {}, isValid: true }
  }

  const errors = error.details.reduce((acc, err) => {
    let [name, message] = err.message.split('" ')
    name = name.substr(1)
    acc[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} ${message}`;
    return acc
  }, {})

  return { errors, value, isValid: false }
}