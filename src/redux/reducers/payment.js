import { createReducer } from '@reduxjs/toolkit'
import {
	SUBMIT_PAYMENT_PENDING,
	SUBMIT_PAYMENT_REJECTED,
	SUBMIT_PAYMENT_FULFILLED
} from 'src/redux/types'

const initialState = {
	details: {
		completed: false,
		requiresAction: false,
		clientSecret: ''
	},
	loading: false,
	error: {
		message: '',
		details: null
	}
}

export default createReducer(initialState, {
	[SUBMIT_PAYMENT_PENDING]: () => {
		return { ...initialState, loading: true }
	},
	[SUBMIT_PAYMENT_REJECTED]: (state, { payload }) => {
		return { ...initialState, error: { ...state.error, ...payload } }
	},
	[SUBMIT_PAYMENT_FULFILLED]: (_, { payload }) => {
		return { ...initialState, details: payload }
	}
})
