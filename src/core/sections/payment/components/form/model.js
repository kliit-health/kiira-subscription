import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement
} from '@stripe/react-stripe-js'
import { StripeInput } from 'src/components'

export default [
	{
		dataKey: 'displayName',
		title: 'Name On Card',
		type: 'text',
		inputProps: undefined,
		inputComponent: undefined,
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
		inputProps: {
			component: CardNumberElement
		},
		inputComponent: StripeInput,
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
		inputComponent: StripeInput,
		inputProps: {
			component: CardExpiryElement
		},
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
		inputProps: {
			component: CardCvcElement
		},
		inputComponent: StripeInput,
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
		inputProps: undefined,
		inputComponent: undefined,
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
		inputProps: undefined,
		inputComponent: undefined,
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
		inputProps: undefined,
		inputComponent: undefined,
		grid: {
			md: 6,
			sm: 12,
			xs: 12
		}
	}
]
