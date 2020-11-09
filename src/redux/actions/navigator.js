import {
	SET_INDEX,
	SET_NEXT_PAGE,
	SET_PREVIOUS_PAGE,
	SET_LOADING
} from 'src/redux/types'

export const setIndex = index => ({
	type: SET_INDEX,
	payload: index
})

export const setNextPage = () => ({
	type: SET_NEXT_PAGE
})

export const setPreviousPage = () => ({
	type: SET_PREVIOUS_PAGE
})

export const setLoading = loading => ({
	type: SET_LOADING,
	payload: loading
})
