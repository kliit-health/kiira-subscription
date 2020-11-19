import { createReducer } from '@reduxjs/toolkit'
import {
	SET_DETAILS_FULFILLED,
	SET_DETAILS_PENDING,
	SET_DETAILS_REJECTED
} from 'src/redux/types'

const initialState = {
	data: {
		profileInfo: {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: ''
		},
		address: {
			postalCode: ''
		},
		id: ''
	},
	error: null,
	loading: false
}

export default createReducer(initialState, {
	[SET_DETAILS_PENDING]: () => {
		return { ...initialState, loading: true }
	},
	[SET_DETAILS_FULFILLED]: (_, { payload }) => {
		return { ...initialState, data: payload }
	},
	[SET_DETAILS_REJECTED]: (_, { payload }) => {
		return { ...initialState, error: payload.message }
	}
})
