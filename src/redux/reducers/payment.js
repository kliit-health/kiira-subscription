import { createReducer } from '@reduxjs/toolkit'
import intl from 'src/i18n'
import {
	SUBMIT_PAYMENT_PENDING,
	SUBMIT_PAYMENT_REJECTED,
	SUBMIT_PAYMENT_FULFILLED,
	CREATE_PAYMENT_METHOD_PENDING,
	CREATE_PAYMENT_METHOD_FULFILLED,
	CREATE_PAYMENT_METHOD_REJECTED,
	CONFIRM_CARD_PAYMENT_PENDING,
	CONFIRM_CARD_PAYMENT_FULFILLED,
	CONFIRM_CARD_PAYMENT_REJECTED,
	RESET_PAYMENT_REDUCER
} from 'src/redux/types'

const initialState = {
	paymentMethod: null,
	details: {
		displayName: '',
		cardNumber: '',
		expiration: '',
		securityCode: '',
		email: '',
		phoneNumber: '',
		postalCode: ''
	},
	completed: false,
	requiresAction: false,
	clientSecret: '',
	loading: false,
	error: null
}

export default createReducer(initialState, {
	[CREATE_PAYMENT_METHOD_PENDING]: () => ({
		...initialState,
		loading: true
	}),
	[CREATE_PAYMENT_METHOD_FULFILLED]: (
		_,
		{ payload: { paymentMethod, details } }
	) => ({
		...initialState,
		paymentMethod,
		details,
		loading: true
	}),
	[CREATE_PAYMENT_METHOD_REJECTED]: () => ({
		...initialState,
		error: intl.failedPayment
	}),
	[SUBMIT_PAYMENT_PENDING]: state => ({
		...state,
		loading: true
	}),
	[SUBMIT_PAYMENT_FULFILLED]: (
		state,
		{ payload: { requiresAction, clientSecret, completed } }
	) => ({
		...state,
		loading: requiresAction,
		requiresAction,
		clientSecret,
		completed
	}),
	[SUBMIT_PAYMENT_REJECTED]: () => ({
		...initialState,
		error: intl.failedPayment
	}),
	[CONFIRM_CARD_PAYMENT_PENDING]: state => ({
		...state,
		loading: true
	}),
	[CONFIRM_CARD_PAYMENT_FULFILLED]: state => ({
		...state,
		completed: true
	}),
	[CONFIRM_CARD_PAYMENT_REJECTED]: () => ({
		...initialState,
		error: intl.failedPayment
	}),
	[RESET_PAYMENT_REDUCER]: () => ({ ...initialState })
})
