import { GET_PLANS } from 'src/redux/types'
import { firebaseFetch } from 'src/firebase/functions'
import { collections } from 'src/helpers/contants'

export const getPlans = () => ({
	type: GET_PLANS,
	payload: firebaseFetch(collections.plans)
})
