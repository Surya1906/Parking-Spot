export default function useEmailValidation(email) {
  if (!email) {
    return 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return 'Invalid email address'
  } else {
    return 'Valid'
  }
}
