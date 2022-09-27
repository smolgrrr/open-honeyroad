const requiredErrorMessage = (
  <p className="error-message">
    <img src="/BearNoCigSmall.png" alt="" />
    This field is required
  </p>
)

const maxLengthErrorMessage = n => {
  return (
    <p className="error-message">
      <img src="/BearNoCigSmall.png" alt="" />
      Max {n} characters
    </p>
  )
}

const minLengthErrorMessage = n => {
  return (
    <p className="error-message">
      <img src="/BearNoCigSmall.png" alt="" />
      Minimum {n} characters
    </p>
  )
}

const errorCheck = (field, type, message, errors) => {
  if (!errors) {
    return
  }
  const _bool = errors[field]?.type === type
  return message ? _bool && message : _bool
}

const nameErrors = errors => {
  return (
    <>
      {errorCheck('name', 'required', requiredErrorMessage, errors)}
      {errorCheck('name', 'maxLength', maxLengthErrorMessage(40), errors)}
    </>
  )
}

const nameErrorBool = errors => {
  return errorCheck('name', 'required', '', errors) ||
    errorCheck('name', 'maxLength', '', errors)
    ? 'error'
    : ''
}

const addressErrors = (field, errors) => {
  return (
    <>
      {errorCheck(field, 'required', requiredErrorMessage, errors)}
      {errorCheck(field, 'maxLength', maxLengthErrorMessage(100), errors)}
      {errorCheck(field, 'minLength', minLengthErrorMessage(3), errors)}
    </>
  )
}

const addressErrorBool = (field, errors) => {
  return errorCheck(field, 'required', '', errors) ||
    errorCheck(field, 'maxLength', '', errors) ||
    errorCheck(field, 'minLength', '', errors)
    ? 'error'
    : ''
}

export {nameErrors, nameErrorBool, addressErrors, addressErrorBool}
