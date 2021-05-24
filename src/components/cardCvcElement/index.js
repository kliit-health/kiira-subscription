import React from 'react'
import { CardCvcElement as StripeElement } from '@stripe/react-stripe-js'
import { colors } from 'src/helpers/constants'
import './styles.scss'

const style = {
	base: {
		fontWeight: '400',
		fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
		fontSize: '18px',
		'::placeholder': {
			color: '#fff'
		}
	},
	invalid: {
		color: colors.red
	}
}

export const CardCvcElement = ({ label, error, ...rest }) => {
	const classes = {
		root: 'card-cvc-element',
		label: 'card-cvc-element__label',
		wrapper: 'card-cvc-element__wrapper'
	}

	return (
		<div className={classes.root}>
			<label className={classes.label}>{label}</label>
			<div className={classes.wrapper}>
				<StripeElement options={{ style }} />
			</div>
		</div>
	)
}
