import { createReducer } from '@reduxjs/toolkit'
import { orderBy } from 'lodash'
import {
	GET_PLANS_FULFILLED,
	GET_PLANS_PENDING,
	GET_PLANS_REJECTED
} from 'src/redux/types'

const initialState = {
	data: [],
	loading: false,
	error: null
}

export default createReducer(initialState, {
	[GET_PLANS_PENDING]: () => {
		return { ...initialState, loading: true }
	},
	[GET_PLANS_FULFILLED]: (_, { payload }) => {
		const newOrder = orderBy(payload, ['price'], ['asc', 'desc'])
		return { ...initialState, data: newOrder }
	},
	[GET_PLANS_REJECTED]: (_, { payload }) => {
		return { ...initialState, error: payload }
	}
})
