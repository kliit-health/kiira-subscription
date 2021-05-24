import {
	TextField,
	CardNumberElement,
	CardCvcElement,
	CardExpiryElement
} from 'src/components'

export default [
	{
		dataKey: 'displayName',
		title: 'Name On Card',
		type: 'text',
		component: TextField,
		grid: {
			sm: 12,
			xs: 12,
			xs: 12
		}
	},
	{
		dataKey: 'cardNumber',
		title: 'Credit Card',
		type: 'number',
		component: CardNumberElement,
		grid: {
			md: 6,
			sm: 12,
			xs: 12
		}
	},
	{
		dataKey: 'expiration',
		title: 'Expiration',
		type: 'number',
		component: CardExpiryElement,
		grid: {
			md: 6,
			sm: 12,
			xs: 12
		}
	},
	{
		dataKey: 'securityCode',
		title: 'CVC',
		type: 'number',
		component: CardCvcElement,
		grid: {
			md: 6,
			sm: 12,
			xs: 12
		}
	},
	{
		dataKey: 'email',
		title: 'Email',
		type: 'email',
		component: TextField,
		grid: {
			md: 6,
			sm: 12,
			xs: 12
		}
	},
	{
		dataKey: 'phoneNumber',
		title: 'Phone Number',
		type: 'tel',
		component: TextField,
		grid: {
			md: 6,
			sm: 12,
			xs: 12
		}
	},
	{
		dataKey: 'postalCode',
		title: 'ZIP Code',
		type: 'text',
		component: TextField,
		grid: {
			md: 6,
			sm: 12,
			xs: 12
		}
	}
]
