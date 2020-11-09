import {
	SET_DETAILS,
	SET_DETAILS_PENDING,
	SET_DETAILS_REJECTED,
	SET_NEXT_PAGE
} from 'src/redux/types'
import intl from 'src/i18n'
import { code } from 'src/helpers/contants'
import {
	verifyEmailAddress,
	createSubscriptionApplication
} from 'src/firebase/functions'

export const setDetails = ({ email, id, ...rest }) => async dispatch => {
	try {
		dispatch({
			type: SET_DETAILS_PENDING
		})

		const emailValidation = await verifyEmailAddress(email)
		const hasError = emailValidation.hasOwnProperty('errorInfo')
		const hasUser = emailValidation.hasOwnProperty('uid')

		if (hasError) {
			if (emailValidation.errorInfo.code === code.userNotFound) {
				dispatch({
					type: SET_DETAILS,
					payload: createSubscriptionApplication({ email, ...rest }).then(
						response => {
							dispatch({
								type: SET_NEXT_PAGE
							})
							return response
						}
					)
				})
			}
		} else if (hasUser) {
			dispatch({
				type: SET_DETAILS_REJECTED,
				payload: {
					message: intl.emailInUse
				}
			})
		}
	} catch (error) {
		dispatch({
			type: SET_DETAILS_REJECTED,
			payload: intl.couldNotValidateEmail
		})
	}
}
