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
		styles: {
			flex: 4,
			minWidth: 200,
			margin: 5
		}
	},
	{
		dataKey: 'cardNumber',
		title: 'Credit Card',
		type: 'number',
		component: CardNumberElement,
		styles: {
			flex: 4,
			minWidth: 220,
			margin: 5
		}
	},
	{
		dataKey: 'expiration',
		title: 'Expiration',
		type: 'number',
		component: CardExpiryElement,
		styles: {
			flex: 2,
			minWidth: 80,
			margin: 5
		}
	},
	{
		dataKey: 'securityCode',
		title: 'CVC',
		type: 'number',
		component: CardCvcElement,
		styles: {
			flex: 2,
			minWidth: 50,
			margin: 5
		}
	},
	{
		dataKey: 'email',
		title: 'Email',
		type: 'email',
		component: TextField,
		styles: {
			flex: 3,
			minWidth: 220,
			margin: 5
		}
	},
	{
		dataKey: 'phoneNumber',
		title: 'Phone Number',
		type: 'tel',
		component: TextField,
		styles: {
			flex: 3,
			minWidth: 220,
			margin: 5
		}
	},
	{
		dataKey: 'postalCode',
		title: 'ZIP Code',
		type: 'text',
		component: TextField,
		styles: {
			flex: 3,
			minWidth: 220,
			margin: 5
		}
	}
]
