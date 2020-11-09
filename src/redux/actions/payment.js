import {
	SUBMIT_PAYMENT,
	SUBMIT_PAYMENT_FULFILLED,
	SUBMIT_PAYMENT_PENDING,
	SUBMIT_PAYMENT_REJECTED
} from 'src/redux/types'
import { processPlanPayment } from 'src/firebase/functions'

export const submitPayment = ({
	paymentMethod = null,
	paymentIntent = null,
	details,
	planId
}) => ({
	type: SUBMIT_PAYMENT,
	payload: processPlanPayment({ paymentMethod, paymentIntent, details, planId })
})

export const setPaymentPending = () => ({
	type: SUBMIT_PAYMENT_PENDING
})

export const setPaymentRejected = error => ({
	type: SUBMIT_PAYMENT_REJECTED,
	payload: error
})

export const setPaymentFulfilled = details => ({
	type: SUBMIT_PAYMENT_FULFILLED,
	payload: details
})
