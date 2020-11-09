import { string, object } from 'yup'
import valid from 'card-validator'
import intl from 'src/i18n'

export default object({
	firstName: string().required(intl.firstNameRequired),
	lastName: string().required(intl.lastNameRequired),
	cardNumber: string()
		.test(
			'test-credit-card-number',
			intl.invalidCreditCard,
			value => valid.number(value).isValid
		)
		.required(intl.creditCardNumberRequired),
	expirationDate: string()
		.test(
			'test-expiration-date',
			intl.invalidExpirationDate,
			value => valid.expirationDate(value).isValid
		)
		.required(intl.expirationDateRequired),
	securityCode: string()
		.test(
			'test-security-code',
			intl.invalidSecurityCode,
			value => valid.cvv(value).isValid
		)
		.required(intl.securityCodeRequired)
})
