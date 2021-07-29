import {
	CREATE_PAYMENT_METHOD,
	SUBMIT_PAYMENT,
	CONFIRM_CARD_PAYMENT,
	RESET_PAYMENT_REDUCER
} from 'src/redux/types'
import { processPayment } from 'src/firebase/functions'

export const createPaymentMethod = ({ numberElement, stripe, details }) => ({
	type: CREATE_PAYMENT_METHOD,
	payload: stripe
		.createPaymentMethod({
			type: 'card',
			card: numberElement
		})
		.then(({ paymentMethod, error }) => {
			if (error) throw Error
			return { paymentMethod, details }
		})
})

export const submitPayment = ({
	paymentMethod,
	email,
	displayName,
	phoneNumber,
	postalCode,
	plan
}) => ({
	type: SUBMIT_PAYMENT,
	payload: processPayment({
		paymentMethod,
		email,
		plan: { id: plan.id },
		displayName,
		phoneNumber,
		postalCode
	})
})

export const confirmCardPayment = ({ stripe, clientSecret }) => ({
	type: CONFIRM_CARD_PAYMENT,
	payload: stripe.confirmCardPayment(clientSecret)
})

export const resetPaymentReducer = () => ({
	type: RESET_PAYMENT_REDUCER
})
