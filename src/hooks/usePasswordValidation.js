export default function usePasswordValidation(password) {
  let errors = ''
  const passwordRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  )
  if (!password) {
    return 'Required'
  } else if (!passwordRegex.test(password)) {
    errors = 'Invalid password'
  } else {
    return 'Valid'
  }

  return errors
}
