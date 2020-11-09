import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Button } from 'src/components'
import {
	setPaymentRejected,
	setPaymentPending,
	setPaymentFulfilled,
	submitPayment,
	setNextPage
} from 'src/redux/actions'
import { Card } from './components'
import intl from 'src/i18n'
import './styles.scss'

const Payment = ({
	setPaymentFulfilled,
	setPaymentRejected,
	setPaymentPending,
	submitPayment,
	setNextPage,
	payment,
	loading,
	details,
	error,
	plan
}) => {
	const stripe = useStripe()
	const elements = useElements()

	useEffect(() => {
		const { requiresAction, clientSecret, completed } = payment

		if (requiresAction) {
			async function handleAction() {
				setPaymentPending()
				try {
					const result = await stripe.confirmCardPayment(clientSecret)
					if (result) {
						const { error } = result
						error
							? setPaymentRejected(error)
							: setPaymentFulfilled({
									completed: true,
									requiresAction: false,
									clientSecret: ''
							  })
					}
				} catch (error) {
					setPaymentRejected(error)
				}
			}
			handleAction()
		} else if (completed) {
			setNextPage()
		}
	}, [payment])

	const handleSubmit = async event => {
		event.preventDefault()

		try {
			setPaymentPending()
			const result = await stripe.createPaymentMethod({
				type: 'card',
				card: elements.getElement(CardElement)
			})

			if (result) {
				const { error, paymentMethod } = result

				error
					? setPaymentRejected(result)
					: submitPayment({ paymentMethod, details, planId: plan.id })
			}
		} catch (error) {
			setPaymentRejected(error)
		}
	}

	const styles = {
		root: 'payment',
		form: 'payment__form',
		container: 'payment__container',
		text: 'payment__text',
		button: { root: 'payment__submit-button' },
		details: 'payment__details',
		error: 'payment__error',
		element: 'payment__stripe-element'
	}

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.details}>
					<p className={styles.text}>{intl.selectedPlan}</p>
					<Card {...plan} />
				</div>
				<form className={styles.form} onSubmit={handleSubmit}>
					<p className={styles.text}>{intl.paymentDetails}</p>
					<CardElement className={styles.element} />
					<p className={styles.error}>{error.message}</p>
					<Button
						classes={styles.button}
						type="submit"
						loading={loading}
						disabled={!stripe}
					>
						{loading ? intl.processingPayment : intl.submitPayment}
					</Button>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	plan: state.plan,
	details: state.details.data,
	payment: state.payment.details,
	loading: state.payment.loading,
	error: state.payment.error
})

const mapDispatchToProps = dispatch => ({
	submitPayment: details => dispatch(submitPayment(details)),
	setPaymentPending: () => dispatch(setPaymentPending()),
	setPaymentRejected: error => dispatch(setPaymentRejected(error)),
	setNextPage: () => dispatch(setNextPage()),
	setPaymentFulfilled: details => dispatch(setPaymentFulfilled(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
