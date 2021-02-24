import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import { orderBy } from 'lodash'
import {
	GET_PLANS_FULFILLED,
	GET_PLANS_PENDING,
	GET_PLANS_REJECTED
} from 'src/redux/types'
import models from '../models'

const initialState = {
	data: [],
	loading: false,
	error: null
}

export default createReducer(initialState, {
	[GET_PLANS_PENDING]: state => {
		state.loading = true
		state.error = false
	},
	[GET_PLANS_FULFILLED]: (state, { payload }) => {
		const newOrder = orderBy(payload, ['price'], ['asc', 'desc'])

		state.loading = false
		state.error = false
		state.data = newOrder.map(plan => merge(models.plan, plan))
	},
	[GET_PLANS_REJECTED]: (_, { payload }) => {
		return { ...initialState, error: payload }
	}
})
