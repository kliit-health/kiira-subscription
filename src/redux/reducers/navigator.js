import { createReducer } from '@reduxjs/toolkit'
import {
	SET_INDEX,
	SET_NEXT_PAGE,
	SET_PREVIOUS_PAGE,
	SET_LOADING
} from 'src/redux/types'

const initialState = {
	index: 0,
	loading: false
}

export default createReducer(initialState, {
	[SET_INDEX]: (state, { payload }) => {
		state.index = payload
	},
	[SET_NEXT_PAGE]: state => {
		state.index = state.index === 3 ? 3 : state.index + 1
	},
	[SET_PREVIOUS_PAGE]: state => {
		state.index = state.index === 0 ? 0 : state.index - 1
	},
	[SET_LOADING]: (state, { payload }) => {
		state.loading = payload
	}
})
