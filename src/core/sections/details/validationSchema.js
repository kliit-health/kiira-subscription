import intl from 'src/i18n'
import { verifyEmailAddress } from 'src/firebase/functions'
import { string, object } from 'yup'

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
const zipRegex = RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/)

export default object({
	firstName: string().required(intl.firstNameRequired),
	lastName: string().required(intl.lastNameRequired),
	phoneNumber: string()
		.matches(phoneRegex, intl.invalidPhoneNumber)
		.required(intl.phoneNumberRequired),
	email: string().email(intl.invalidEmailFormat).required(intl.emailRequired),
	postalCode: string()
		.matches(zipRegex, intl.invalidZipCode)
		.required(intl.zipCodeRequired)
})
