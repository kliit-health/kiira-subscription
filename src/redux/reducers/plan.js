import { createReducer } from '@reduxjs/toolkit'
import { SET_PLAN } from 'src/redux/types'

const initialState = {
	price: undefined,
	title: undefined,
	description: undefined,
	chats: undefined,
	visits: undefined
}

export default createReducer(initialState, {
	[SET_PLAN]: (_, { payload }) => {
		return payload
	}
})
