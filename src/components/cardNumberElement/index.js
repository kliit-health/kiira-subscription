import React from 'react'
import { CardNumberElement as StripeElement } from '@stripe/react-stripe-js'
import { colors } from 'src/helpers/constants'
import './styles.scss'

const style = {
	base: {
		fontWeight: '400',
		fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
		fontSize: '17px',
		'::placeholder': {
			color: '#fff'
		}
	},
	invalid: {
		color: colors.red
	}
}

export const CardNumberElement = ({ label, error, styles, ...rest }) => {
	const classes = {
		root: 'card-number-element',
		label: 'card-number-element__label',
		wrapper: 'card-number-element__wrapper'
	}

	return (
		<div style={styles} className={classes.root}>
			<label className={classes.label}>{label}</label>
			<div className={classes.wrapper}>
				<StripeElement options={{ style }} />
			</div>
		</div>
	)
}
