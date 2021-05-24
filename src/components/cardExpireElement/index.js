import React from 'react'
import { CardExpiryElement as StripeElement } from '@stripe/react-stripe-js'
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

export const CardExpiryElement = ({ label, error, ...rest }) => {
	const classes = {
		root: 'card-expire-element',
		label: 'card-expire-element__label',
		wrapper: 'card-expire-element__wrapper'
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
